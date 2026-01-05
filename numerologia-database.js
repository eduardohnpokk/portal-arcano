// numerologia-database.js
// MOTOR DE CÁLCULO CABALÍSTICO & INTERPRETAÇÃO

// 1. TABELA DE GEMATRIA (CABALÍSTICA)
// A=1, B=2, C=3, D=4, E=5, F=8, G=3, H=5, I=1, J=1, K=2, L=3, M=4, N=5, O=7, P=8, Q=1, R=2, S=3, T=4, U=6, V=6, W=5, X=6, Y=1, Z=7
const TABELA_CABALA = {
    'A': 1, 'J': 1, 'S': 3,
    'B': 2, 'K': 2, 'T': 4,
    'C': 3, 'L': 3, 'U': 6,
    'D': 4, 'M': 4, 'V': 6,
    'E': 5, 'N': 5, 'W': 5,
    'F': 8, 'O': 7, 'X': 6,
    'G': 3, 'P': 8, 'Y': 1,
    'H': 5, 'Q': 1, 'Z': 7,
    'I': 1, 'R': 2
};

// ACENTOS (Cabalística considera acentos como valores adicionais ou letras base alteradas)
// Para simplificação robusta neste nível, normalizamos para a letra base,
// mas em sistemas ultra-complexos, o acento agudo soma +2. 
// AQUI: Usaremos a letra base para garantir funcionamento universal inicial.
const MAPA_ACENTOS = {
    'Á': 'A', 'Ã': 'A', 'Â': 'A', 'É': 'E', 'Ê': 'E', 'Í': 'I', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ú': 'U', 'Ç': 'C'
};

