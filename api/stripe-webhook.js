import Stripe from 'stripe';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

/**
 * PRIORIDADE 13: PENSAR COMO ESPECIALISTA EM TI
 * Inicialização do Firebase Admin com Rigor Técnico.
 * Verifica se já existe uma instância ativa para evitar erros de redeploy no Vercel.
 */
if (!getApps().length) {
    initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            // Tradução técnica das quebras de linha da chave privada no ambiente Vercel
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
    });
}

const db = getFirestore();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Configuração obrigatória para que o Stripe consiga validar a assinatura do Webhook
export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const chunks = [];
    for await (const chunk of req) { chunks.push(chunk); }
    const rawBody = Buffer.concat(chunks);
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        // Validação do Lacre de Segurança (Webhook Secret)
        event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error("ERRO DE SEGURANÇA: Assinatura do Webhook inválida.", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    /**
     * PROCESSAMENTO DO EVENTO DE SUCESSO
     * Este bloco só é executado quando o Stripe confirma que o dinheiro caiu.
     */
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const uid = session.client_reference_id;
        const priceId = session.metadata.priceId;
        
        const userRef = db.collection("usuarios").doc(uid);

        try {
            if (priceId === process.env.ID_ASSINATURA) {
                // Ativação da Mensalidade de 49,90
                await userRef.update({ 
                    status: "premium", 
                    plano: "mensal_49_90",
                    data_assinatura: FieldValue.serverTimestamp() 
                });
                console.log(`[SUCESSO] Usuário ${uid} sintonizado como PREMIUM.`);
            } 
            else if (priceId === process.env.ID_LIVRO) {
                // Ativação do Livro do Destino Master (Venda Única)
                await userRef.update({ 
                    livro_adquirido: true, 
                    data_compra_livro: FieldValue.serverTimestamp() 
                });
                console.log(`[SUCESSO] Livro Master liberado para o usuário ${uid}.`);
            }
        } catch (dbError) {
            console.error("ERRO NO BANCO DE DADOS:", dbError.message);
            // Retornamos 500 para o Stripe tentar novamente mais tarde
            return res.status(500).json({ error: "Falha ao gravar no Firebase" });
        }
    }

    // Resposta 200 informa ao Stripe que recebemos a mensagem com sucesso
    res.status(200).json({ received: true });
}
