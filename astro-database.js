// astro-database.js
// MOTOR DE INTERPRETAÇÃO SEMÂNTICA

// 1. TEXTOS FIXOS (PRIORIDADE ALTA)
// Use isso para Sol, Lua e Ascendente onde queremos um toque humano perfeito.
const GRIMORIO_ESPECIAL = {
    "sol": {
        "Touro": `<h3><i class="fas fa-sun"></i> Sol em Touro: A Força da Terra</h3>
                  <p>Com o Sol em Touro, sua essência vital é sustentada pelos pilares da estabilidade e da construção. Diferente da impulsividade de outros signos, sua energia é constante, paciente e incrivelmente resistente. Você veio a este mundo para materializar o espírito, dando forma e valor às coisas.</p>
                  <p>Sua psicologia é orientada pela busca de segurança e prazer sensorial. Não há culpa em desejar o conforto; para você, a matéria é sagrada. Sua lealdade é lendária, assim como sua determinação. Uma vez que você decide um caminho, é como um trem em movimento: impossível de parar.</p>
                  <p><strong>Desafio de Vida:</strong> Aprender a diferença entre persistência e teimosia. Aceitar que a mudança é a única constante do universo, sem perder seu chão.</p>`,
        // ... (Adicione os outros 11 signos solares aqui com o tempo)
    },
    "asc": {
        "Gêmeos": `<h3><i class="fas fa-arrow-up"></i> Ascendente em Gêmeos: O Comunicador</h3>
                   <p>Sua "porta de entrada" no mundo é mental e curiosa. As pessoas te percebem imediatamente como alguém jovial, inquieto e inteligente. Você tem um olhar vivo que varre o ambiente captando informações rapidamente. A vida, para você, é um quebra-cabeça a ser resolvido.</p>
                   <p>Você aborda novas situações conversando e trocando ideias. Seu superpoder é a adaptabilidade; você consegue transitar por diferentes grupos sociais com facilidade. Porém, pode passar a impressão de ser inconstante para pessoas mais rígidas.</p>`
        // ... (Adicione os outros Ascendentes)
    },
    "lua": {
        "Peixes": `<h3><i class="fas fa-moon"></i> Lua em Peixes: O Oceano Interior</h3>
                   <p>Sua estrutura emocional é a mais sensível do zodíaco. Você é uma "esponja psíquica", absorvendo a atmosfera ao seu redor. Muitas vezes, você não sabe distinguir se o que sente é seu ou de outra pessoa. Sua compaixão e empatia são infinitas.</p>
                   <p>Para se sentir seguro, você precisa de refúgio. O mundo real, cru e duro, machuca sua alma. Você se recarrega através do sono, da música, da arte ou da meditação. Cuidado apenas com a tendência a fugir da realidade quando as coisas ficam difíceis.</p>`
        // ... (Adicione as outras Luas)
    }
};

// 2. O GERADOR AUTOMÁTICO (BACKUP INTELIGENTE)
// Se não houver texto acima, o sistema monta o texto usando estas definições.

const DEFINICOES_PLANETAS = {
    "merc": { titulo: "O Intelecto", acao: "processa informações", tema: "comunicação e raciocínio" },
    "venus": { titulo: "O Amor e Valor", acao: "busca conexão", tema: "relacionamentos e finanças" },
    "marte": { titulo: "A Ação e Guerra", acao: "luta e conquista", tema: "energia, coragem e assertividade" },
    "jup":   { titulo: "A Expansão", acao: "busca crescimento", tema: "sorte, fé e sabedoria superior" },
    "sat":   { titulo: "O Mestre do Tempo", acao: "estrutura e limita", tema: "responsabilidade, carma e lições de vida" }
};

