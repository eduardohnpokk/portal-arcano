import Stripe from 'stripe';

/**
 * PRIORIDADE 13: ESPECIALISTA EM TI
 * Motor de Checkout configurado exclusivamente para Cartão de Crédito.
 */
export default async function handler(req, res) {
    // Rigor Técnico: Bloqueia qualquer método que não seja POST
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }
    
    // Inicialização segura dentro do handler para capturar erros de chave
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { priceId, uid, email, mode } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            // REGRA MANDATÓRIA: Apenas 'card'. PIX é terminantemente proibido.
            payment_method_types: ['card'], 
            line_items: [{ price: priceId, quantity: 1 }],
            mode: mode,
            customer_email: email,
            client_reference_id: uid,
            success_url: `${req.headers.origin}/dashboard-premium.html?success=true`,
            cancel_url: `${req.headers.origin}/dashboard.html`,
            metadata: { uid, priceId }
        });
        
        // Retorno limpo em formato JSON
        res.status(200).json({ url: session.url });
    } catch (error) {
        // Estudo de Falhas: Envia o erro real para o frontend
        console.error("ERRO CRÍTICO STRIPE:", error.message);
        res.status(500).json({ error: error.message });
    }
}
