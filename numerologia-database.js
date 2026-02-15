// numerologia-database.js
// MOTOR DE CÁLCULO & GRIMÓRIO PREMIUM (VERSÃO SISTÊMICA)

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

const MAPA_ACENTOS = {
    'Á': 'A', 'Ã': 'A', 'Â': 'A', 'É': 'E', 'Ê': 'E', 'Í': 'I', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ú': 'U', 'Ç': 'C'
};

const TEXTOS_NUMEROS = {
    "1": {
        titulo: "O Líder Iniciador",
        arquetipo: "O Mago",
        desc: `<p>O Número 1 representa o impulso inicial da vida. No nível sistêmico, você é aquele que abre caminhos para o clã. Sua força reside na <b>originalidade</b> e na capacidade de se manter em pé mesmo quando não há apoio externo.</p>
               <p>Sua presença é um convite à ação. Você possui uma mentalidade de pioneiro, capaz de visualizar soluções onde outros veem apenas obstáculos. O desafio aqui é integrar a liderança com a humildade, entendendo que ser o primeiro não significa caminhar sozinho.</p>`,
        motiva: `<p>Sua alma anseia por <b>autonomia total</b>. Você se sente vivo quando está no comando de sua própria narrativa. O maior medo do seu ser é a estagnação ou ser apenas uma engrenagem no sistema de outra pessoa.</p>`,
        impres: `<p>O mundo te vê como uma figura de autoridade natural. Você projeta confiança e uma aura de "quem sabe o que está fazendo". As pessoas buscam sua direção em momentos de incerteza.</p>`,
        destino: `<p>Seu caminho é o da <b>independência autêntica</b>. A vida o testará através da necessidade de tomar decisões solitárias. Você veio para manifestar a inovação e ensinar ao mundo o valor da coragem individual.</p>`
    },
    "2": {
        titulo: "O Diplomata Sensitivo",
        arquetipo: "A Sacerdotisa",
        desc: `<p>O 2 é a vibração da cooperação e do equilíbrio. Você é a ponte que une as margens. No nível cabalístico, você representa a <b>receptividade</b> e a sensibilidade necessária para que o plano se manifeste.</p>
               <p>Sua força não está na força bruta, mas na diplomacia e na atenção aos detalhes sutis. Você possui um radar emocional aguçado, captando nuances que passam despercebidas pela maioria.</p>`,
        motiva: `<p>Sua alma busca <b>harmonia e pertencimento</b>. O que te move é o desejo de criar paz e união. Você se nutre através de parcerias profundas e do sentimento de ser compreendido sem palavras.</p>`,
        impres: `<p>As pessoas te veem como alguém gentil, acolhedor e um excelente ouvinte. Você transmite uma aura de paz que convida os outros a compartilharem seus segredos mais íntimos.</p>`,
        destino: `<p>Seu destino é o da <b>mediação</b>. Você veio para ser o facilitador de acordos e o curador de conflitos. O sucesso vem através da paciência e da colaboração estratégica.</p>`
    },
    "3": {
        titulo: "O Comunicador Criativo",
        arquetipo: "A Imperatriz",
        desc: `<p>O 3 é a expansão da alegria. Você carrega a vibração da <b>autoexpressão</b> e da fertilidade mental. Nada em você é estático; tudo é movimento e cor.</p>
               <p>Seu dom é a palavra e a capacidade de inspirar multidões através do entusiasmo. Você veio para transformar a dor em arte e a rotina em celebração.</p>`,
        motiva: `<p>Sua alma anseia pelo <b>palco da vida</b>. Você se sente pleno quando pode criar, brincar e expressar sua verdade sem censura. O riso e a leveza são seus combustíveis essenciais.</p>`,
        impres: `<p>O mundo te vê como o centro das atenções, alguém magnético e carismático. Sua presença "aquece" o ambiente, tornando-o mais vibrante e otimista.</p>`,
        destino: `<p>Seu caminho é o da <b>comunicação inspiradora</b>. Você veio para dar voz às ideias e mostrar que a criatividade é a ferramenta mais poderosa de evolução da consciência.</p>`
    },
    "4": {
        titulo: "O Construtor Disciplinado",
        arquetipo: "O Imperador",
        desc: `<p>O 4 é a vibração da terra e da estrutura. Você é o arquiteto da realidade tangível. Enquanto outros sonham, você <b>manifesta</b> através do método e do trabalho árduo.</p>
               <p>Sua personalidade é sólida e confiável. Você valoriza a tradição e a segurança, entendendo que um grande legado exige alicerces profundos e paciência milimétrica.</p>`,
        motiva: `<p>Sua alma busca <b>estabilidade e ordem</b>. Você se sente seguro quando há um plano claro e um solo firme sob os pés. O caos é o que mais drena sua energia vital.</p>`,
        impres: `<p>O mundo te vê como a "Rocha". Alguém em quem se pode confiar cegamente em momentos de crise. Você transmite seriedade, competência e pragmatismo.</p>`,
        destino: `<p>Seu destino é a <b>realização prática</b>. Você veio para organizar o mundo e criar sistemas que sobrevivam ao tempo. O trabalho, para você, é uma forma de oração material.</p>`
    },
    "5": {
        titulo: "O Viajante Livre",
        arquetipo: "O Hierofante (Reverso)",
        desc: `<p>O 5 é a vibração da mudança constante. Você é um espírito livre que não aceita gaiolas, mesmo as de ouro. Sua natureza é <b>adaptável, curiosa e sensual</b>.</p>
               <p>Você vive através dos cinco sentidos e busca a expansão através da experiência direta. É o catalisador que impede que o sistema se torne obsoleto.</p>`,
        motiva: `<p>Sua alma grita por <b>liberdade e aventura</b>. Você é motivado pelo novo, pelo desconhecido e pela possibilidade de mudar de rumo a qualquer instante.</p>`,
        impres: `<p>O mundo te vê como alguém magnético, versátil e um tanto imprevisível. Você projeta uma imagem de ousadia que desperta fascínio e, às vezes, receio nos mais conservadores.</p>`,
        destino: `<p>Seu destino é o <b>progresso através da mudança</b>. Você veio para ensinar ao mundo a flexibilidade e o valor da liberdade individual sobre a rotina estagnada.</p>`
    },
    "6": {
        titulo: "O Guardião do Equilíbrio",
        arquetipo: "Os Enamorados",
        desc: `<p>O 6 é a vibração do amor, da família e da responsabilidade social. Você é o <b>ajustador</b>, aquele que traz harmonia onde há desordem e beleza onde há feiura.</p>
               <p>Sua força reside na capacidade de nutrir e proteger. Você sente as dores do mundo como se fossem suas, e seu instinto é sempre o de restaurar o equilíbrio perdido.</p>`,
        motiva: `<p>Sua alma busca <b>servir e ser amada</b>. Você se sente pleno quando é útil aos seus e quando vive em um ambiente cercado de harmonia estética e emocional.</p>`,
        impres: `<p>O mundo te vê como o porto seguro, o conselheiro amoroso e a figura de autoridade moral. Você transmite uma aura de proteção e dignidade.</p>`,
        destino: `<p>Seu destino é a <b>responsabilidade compartilhada</b>. Você veio para criar comunidades, lares e espaços de cura através do amor e da justiça.</p>`
    },
    "7": {
        titulo: "O Sábio Investigador",
        arquetipo: "O Carro (Interior)",
        desc: `<p>O 7 é a vibração da mente analítica e espiritualizada. Você é o buscador da verdade oculta. Para você, nada é o que parece na superfície; tudo exige <b>profundidade</b>.</p>
               <p>Você possui uma inteligência técnica superior e um interesse nato pelo oculto, pela ciência ou pela filosofia. A solidão é seu laboratório sagrado.</p>`,
        motiva: `<p>Sua alma busca a <b>Verdade absoluta</b>. Você é motivado pelo conhecimento profundo e pelo mistério. O barulho e a superficialidade do mundo te cansam.</p>`,
        impres: `<p>O mundo te vê como alguém misterioso, intelectual e reservado. Você projeta uma imagem de especialista, alguém que detém chaves que os outros desconhecem.</p>`,
        destino: `<p>Seu destino é o do <b>aperfeiçoamento interior</b>. Você veio para ser um farol de sabedoria, ensinando aos outros a enxergar além do véu da matéria.</p>`
    },
    "8": {
        titulo: "O Gestor do Poder",
        arquetipo: "A Justiça",
        desc: `<p>O 8 é o número da manifestação do poder material e da justiça cármica. Você possui uma visão executiva e uma capacidade inata de <b>gestão de recursos</b>.</p>
               <p>Você entende que o dinheiro e a autoridade são ferramentas de transformação. Sua energia é de realização em larga escala e de equilíbrio entre o plano físico e espiritual.</p>`,
        motiva: `<p>Sua alma busca <b>realização e autoridade</b>. Você deseja ter os meios para mudar a realidade material e ser reconhecido por sua competência inabalável.</p>`,
        impres: `<p>O mundo te vê como um líder nato, alguém forte e bem-sucedido. Sua presença impõe respeito e indica que você está no controle da situação.</p>`,
        destino: `<p>Seu destino é o do <b>domínio da matéria</b>. Você veio para lidar com grandes responsabilidades e ensinar ao mundo como gerar abundância com ética.</p>`
    },
    "9": {
        titulo: "O Humanitário Universal",
        arquetipo: "O Eremita",
        desc: `<p>O 9 é o encerramento do ciclo. Você carrega a sabedoria de todos os números e uma visão <b>altruísta e global</b>. Nada pessoal te satisfaz tanto quanto o bem coletivo.</p>
               <p>Você é o compassivo, o artista e o mestre que entende que o desapego é a única forma de liberdade real. Sua energia é de finalização e transmutação.</p>`,
        motiva: `<p>Sua alma busca <b>servir à humanidade</b>. Você é motivado pela compaixão e pelo desejo de deixar o mundo melhor do que o encontrou. O amor universal é sua bússola.</p>`,
        impres: `<p>O mundo te vê como alguém generoso, sofisticado e inspirador. Você projeta uma imagem de "alma velha", alguém que compreende as leis ocultas da vida.</p>`,
        destino: `<p>Seu destino é o do <b>desapego e serviço</b>. Você veio para fechar ciclos e preparar o terreno para novos inícios, inspirando outros através da sabedoria acumulada.</p>`
    },
    "11": {
        titulo: "O Mestre Iluminador",
        arquetipo: "A Força Espiritual",
        desc: `<p>O 11 é um canal direto de alta voltagem. Você é um <b>visionário</b> que capta ideias antes mesmo delas existirem no plano físico. Sua vida é marcada pela tensão entre o ideal e o real.</p>`,
        motiva: `<p>Sua alma anseia por <b>iluminar o caminho alheio</b>. Você busca o significado espiritual por trás de cada ato e não se contenta com uma vida trivial.</p>`,
        impres: `<p>O mundo te vê como alguém elétrico, idealista e profundamente intuitivo. Você projeta uma aura de genialidade ou estranheza inspiradora.</p>`,
        destino: `<p>Seu destino é ser um <b>mensageiro</b>. Você veio para acordar a consciência das pessoas e trazer inovações espirituais ou artísticas para o mundo.</p>`
    },
    "22": {
        titulo: "O Mestre Construtor",
        arquetipo: "O Arquiteto Universal",
        desc: `<p>O 22 une a visão do 11 com a praticidade do 4. Você é o <b>manifestador de grandes obras</b>. Sua mente pensa em escala global e em benefícios para multidões.</p>`,
        motiva: `<p>Sua alma deseja <b>construir o impossível</b>. Você se sente impelido a usar seus dons para criar estruturas que mudem o curso da sociedade para melhor.</p>`,
        impres: `<p>O mundo te vê como um gigante da realização. Você transmite uma competência avassaladora e uma capacidade de gestão que poucos conseguem acompanhar.</p>`,
        destino: `<p>Seu destino é <b>materializar visões elevadas</b>. Você veio para gerir grandes recursos e construir fundações sólidas para o futuro da humanidade.</p>`
    }
};

// MOTOR DE CÁLCULO
function reduzir(n) {
    if (n === 11 || n === 22 || n === 33) return n;
    if (n < 10) return n;
    let s = 0; String(n).split('').forEach(x => s += parseInt(x));
    return reduzir(s);
}

function calcularNumerologia(nome, data) {
    const nomeLimpo = nome.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let sVogais = 0, sConsoantes = 0, sTotal = 0;
    const VOGAIS = "AEIOU";

    for (let char of nomeLimpo) {
        if (TABELA_CABALA[char]) {
            const val = TABELA_CABALA[char];
            sTotal += val;
            if (VOGAIS.includes(char) || char === 'Y') sVogais += val;
            else sConsoantes += val;
        }
    }

    let sData = 0; data.replace(/-/g, '').split('').forEach(x => sData += parseInt(x));

    return {
        motivacao: reduzir(sVogais),
        impressao: reduzir(sConsoantes),
        expressao: reduzir(sTotal),
        destino: reduzir(sData)
    };
}
