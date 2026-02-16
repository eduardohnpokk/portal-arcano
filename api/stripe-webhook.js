import Stripe from 'stripe';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

// INICIALIZAÇÃO DE ELITE: SEGURA E ÚNICA
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
        // RIGOR TÉCNICO: Verificação do Segredo de Assinatura (whsec_)
        event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error("DEBUG WEBHOOK: Erro de Assinatura!", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // SONDA 1: Evento recebido com sucesso
    console.log(`DEBUG WEBHOOK: Evento recebido -> ${event.type}`);

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const uid = session.client_reference_id;
        const priceId = session.metadata ? session.metadata.priceId : null;
        
        // SONDA 2: Extração de Metadados
        console.log(`DEBUG WEBHOOK: UID extraído: ${uid}`);
        console.log(`DEBUG WEBHOOK: PriceID extraído: ${priceId}`);

        if (!uid) {
            console.error("DEBUG WEBHOOK: UID não encontrado na sessão!");
            return res.status(200).json({ received: true });
        }

        const userRef = db.collection("usuarios").doc(uid);

        // IDs CONFIGURADOS CONFORME PRINTS DE 16/02/2026
        const ID_MENSAL_NOVO = "price_1T1TO1Lc8MnSdAQGTLSfGS34";
        const ID_LIVRO_NOVO = "price_1T1TOkLc8MnSdAQGz5JdrjkB";

        try {
            if (priceId === ID_MENSAL_NOVO) {
                await userRef.update({ 
                    status: "premium", 
                    plano: "mensal_49_90",
                    data_assinatura: FieldValue.serverTimestamp() 
                });
                console.log(`[SUCESSO] Firebase atualizado: Acesso Premium para ${uid}`);
            } 
            else if (priceId === ID_LIVRO_NOVO) {
                await userRef.update({ 
                    livro_adquirido: true, 
                    data_compra_livro: FieldValue.serverTimestamp() 
                });
                console.log(`[SUCESSO] Firebase atualizado: Livro Master para ${uid}`);
            } else {
                console.warn(`DEBUG WEBHOOK: PriceID ${priceId} não corresponde aos IDs configurados.`);
            }
        } catch (dbError) {
            console.error("DEBUG WEBHOOK: Falha ao gravar no Firestore!", dbError.message);
            return res.status(500).json({ error: "Erro de banco de dados" });
        }
    }

    res.status(200).json({ received: true });
}
