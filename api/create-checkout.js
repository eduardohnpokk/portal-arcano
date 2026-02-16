import Stripe from 'stripe';

/**
 * PRIORIDADE 13: ESPECIALISTA EM TI
 * Motor de Checkout Integral - Versão 2026.02.16
 */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    
    const { priceId, uid, email, mode } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            // REGRA MANDATÓRIA: Apenas cartão. PIX proibido.
            payment_method_types: ['card'], 
            line_items: [{ price: priceId, quantity: 1 }],
            mode: mode,
            customer_email: email,
            client_reference_id: uid,
            success_url: `${req.headers.origin}/dashboard-premium.html?success=true`,
            cancel_url: `${req.headers.origin}/dashboard-premium.html?cancel=true`,
            metadata: { uid, priceId }
        });
        
        res.status(200).json({ url: session.url });
    } catch (error) {
        // Estudo de Falhas: Captura o erro "No such price" e o envia para o site
        console.error("ERRO STRIPE:", error.message);
        res.status(400).json({ error: error.message });
    }
}
