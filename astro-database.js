// astro-database.js
// MOTOR DE GERAÇÃO SEMÂNTICA DE ASTROLOGIA

// 1. DEFINIÇÕES BASE (O ALICERCE DO TEXTO)
const ARQUETIPOS_PLANETAS = {
    "sol": {
        titulo: "Sua Essência Vital",
        p1: "O Sol representa o centro da sua personalidade, sua força vital e o que te faz sentir vivo. É a energia que você irradia conscientemente.",
        acao: "busca se expressar através"
    },
    "lua": {
        titulo: "Seu Mundo Emocional",
        p1: "A Lua rege suas emoções, seus instintos e o que você precisa para se sentir seguro. Ela revela quem você é quando ninguém está olhando.",
        acao: "reage emocionalmente com"
    },
    "asc": {
        titulo: "Sua Máscara e Destino",
        p1: "O Ascendente é a 'porta da frente' da sua personalidade. Define sua aparência, sua primeira impressão e como você inicia novos projetos.",
        acao: "aborda a vida com"
    },
    "merc": {
        titulo: "Seu Intelecto",
        p1: "Mercúrio define como sua mente processa dados, como você fala e como aprende. É o filtro racional da sua psique.",
        acao: "comunica-se usando"
    },
    "venus": {
        titulo: "Amor e Valores",
        p1: "Vênus dita o que você valoriza, como você seduz e o que te dá prazer. É o planeta do amor, do dinheiro e da estética.",
        acao: "atrai o que deseja através de"
    },
    "marte": {
        titulo: "Ação e Conquista",
        p1: "Marte é seu guerreiro interior. Ele define como você luta pelo que quer, sua assertividade e sua energia sexual.",
        acao: "conquista seus objetivos com"
    },
    "jup": {
        titulo: "Expansão e Sorte",
        p1: "Júpiter mostra onde você tem sorte e onde busca sentido na vida. É a sua bússola moral e filosófica.",
        acao: "expande horizontes através de"
    },
    "sat": {
        titulo: "Lições e Estrutura",
        p1: "Saturno representa seus desafios, medos e onde você precisa de disciplina. É onde você amadurece com o tempo.",
        acao: "busca estrutura através de"
    }
};

const ARQUETIPOS_SIGNOS = {
    "Áries": {
        adj: "da impulsividade, da coragem e da iniciativa",
        modo: "de forma direta, competitiva e independente",
        foco: "na autonomia e na conquista rápida",
        desafio: "controlar a impaciência e pensar antes de agir"
    },
    "Touro": {
        adj: "da estabilidade, do conforto e da persistência",
        modo: "de forma prática, sensorial e deliberada",
        foco: "na segurança material e no prazer dos sentidos",
        desafio: "vencer a resistência à mudança e a teimosia"
    },
    "Gêmeos": {
        adj: "da curiosidade, da troca e da versatilidade",
        modo: "de forma racional, comunicativa e adaptável",
        foco: "na diversidade de informações e conexões sociais",
        desafio: "manter o foco e aprofundar-se nos temas"
    },
    "Câncer": {
        adj: "da sensibilidade, da proteção e da memória",
        modo: "de forma intuitiva, cautelosa e acolhedora",
        foco: "na segurança emocional, na família e no passado",
        desafio: "não se fechar em sua carapaça quando ferido"
    },
    "Leão": {
        adj: "da autoexpressão, da nobreza e do magnetismo",
        modo: "de forma criativa, generosa e dramática",
        foco: "no reconhecimento pessoal e na liderança",
        desafio: "controlar a necessidade de aprovação externa"
    },
    "Virgem": {
        adj: "da análise, do detalhe e do aprimoramento",
        modo: "de forma crítica, organizada e prestativa",
        foco: "na eficiência, na saúde e na ordem",
        desafio: "evitar o perfeccionismo paralisante"
    },
    "Libra": {
        adj: "da harmonia, da diplomacia e da estética",
        modo: "de forma equilibrada, justa e sociável",
        foco: "nas parcerias, no casamento e na beleza",
        desafio: "tomar decisões sem depender da opinião alheia"
    },
    "Escorpião": {
        adj: "da intensidade, do mistério e da transformação",
        modo: "de forma profunda, investigativa e apaixonada",
        foco: "no poder, na intimidade e no que está oculto",
        desafio: "controlar o desejo de controle e o ciúme"
    },
    "Sagitário": {
        adj: "da expansão, do otimismo e da busca pela verdade",
        modo: "de forma livre, filosófica e aventureira",
        foco: "no conhecimento superior, viagens e crenças",
        desafio: "lidar com os detalhes práticos da realidade"
    },
    "Capricórnio": {
        adj: "da ambição, da responsabilidade e da estrutura",
        modo: "de forma séria, planejada e resiliente",
        foco: "na carreira, no status e nas metas de longo prazo",
        desafio: "não deixar a rigidez endurecer o coração"
    },
    "Aquário": {
        adj: "da inovação, da liberdade e da coletividade",
        modo: "de forma original, rebelde e racional",
        foco: "no futuro, nos grupos e nas causas sociais",
        desafio: "conectar-se emocionalmente no nível individual"
    },
    "Peixes": {
        adj: "da empatia, da imaginação e da espiritualidade",
        modo: "de forma sensível, intuitiva e compassiva",
        foco: "na conexão com o todo, na arte e no sonho",
        desafio: "estabelecer limites claros e manter os pés no chão"
    }
};

