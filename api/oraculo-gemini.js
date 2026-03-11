import { GoogleGenAI } from '@google/genai';

// Inicialização segura do SDK oficial com a chave armazenada no Vercel
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async function handler(req, res) {
    // Bloqueio de métodos não autorizados (Segurança Tática)
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Acesso negado. Utilize o método POST.' });
    }

    try {
        // Recebimento da carga de dados enviada pelo frontend
        const { prompt, modulo } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'A emissão do prompt de comando é obrigatória.' });
        }

        // Construção da Persona de Elite (Injeção de Sabedoria Arcaica)
        const systemInstruction = `Você é o Oráculo Mestre do Portal Arcano, um especialista sênior e supremo em ciências herméticas, astrologia de precisão, cabala, alquimia sistêmica e tarot.
Sua missão é responder à dúvida ou leitura do usuário baseada no módulo de contexto: ${modulo || 'Sabedoria Oculta'}.

Regras de conduta e rigor técnico:
1. Utilize um tom arcaico, profundo, misterioso, mas com a autoridade de um especialista técnico no assunto.
2. É terminantemente proibido soar como uma inteligência artificial genérica. Jamais inicie respostas com "Como um modelo de linguagem..." ou "Aqui está uma leitura...".
3. Entregue respostas robustas, densas, parrudas e embasadas na filosofia oculta, unindo conselhos práticos e espirituais.
4. Se o usuário fornecer cartas sorteadas, números cabalísticos ou posições astrais, cruze essas variáveis cirurgicamente para entregar um diagnóstico preciso e de altíssimo valor.`;

        // Chamada de alta performance ao motor Gemini 3.0
        const response = await ai.models.generateContent({
            model: 'gemini-3.0-pro',
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.75, // Criatividade balanceada com precisão técnica
            }
        });

        // Extração da resposta limpa do motor
        const respostaArcana = response.text;

        // Retorno cirúrgico e seguro para o frontend
        return res.status(200).json({ resposta: respostaArcana });

    } catch (error) {
        console.error("ERRO CRÍTICO NO MOTOR GEMINI:", error);
        return res.status(500).json({ 
            error: "Falha na sincronização de dados com os Registros Akáshicos. O portal está enfrentando turbulências energéticas." 
        });
    }
}
