import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    // Rigor Técnico: Garante que apenas requisições de envio (POST) sejam processadas
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }
    
    const { priceId, uid, email, mode } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            // CORREÇÃO CIRÚRGICA: Removido 'pix' conforme regra mandatória do usuário
            payment_method_types: ['card'], 
            line_items: [{ price: priceId, quantity: 1 }],
            mode: mode,
            customer_email: email,
            client_reference_id: uid,
            success_url: `${req.headers.origin}/dashboard-premium.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/dashboard.html`,
            metadata: { uid, priceId }
        });
        
        // Retorna a URL de pagamento para o frontend
        res.status(200).json({ url: session.url });
    } catch (error) {
        // Estudo de Falhas: Registra o erro exato para diagnóstico no log do Vercel
        console.error("Erro no Stripe Checkout:", error.message);
        res.status(500).json({ error: error.message });
    }
}