// 2. TEXTOS PROFUNDOS (O GRIMÓRIO NUMÉRICO)
const TEXTOS_NUMEROS = {
    "1": {
        titulo: "O Líder Pioneiro",
        arquetipo: "O Mago / O Imperador",
        desc: "O Número 1 representa o princípio masculino, a ação, a iniciativa e a originalidade. É a vibração do início, da semente que rompe a terra.",
        motiva: "Sua alma anseia por independência. Você não nasceu para seguir, mas para abrir caminhos. A submissão corrói seu espírito.",
        impres: "O mundo te vê como alguém confiante, talvez um pouco arrogante ou distante, mas inegavelmente capaz. Você transmite autoridade.",
        destino: "Seu caminho envolve assumir a liderança e aprender a ficar sozinho sem se sentir solitário. A inovação é sua chave de sucesso."
    },
    "2": {
        titulo: "O Diplomata Sensitivo",
        arquetipo: "A Sacerdotisa",
        desc: "O Número 2 representa o princípio feminino, a receptividade, a união e a sensibilidade. É a cola que mantém o universo unido.",
        motiva: "Sua alma busca a paz e a harmonia. O conflito é fisicamente doloroso para você. Você deseja amar e ser amado acima de tudo.",
        impres: "O mundo te vê como alguém gentil, bom ouvinte e atento aos detalhes. Você transmite uma aura de acolhimento.",
        destino: "Seu caminho é o da cooperação. Você veio para curar, mediar e ensinar o poder da parceria."
    },
    "3": {
        titulo: "O Comunicador Criativo",
        arquetipo: "A Imperatriz",
        desc: "O Número 3 é a criança divina, a expressão pura e a alegria de viver. É a vibração da comunicação e da arte.",
        motiva: "Sua alma deseja ser ouvida e vista. A autoexpressão não é um luxo, é uma necessidade vital. Você busca o palco da vida.",
        impres: "O mundo te vê como alguém carismático, otimista e sociável. Sua presença ilumina o ambiente, embora possa parecer superficial às vezes.",
        destino: "Seu caminho envolve inspirar os outros através da palavra ou da arte. Cuidado com a dispersão de energia."
    },
    "4": {
        titulo: "O Construtor Estável",
        arquetipo: "O Imperador",
        desc: "O Número 4 é a fundação, a terra, a ordem e o trabalho. Sem o 4, o caos impera. É a vibração da segurança e da disciplina.",
        motiva: "Sua alma anseia por ordem e estabilidade. Você precisa de um plano, de uma rotina e de garantias para se sentir em paz.",
        impres: "O mundo te vê como a rocha. Alguém sério, pontual e extremamente confiável. Podem te achar rígido, mas sabem que podem contar com você.",
        destino: "Seu caminho é construir algo duradouro. O sucesso vem através do esforço contínuo e da organização."
    },
    "5": {
        titulo: "O Viajante Livre",
        arquetipo: "O Hierofante (Invertido)",
        desc: "O Número 5 é a mudança, a liberdade e os cinco sentidos. É a energia que quebra a estagnação do 4. O caos criativo.",
        motiva: "Sua alma grita por liberdade. Rotinas te matam. Você deseja experimentar tudo o que o mundo físico tem a oferecer.",
        impres: "O mundo te vê como magnético, sensual e imprevisível. Você transmite uma energia de aventura e adaptabilidade.",
        destino: "Seu caminho é o da mudança. Você veio para aprender a lidar com a impermanência e a liberdade com responsabilidade."
    },
    "6": {
        titulo: "O Guardião da Família",
        arquetipo: "Os Enamorados",
        desc: "O Número 6 é o amor, a responsabilidade doméstica e a cura. É o número da harmonia, do lar e do serviço à comunidade.",
        motiva: "Sua alma deseja harmonia no lar. Você quer cuidar, nutrir e proteger os seus. A injustiça te fere profundamente.",
        impres: "O mundo te vê como uma figura 'paterna' ou 'materna'. Alguém conselheiro, responsável e protetor.",
        destino: "Seu caminho envolve o serviço e o amor. Você veio para criar harmonia em ambientes caóticos, seja na família ou na sociedade."
    },
    "7": {
        titulo: "O Sábio Místico",
        arquetipo: "O Carro (Interior)",
        desc: "O Número 7 é a espiritualidade, a análise e a perfeição. É a ponte entre o mundo material e o divino. O número do filósofo.",
        motiva: "Sua alma busca a verdade oculta. Você não se contenta com a superfície. Precisa de silêncio e introspecção para se conectar com o divino.",
        impres: "O mundo te vê como misterioso, reservado e intelectualmente aguçado. Você transmite uma aura de quem 'sabe algo a mais'.",
        destino: "Seu caminho é o do autoconhecimento. Você veio para analisar a vida e ensinar verdades espirituais ou científicas."
    },
    "8": {
        titulo: "O Visionário do Poder",
        arquetipo: "A Força",
        desc: "O Número 8 é o poder material, o dinheiro e a justiça cármica. É o infinito em pé. A capacidade de manifestar riqueza.",
        motiva: "Sua alma deseja realizar grandes feitos. Você não tem medo do poder ou do dinheiro; vê neles ferramentas para mudar o mundo.",
        impres: "O mundo te vê como poderoso, executivo e autoritário. Você transmite sucesso e competência gerencial.",
        destino: "Seu caminho envolve o domínio da matéria. Você veio para gerar riqueza e administrar poder com ética e justiça."
    },
    "9": {
        titulo: "O Humanitário Universal",
        arquetipo: "O Eremita",
        desc: "O Número 9 é o fim do ciclo, a compaixão universal e a sabedoria. Contém todos os números anteriores. É o amor incondicional.",
        motiva: "Sua alma deseja deixar um legado para a humanidade. Você se preocupa com o todo, mais do que consigo mesmo.",
        impres: "O mundo te vê como generoso, carismático e às vezes dramático. Você transmite uma aura de sabedoria antiga.",
        destino: "Seu caminho é o do desapego e serviço. Você veio para finalizar ciclos e ajudar os outros a atravessarem suas pontes."
    },
    "11": {
        titulo: "O Mestre Iluminado (11)",
        arquetipo: "A Justiça",
        desc: "O Número Mestre 11 é a intuição elevada. Uma oitava acima do 2. Traz inspiração espiritual e tensão nervosa intensa.",
        motiva: "Sua alma busca a iluminação espiritual e a verdade acima da lógica. Você é um canal entre mundos.",
        impres: "O mundo te vê como inspirador, elétrico e diferente. Você transmite uma vibração de alta voltagem.",
        destino: "Seu caminho é inspirar multidões. Viver uma vida comum não te satisfaz; você precisa de um propósito espiritual."
    },
    "22": {
        titulo: "O Mestre Construtor (22)",
        arquetipo: "O Louco",
        desc: "O Número Mestre 22 é o arquiteto do futuro. Uma oitava acima do 4. Une a visão do idealista com a praticidade do construtor.",
        motiva: "Sua alma deseja construir impérios que beneficiem a humanidade. Sonhos pequenos não te interessam.",
        impres: "O mundo te vê como um gigante capaz de realizar o impossível. Transmite solidez e visão global.",
        destino: "Seu caminho é materializar grandes sonhos. Você tem o potencial de deixar uma marca física na história."
    }
};

