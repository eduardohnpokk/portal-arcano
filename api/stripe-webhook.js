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
        event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error("ERRO WEBHOOK PRODUÇÃO:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // IDs DE PRODUÇÃO (Extraídos de image_8a18e2.png e image_8a1921.png)
    const ID_LIVE_MENSAL = "price_1T1TO1Lc8MnSdAQGTLSfGS34";
    const ID_LIVE_LIVRO = "price_1T1TOkLc8MnSdAQGz5JdrjkB";

    const session = event.data.object;
    const uid = session.client_reference_id || (session.metadata ? session.metadata.uid : null);

    try {
        switch (event.type) {
            case 'checkout.session.completed':
                const priceId = session.metadata ? session.metadata.priceId : null;
                if (priceId === ID_LIVE_MENSAL) {
                    await db.collection("usuarios").doc(uid).update({ 
                        status: "premium", 
                        plano: "mensal_live", 
                        data_assinatura: FieldValue.serverTimestamp() 
                    });
                    console.log(`[PRODUÇÃO] Assinatura ativa: ${uid}`);
                } else if (priceId === ID_LIVE_LIVRO) {
                    await db.collection("usuarios").doc(uid).update({ 
                        livro_adquirido: true, 
                        data_compra_livro: FieldValue.serverTimestamp() 
                    });
                    console.log(`[PRODUÇÃO] Livro Master adquirido: ${uid}`);
                }
                break;

            case 'invoice.paid':
                // Renovação mensal automática via Stripe Subscription
                const subId = session.subscription;
                if (subId) {
                    const subscription = await stripe.subscriptions.retrieve(subId);
                    const subUid = subscription.metadata.uid;
                    if (subUid) {
                        await db.collection("usuarios").doc(subUid).update({ 
                            status: "premium", 
                            ultima_renovacao: FieldValue.serverTimestamp() 
                        });
                    }
                }
                break;

            case 'customer.subscription.deleted':
                // Revogação de acesso por cancelamento ou inadimplência
                const canceledUid = session.metadata ? session.metadata.uid : null;
                if (canceledUid) {
                    await db.collection("usuarios").doc(canceledUid).update({ 
                        status: "free", 
                        plano: "cancelado" 
                    });
                }
                break;
        }
    } catch (dbError) {
        console.error("ERRO FIREBASE PRODUÇÃO:", dbError.message);
        return res.status(500).json({ error: "Erro de banco de dados" });
    }

    res.status(200).json({ received: true });
}
