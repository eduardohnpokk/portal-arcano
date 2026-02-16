import Stripe from 'stripe';

export default async function handler(req, res) {
    // Rigor Técnico: Bloqueia métodos não autorizados
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    // Inicialização interna para garantir a leitura das variáveis de ambiente no Vercel
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { priceId, uid, email, mode } = req.body;

    // Log de Diagnóstico (Aparecerá no console do Vercel)
    console.log(`Iniciando Checkout para UID: ${uid} | Price: ${priceId}`);

    try {
        const session = await stripe.checkout.sessions.create({
            // Regra Mandatória: Apenas cartão. PIX proibido conforme instrução.
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
        // Estudo de Falhas: Retorna o erro exato do Stripe para o alerta do site
        console.error("ERRO CRÍTICO STRIPE:", error.message);
        res.status(400).json({ error: error.message });
    }
}
