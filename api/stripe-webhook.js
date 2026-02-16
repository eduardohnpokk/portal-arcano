import Stripe from 'stripe';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

if (!getApps().length) {
    initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
    });
}

const db = getFirestore();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const chunks = [];
    for await (const chunk of req) { chunks.push(chunk); }
    const rawBody = Buffer.concat(chunks);
    const sig = req.headers['stripe-signature'];

    let event;
    try {
        // RIGOR TÉCNICO: O STRIPE_WEBHOOK_SECRET deve ser o whsec_live no Vercel
        event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error("ERRO WEBHOOK PRODUÇÃO:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // IDs REAIS DE PRODUÇÃO (Substitua pelos novos gerados no Live Mode)
    const ID_LIVE_MENSAL = "COLE_AQUI_O_ID_DO_PRINT_1";
    const ID_LIVE_LIVRO = "COLE_AQUI_O_ID_DO_PRINT_2";

    const session = event.data.object;
    const uid = session.client_reference_id || session.metadata?.uid;

    switch (event.type) {
        case 'checkout.session.completed':
            const priceId = session.metadata.priceId;
            if (priceId === ID_LIVE_MENSAL) {
                await db.collection("usuarios").doc(uid).update({ status: "premium", plano: "mensal_live", data_assinatura: FieldValue.serverTimestamp() });
            } else if (priceId === ID_LIVE_LIVRO) {
                await db.collection("usuarios").doc(uid).update({ livro_adquirido: true, data_compra_livro: FieldValue.serverTimestamp() });
            }
            break;

        case 'invoice.paid':
            // Garante a renovação mensal automática
            const subId = session.subscription;
            if (subId) {
                const subscription = await stripe.subscriptions.retrieve(subId);
                const customerUid = subscription.metadata.uid;
                await db.collection("usuarios").doc(customerUid).update({ status: "premium", ultima_renovacao: FieldValue.serverTimestamp() });
            }
            break;

        case 'customer.subscription.deleted':
            // Revogação de acesso por falta de pagamento ou cancelamento
            const canceledUid = session.metadata.uid;
            await db.collection("usuarios").doc(canceledUid).update({ status: "free", plano: "cancelado" });
            break;
    }

    res.status(200).json({ received: true });
}