const DEFINICOES_SIGNOS = {
    "Áries": { modo: "de forma impulsiva, direta e corajosa", foco: "na autonomia e na liderança", desafio: "controlar a impaciência" },
    "Touro": { modo: "de forma lenta, prática e sensorial", foco: "na segurança material e no conforto", desafio: "vencer a teimosia" },
    "Gêmeos": { modo: "de forma rápida, curiosa e versátil", foco: "na troca de ideias e na diversidade", desafio: "manter o foco" },
    "Câncer": { modo: "de forma emocional, protetora e intuitiva", foco: "na segurança emocional e na família", desafio: "não guardar mágoas" },
    "Leão": { modo: "de forma expressiva, nobre e dramática", foco: "no reconhecimento e na autoexpressão", desafio: "controlar o ego" },
    "Virgem": { modo: "de forma analítica, crítica e detalhista", foco: "na perfeição e na utilidade", desafio: "evitar o perfeccionismo paralisante" },
    "Libra": { modo: "de forma diplomática, justa e equilibrada", foco: "na harmonia e nas parcerias", desafio: "tomar decisões difíceis" },
    "Escorpião": { modo: "de forma intensa, profunda e investigativa", foco: "na transformação e no poder oculto", desafio: "controlar a desconfiança" },
    "Sagitário": { modo: "de forma expansiva, otimista e filosófica", foco: "na verdade e na liberdade", desafio: "lidar com detalhes práticos" },
    "Capricórnio": { modo: "de forma séria, ambiciosa e estruturada", foco: "no status e na realização a longo prazo", desafio: "não ser rígido demais" },
    "Aquário": { modo: "de forma original, rebelde e coletiva", foco: "na inovação e no futuro", desafio: "lidar com a intimidade emocional" },
    "Peixes": { modo: "de forma empática, sonhadora e sensível", foco: "na espiritualidade e na fusão", desafio: "manter os pés no chão" }
};

// A Função Mágica que Escreve o Texto
function gerarInterpretacao(planetaID, signo) {
    // 1. Tenta pegar do Grimório Especial (escrito à mão)
    if (GRIMORIO_ESPECIAL[planetaID] && GRIMORIO_ESPECIAL[planetaID][signo]) {
        return GRIMORIO_ESPECIAL[planetaID][signo];
    }

    // 2. Se não existir, GERA o texto dinamicamente
    const p = DEFINICOES_PLANETAS[planetaID];
    const s = DEFINICOES_SIGNOS[signo];
    
    // Fallback de segurança se algo vier undefined
    if (!p || !s) return `<p>Posição de ${planetaID} em ${signo} em análise pelos mestres.</p>`;

    // Montagem do Texto Gerado (Template Literário)
    let nomePlaneta = "";
    if(planetaID === 'merc') nomePlaneta = "Mercúrio";
    if(planetaID === 'venus') nomePlaneta = "Vênus";
    if(planetaID === 'marte') nomePlaneta = "Marte";
    if(planetaID === 'jup') nomePlaneta = "Júpiter";
    if(planetaID === 'sat') nomePlaneta = "Saturno";

    // Ícone baseado no ID
    let icon = "fa-star";
    if(planetaID === 'merc') icon = "fa-mercury"; // Note: font awesome free might not have planetary symbols, fallback to letters or standard icons in HTML
    
    return `
        <h3><i class="fas ${icon}"></i> ${nomePlaneta} em ${signo}: ${p.titulo}</h3>
        <p><strong>A Natureza Planetária:</strong> ${nomePlaneta} é o astro que rege ${p.tema} no seu mapa natal. É a lente através da qual você ${p.acao}. Sua posição revela COMO essas funções operam na sua psique.</p>
        <p><strong>A Influência do Signo:</strong> Estando em ${signo}, essa energia planetária se manifesta ${s.modo}. Seu foco principal nesta área da vida está ${s.foco}. É uma combinação que tinge a função de ${nomePlaneta} com as cores elementares de ${signo}.</p>
        <p><strong>Conselho Evolutivo:</strong> O grande aprendizado desta posição é ${s.desafio}. Ao equilibrar a natureza de ${nomePlaneta} com a energia de ${signo}, você desbloqueia um potencial latente.</p>
    `;
}