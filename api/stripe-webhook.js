import Stripe from 'stripe';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

// INICIALIZAÇÃO DE ELITE: INDIVIDUAL E SEGURA
if (!getApps().length) {
    initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            // O segredo para não falhar: substituir as barras invertidas literais
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
        console.error("Erro de Assinatura:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const uid = session.client_reference_id;
        const priceId = session.metadata.priceId;
        
        const userRef = db.collection("usuarios").doc(uid);

        if (priceId === process.env.ID_ASSINATURA) {
            await userRef.update({ 
                status: "premium", 
                plano: "mensal_49_90",
                data_assinatura: FieldValue.serverTimestamp() 
            });
        } else if (priceId === process.env.ID_LIVRO) {
            await userRef.update({ 
                livro_adquirido: true, 
                data_compra_livro: FieldValue.serverTimestamp() 
            });
        }
    }
    res.status(200).json({ received: true });
}