// 2. TEXTOS "PREMIUM" ESPECÍFICOS (Onde você quiser escrever à mão)
// Se existir aqui, o sistema usa. Se não, ele GERA.
const GRIMORIO_VIP = {
    sol: {
        "Touro": `<h3><i class="fas fa-sun"></i> Sol em Touro: O Construtor</h3>
                  <p>Com o Sol em Touro, sua essência é a de um pilar de sustentação. Você não veio ao mundo para gastar energia à toa, mas para construir coisas duráveis. Seja uma carreira, uma casa ou uma família, o que você toca ganha solidez.</p>
                  <p>Sua paciência é lendária, assim como sua teimosia. Você opera no tempo da natureza: não se apressa a colheita. Sensorialmente apurado, você entende o mundo através do toque, do gosto e do conforto. Para você, a paz vale mais que a razão.</p>
                  <p><strong>Caminho de Evolução:</strong> Seu desafio é não confundir estabilidade com estagnação. Aprenda a soltar o que já não serve mais, confiando que sua segurança vem de dentro, não do que você possui.</p>`
    },
    asc: {
        "Leão": `<h3><i class="fas fa-arrow-up"></i> Ascendente em Leão: A Presença Real</h3>
                 <p>Independentemente do seu signo solar, sua "entrada" no mundo é majestosa. As pessoas notam quando você chega. Há um magnetismo natural, um calor e uma dignidade na sua postura que comanda respeito.</p>
                 <p>O destino tende a te colocar em posições de destaque ou liderança, mesmo que você não peça. Você tem orgulho da sua imagem e raramente se permite parecer fraco em público. Sua juba (cabelo) costuma ser um traço marcante.</p>
                 <p><strong>Caminho de Evolução:</strong> Usar esse brilho natural para inspirar e aquecer os outros, tornando-se um líder generoso, e não apenas buscar aplausos para o ego.</p>`
    }
};

// 3. A MÁQUINA DE ESCREVER (Gera texto para QUALQUER combinação)
function gerarInterpretacao(planetaID, signoRaw) {
    // Normaliza o nome do signo (Primeira letra maiúscula)
    if(!signoRaw) return "";
    const signo = signoRaw.charAt(0).toUpperCase() + signoRaw.slice(1).toLowerCase();

    // 1. Tenta achar texto VIP escrito à mão
    if (GRIMORIO_VIP[planetaID] && GRIMORIO_VIP[planetaID][signo]) {
        return GRIMORIO_VIP[planetaID][signo];
    }

    // 2. Se não achar, GERA O TEXTO AUTOMATICAMENTE
    const p = ARQUETIPOS_PLANETAS[planetaID];
    const s = ARQUETIPOS_SIGNOS[signo];

    // Fallback de segurança se o signo não for reconhecido
    if (!p || !s) return `<p>Analisando a posição de ${planetaID} em ${signo}...</p>`;

    // Ícone dinâmico
    let icon = "fa-star";
    if (planetaID === 'sol') icon = "fa-sun";
    if (planetaID === 'lua') icon = "fa-moon";
    if (planetaID === 'asc') icon = "fa-arrow-up";

    // O TEXTO GERADO (Template Rico)
    return `
        <h3><i class="fas ${icon}"></i> ${p.titulo}: ${planetaID === 'asc' ? 'Em' : ''} ${signo}</h3>
        <p><strong>O Astro:</strong> ${p.p1}</p>
        <p><strong>A Influência de ${signo}:</strong> Estando posicionado neste signo, essa função psicológica é tingida com as cores ${s.adj}. Você ${p.acao} ${s.modo}. É uma combinação que direciona seu foco vital ${s.foco}.</p>
        <p><strong>Dinâmica de Vida:</strong> Esta posição sugere que, para se sentir pleno nesta área, você precisa incorporar as qualidades elevadas de ${signo}. No entanto, deve estar atento à sua sombra: o grande desafio aqui é ${s.desafio}.</p>
    `;
}