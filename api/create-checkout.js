import Stripe from 'stripe';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    
    // Inicialização segura: utiliza a chave sk_test que você acabou de atualizar
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { priceId, uid, email, mode } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], // APENAS CARTÃO
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
        console.error("ERRO STRIPE:", error.message);
        res.status(400).json({ error: error.message });
    }
}
