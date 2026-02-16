import Stripe from 'stripe';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

// INICIALIZAÇÃO DE ELITE: INDIVIDUAL E SEGURA
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
        console.error("Erro de Assinatura Webhook:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const uid = session.client_reference_id;
        const priceId = session.metadata.priceId;
        
        const userRef = db.collection("usuarios").doc(uid);

        /**
         * RIGOR TÉCNICO: IDs ATUALIZADOS CONFORME PRINTS DE 16/02/2026
         * Se o ID que vier do Stripe for um destes, o banco de dados será atualizado.
         */
        const ID_MENSAL_NOVO = "price_1T1TO1Lc8MnSdAQGTLSfGS34";
        const ID_LIVRO_NOVO = "price_1T1TOkLc8MnSdAQGz5JdrjkB";

        try {
            if (priceId === ID_MENSAL_NOVO) {
                await userRef.update({ 
                    status: "premium", 
                    plano: "mensal_49_90",
                    data_assinatura: FieldValue.serverTimestamp() 
                });
                console.log(`[FIREBASE] Assinatura Mensal ativada para: ${uid}`);
            } 
            else if (priceId === ID_LIVRO_NOVO) {
                await userRef.update({ 
                    livro_adquirido: true, 
                    data_compra_livro: FieldValue.serverTimestamp() 
                });
                console.log(`[FIREBASE] Livro Master ativado para: ${uid}`);
            }
        } catch (dbError) {
            console.error("Erro ao gravar no Firestore:", dbError.message);
            return res.status(500).json({ error: "Falha na gravação final." });
        }
    }

    res.status(200).json({ received: true });
}