// 3. FUNÇÕES DE CÁLCULO (MOTOR)

function limparTexto(str) {
    if(!str) return "";
    return str.toUpperCase().trim();
}

// Reduz um número a 1-9 ou 11, 22
function reduzir(n) {
    if (n === 11 || n === 22 || n === 33) return n;
    if (n < 10) return n;
    
    let sum = 0;
    String(n).split('').forEach(char => sum += parseInt(char));
    return reduzir(sum);
}

function calcularNome(nomeCompleto) {
    const nomeLimpo = limparTexto(nomeCompleto);
    let somaVogais = 0;
    let somaConsoantes = 0;
    
    const VOGAIS = ['A', 'E', 'I', 'O', 'U'];
    // Y e W podem ser vogais ou consoantes dependendo da fonética.
    // Na Cabalística Simplificada para Web: Y é considerado vogal se não tiver outra vogal na sílaba (difícil detectar).
    // Padrão Geral: Y como consoante e W como consoante, exceto regras específicas.
    // AQUI: Usaremos Y como Vogal (som de I) e W como Consoante (som de V) na maioria dos nomes PT-BR.
    // Ajuste fino pode ser feito depois.
    
    for (let char of nomeLimpo) {
        // Trata acentos
        if (MAPA_ACENTOS[char]) char = MAPA_ACENTOS[char];
        
        const valor = TABELA_CABALA[char];
        if (!valor) continue; // Ignora espaços

        // Verifica Vogal ou Consoante
        if (VOGAIS.includes(char) || char === 'Y') { // Y considerado vogal aqui
            somaVogais += valor;
        } else {
            somaConsoantes += valor;
        }
    }

    const motivacao = reduzir(somaVogais);
    const impressao = reduzir(somaConsoantes);
    const expressao = reduzir(somaVogais + somaConsoantes);

    return { motivacao, impressao, expressao };
}

function calcularDestino(dataNasc) {
    // dataNasc formato YYYY-MM-DD
    const partes = dataNasc.split('-');
    const ano = parseInt(partes[0]);
    const mes = parseInt(partes[1]);
    const dia = parseInt(partes[2]);

    // Soma direta de todos os dígitos (Método Cabalístico Direto)
    let total = 0;
    String(ano).split('').forEach(n => total += parseInt(n));
    String(mes).split('').forEach(n => total += parseInt(n));
    String(dia).split('').forEach(n => total += parseInt(n));

    return reduzir(total);
}

// 4. FUNÇÃO GERADORA DE TEXTO (LIGA O MOTOR AOS DADOS)
function gerarAnaliseNumerologica(tipo, numero) {
    const info = TEXTOS_NUMEROS[String(numero)];
    if (!info) return "<p>Número em análise especial.</p>";

    let interpretacaoEspecifica = "";
    
    if (tipo === 'motivacao') {
        interpretacaoEspecifica = `
            <p><strong>Motivação (Alma):</strong> ${info.motiva}</p>
            <p>Este número revela o "porquê" de suas ações. É o seu desejo interno mais profundo, aquilo que você faria mesmo se não fosse pago para isso.</p>
        `;
    } else if (tipo === 'impressao') {
        interpretacaoEspecifica = `
            <p><strong>Impressão (Ego):</strong> ${info.impres}</p>
            <p>Este número revela como os outros te percebem à primeira vista. É a sua "roupa social" e a fantasia que você veste para interagir com o mundo.</p>
        `;
    } else if (tipo === 'expressao') {
        interpretacaoEspecifica = `
            <p><strong>Expressão (Destino da Personalidade):</strong> A combinação de sua Alma e seu Ego cria sua Expressão. Como um ${info.titulo}, você expressa seus talentos no mundo. ${info.desc}</p>
        `;
    } else if (tipo === 'destino') {
        interpretacaoEspecifica = `
            <p><strong>Caminho de Destino:</strong> ${info.destino}</p>
            <p>O Destino é o caminho que a vida preparou para você caminhar. Diferente da Expressão (que é quem você é), o Destino é o que você veio aprender e viver.</p>
        `;
    }

    return `
        <div class="num-header">
            <span class="num-big">${numero}</span>
            <div class="num-meta">
                <h4>${info.titulo}</h4>
                <small>${info.arquetipo}</small>
            </div>
        </div>
        <div class="num-content">
            ${interpretacaoEspecifica}
            <p><strong>A Vibração do ${numero}:</strong> ${info.desc}</p>
        </div>
    `;
}