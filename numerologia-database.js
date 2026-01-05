// numerologia-database.js
// MOTOR DE CÁLCULO & GRIMÓRIO PREMIUM (VERSÃO EXTENDIDA)

// 1. TABELA DE GEMATRIA (CABALÍSTICA)
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

// 2. TEXTOS PROFUNDOS (EXPANDIDOS PARA CONTA PREMIUM)
const TEXTOS_NUMEROS = {
    "1": {
        titulo: "O Líder Pioneiro",
        arquetipo: "O Mago / O Imperador",
        // EXPRESSÃO (QUEM VOCÊ É)
        desc: `<p>O Número 1 é a vibração primordial, a semente de onde nasce toda a criação. Ter esta vibração como regente significa que você possui uma fonte inesgotável de energia, iniciativa e originalidade. Você não foi feito para seguir rebanhos; sua natureza é abrir clareiras na floresta onde ninguém pisou antes.</p>
               <p>Sua personalidade é marcada por uma forte individualidade e autoconfiança. Obstáculos, para você, são apenas degraus. Existe uma força masculina (Yang) muito forte em você, impulsionando-o sempre para a ação, para a conquista e para a afirmação do seu "Eu" no mundo.</p>`,
        // MOTIVAÇÃO (ALMA)
        motiva: `<p>Sua alma grita por independência. No nível mais profundo, o que você mais teme é a dependência ou a submissão. Seu desejo secreto é ser o "número um", o melhor naquilo que faz, e ser reconhecido por sua singularidade.</p>
                 <p>Você é motivado por desafios. Se algo é fácil demais, você perde o interesse. Sua alma se alimenta da inovação e da oportunidade de deixar sua marca pessoal em tudo o que toca.</p>`,
        // IMPRESSÃO (EGO)
        impres: `<p>O mundo te vê como uma figura de autoridade. Você entra em um ambiente e projeta confiança, força e decisão. As pessoas naturalmente olham para você em momentos de crise, esperando que você tome as rédeas da situação.</p>
                 <p>Por vezes, pode parecer um pouco distante ou egocêntrico para os mais sensíveis, mas todos respeitam sua capacidade de realização. Sua "roupa social" é a de um executivo, um líder ou um pioneiro.</p>`,
        // DESTINO (CAMINHO)
        destino: `<p>Seu destino é aprender a liderar sem dominar. A vida vai te colocar constantemente em situações onde você terá que tomar decisões sozinho e confiar no seu instinto. O isolamento no topo é um teste comum para o número 1.</p>
                  <p>Você veio para inovar. Seu caminho de sucesso não está em copiar o que já existe, mas em criar novos métodos, novos produtos ou novas formas de viver. A coragem é a sua moeda de troca com o universo.</p>`
    },
    "2": {
        titulo: "O Diplomata Sensitivo",
        arquetipo: "A Sacerdotisa",
        desc: `<p>O Número 2 representa a dualidade, a parceria e o princípio feminino da receptividade. Você é a "cola" que mantém o mundo unido. Enquanto o 1 conquista, o 2 preserva. Sua natureza é pacífica, diplomática e extremamente atenta aos detalhes sutis que os outros ignoram.</p>
               <p>Você possui uma inteligência emocional superior. Sabe instintivamente como as pessoas se sentem e tem o dom de curar feridas através da escuta e do acolhimento. A cooperação é a sua força; você brilha mais quando tem alguém para compartilhar a luz.</p>`,
        motiva: `<p>Sua alma anseia por harmonia e companhia. A solidão é dolorosa para o seu espírito. O que te move é o desejo de amar e ser amado, de criar ambientes onde a paz reine e onde não haja conflitos.</p>
                 <p>Você é motivado pela beleza e pela sutileza. Gritos, brigas e ambientes tóxicos drenam sua energia vital imediatamente. Seu desejo íntimo é ser o pacificador, aquele que une os opostos.</p>`,
        impres: `<p>O mundo te vê como alguém gentil, elegante e acessível. Você transmite uma aura de calma e compreensão. As pessoas tendem a te contar segredos logo no primeiro encontro, pois sentem que você não vai julgá-las.</p>
                 <p>Sua aparência e modos são geralmente suaves e discretos. Você não precisa gritar para ser notado; sua presença harmoniosa atrai as pessoas como um refúgio seguro.</p>`,
        destino: `<p>Seu caminho de vida é sobre cooperação e paciência. Você veio para trabalhar os bastidores, para ser o "poder por trás do trono" ou o mediador essencial. A vida vai testar sua capacidade de ceder sem se anular.</p>
                  <p>O sucesso para você vem através de parcerias e do trabalho em equipe. Seu destino é mostrar ao mundo que a gentileza é uma forma de força, e que a união supera a competição.</p>`
    },
    "3": {
        titulo: "O Comunicador Criativo",
        arquetipo: "A Imperatriz",
        desc: `<p>O Número 3 é a vibração da autoexpressão, da alegria e da criatividade pura. Você é a criança divina do zodíaco numérico. Sua mente é um caldeirão borbulhante de ideias, cores e sons. Onde você está, não existe silêncio ou tédio.</p>
               <p>Você possui o dom da palavra. Seja escrevendo, falando, cantando ou atuando, você precisa colocar para fora o que sente. Seu otimismo é contagiante e você tem a rara habilidade de ver o lado positivo mesmo nas tragédias.</p>`,
        motiva: `<p>Sua alma deseja o palco. Não necessariamente a fama, mas a oportunidade de ser vista e ouvida. Você morre um pouco por dentro se for forçado a reprimir sua criatividade ou suas opiniões.</p>
                 <p>A beleza, a arte e o convívio social são alimentos para o seu espírito. Você é motivado pela busca da felicidade e pelo desejo de espalhar entusiasmo aos outros.</p>`,
        impres: `<p>O mundo te vê como o centro das atenções, alguém carismático, divertido e cheio de vida. Você transmite uma energia de leveza e charme que atrai amigos e admiradores facilmente.</p>
                 <p>Por vezes, podem te julgar como superficial ou disperso, mas ninguém consegue ficar bravo com você por muito tempo. Sua aura brilha e aquece o ambiente.</p>`,
        destino: `<p>Seu destino é inspirar. Você veio para comunicar ideias e emoções, para elevar a vibração do planeta através da arte ou da palavra. A vida vai te dar oportunidades de usar sua voz.</p>
                  <p>O desafio do seu caminho é o foco. Com tantos talentos, o risco é desperdiçar energia em mil direções. Seu sucesso depende de canalizar sua criatividade para um objetivo concreto.</p>`
    },
    "4": {
        titulo: "O Construtor Estável",
        arquetipo: "O Imperador",
        desc: `<p>O Número 4 é a vibração da ordem, da estrutura e da matéria. Você é o arquiteto da realidade. Enquanto outros sonham, você planeja; enquanto outros falam, você trabalha. Sua natureza é sólida, confiável e extremamente disciplinada.</p>
               <p>Você valoriza a honestidade, a pontualidade e o esforço. Não acredita em sorte, acredita em trabalho duro. Você é a fundação sobre a qual famílias e empresas são construídas. Sem a sua energia, o caos tomaria conta.</p>`,
        motiva: `<p>Sua alma busca segurança e estabilidade. O imprevisível te assusta. O que você mais deseja é construir algo duradouro, que sobreviva ao tempo e deixe um legado tangível.</p>
                 <p>Você é motivado pela ordem. Ver um projeto concluído, uma casa organizada ou uma conta equilibrada te traz uma satisfação profunda que poucos entendem.</p>`,
        impres: `<p>O mundo te vê como a "Rocha". Alguém em quem se pode confiar cegamente. Você transmite seriedade, competência e responsabilidade. As pessoas sabem que, se você prometeu, você vai cumprir.</p>
                 <p>Podem te achar um pouco rígido ou conservador à primeira vista, mas respeitam profundamente sua ética de trabalho e sua capacidade de organização.</p>`,
        destino: `<p>Seu caminho é o da construção. A vida vai exigir de você disciplina e paciência. Atalhos não funcionarão para você; seu sucesso vem tijolo por tijolo.</p>
                  <p>Você veio para dar forma ao mundo. Seu destino é criar estruturas (físicas, legais ou familiares) que protejam e sustentem a sociedade. O trabalho é sua forma de oração.</p>`
    },
    "5": {
        titulo: "O Viajante Livre",
        arquetipo: "O Hierofante (Reverso)",
        desc: `<p>O Número 5 é a energia da mudança, da liberdade e dos cinco sentidos. Você é um espírito livre que não pode ser enjaulado. A rotina é o seu veneno. Você vive para experimentar tudo o que o mundo físico tem a oferecer.</p>
               <p>Sua mente é ágil, curiosa e progressista. Você se adapta a qualquer situação e adora conhecer novas culturas, sabores e ideias. Você é o catalisador que impede a vida de se tornar estagnada.</p>`,
        motiva: `<p>Sua alma grita por liberdade. Você precisa de espaço para se mover, para mudar de ideia e para explorar. Qualquer tentativa de controle ou possessividade te faz querer fugir imediatamente.</p>
                 <p>Você é motivado pela aventura e pela novidade. O desconhecido não te assusta, te excita. Seu desejo íntimo é viver uma vida sem roteiros pré-definidos.</p>`,
        impres: `<p>O mundo te vê como alguém magnético, sensual e imprevisível. Você tem um brilho nos olhos de quem está sempre pronto para a próxima aventura. Sua presença é elétrica e estimulante.</p>
                 <p>As pessoas são atraídas pela sua ousadia e pela sua conversa interessante, embora possam ter receio de contar com você para rotinas monótonas.</p>`,
        destino: `<p>Seu destino é abraçar a mudança. A vida vai te jogar em situações inesperadas para que você aprenda a fluir com o caos. Você veio para ensinar a flexibilidade.</p>
                  <p>Seu desafio é encontrar liberdade com responsabilidade. O sucesso vem quando você usa sua adaptabilidade para promover o progresso e a comunicação entre mundos diferentes.</p>`
    },
    "6": {
        titulo: "O Guardião Harmônico",
        arquetipo: "Os Enamorados",
        desc: `<p>O Número 6 carrega a vibração do amor incondicional, da cura e da responsabilidade doméstica. Você é o "pai" ou a "mãe" cósmica do seu círculo social. Sua natureza é servir, nutrir e embelezar a vida dos outros.</p>
               <p>Você busca a perfeição e a harmonia. A injustiça e a feiura te ferem fisicamente. Você tem um dom natural para as artes, para a cura e para o aconselhamento. O lar é o seu templo sagrado.</p>`,
        motiva: `<p>Sua alma deseja cuidar. Você se sente pleno quando é útil, quando está protegendo alguém ou resolvendo os problemas da sua família. A harmonia nos seus relacionamentos é vital para sua paz.</p>
                 <p>Você é motivado pelo amor e pelo ideal de beleza. Seu desejo secreto é criar um "pequeno paraíso" ao seu redor, onde todos vivam em paz e segurança.</p>`,
        impres: `<p>O mundo te vê como o porto seguro. Alguém responsável, amoroso e conselheiro. Você transmite uma aura de proteção que faz com que estranhos te peçam ajuda na rua.</p>
                 <p>Sua imagem é geralmente impecável e harmoniosa. As pessoas te respeitam como uma autoridade moral e buscam seu ombro amigo nas horas difíceis.</p>`,
        destino: `<p>Seu caminho é o do serviço amoroso. A vida vai colocar muitas responsabilidades nos seus ombros, pois você tem a força para carregá-las. Você veio para curar e harmonizar.</p>
                  <p>Cuidado apenas para não se tornar um mártir ou tentar controlar a vida dos outros "para o bem deles". Seu sucesso vem através do amor equilibrado e da criação de beleza.</p>`
    },
    "7": {
        titulo: "O Sábio Místico",
        arquetipo: "O Carro (Interior)",
        desc: `<p>O Número 7 é a vibração da espiritualidade, da análise profunda e do mistério. Você é o filósofo e o investigador. O mundo das aparências não te satisfaz; você precisa mergulhar nas profundezas para entender o "porquê" de tudo.</p>
               <p>Você é seletivo, reservado e intelectualmente brilhante. Precisa de muito tempo sozinho para processar seus pensamentos e conectar-se com o divino. A solidão, para você, não é isolamento, é recarga.</p>`,
        motiva: `<p>Sua alma busca a Verdade. Seja através da ciência, da religião ou da metafísica, você quer decifrar os segredos do universo. A superficialidade e o barulho te irritam profundamente.</p>
                 <p>Você é motivado pelo conhecimento e pelo aperfeiçoamento pessoal. Seu desejo íntimo é encontrar respostas para as grandes perguntas da existência e viver de acordo com sua sabedoria interior.</p>`,
        impres: `<p>O mundo te vê como alguém misterioso, inteligente e talvez um pouco distante. Você transmite uma aura de dignidade e aristocracia espiritual. As pessoas sentem que você sabe coisas que elas não sabem.</p>
                 <p>Você não é o mais acessível, mas quando fala, todos param para ouvir, pois sabem que virá algo profundo. Você projeta uma imagem de especialista.</p>`,
        destino: `<p>Seu caminho é o do autoconhecimento. A vida vai te empurrar para a introspecção. Você veio para ser um especialista, um professor espiritual ou um cientista que traz luz à humanidade.</p>
                  <p>Seu desafio é não se isolar do mundo. O sucesso vem quando você aprende a compartilhar sua sabedoria e a confiar na sua intuição poderosa.</p>`
    },
    "8": {
        titulo: "O Visionário do Poder",
        arquetipo: "A Justiça / A Força",
        desc: `<p>O Número 8 é a potência da manifestação material. É o símbolo do infinito em pé. Você possui uma capacidade inata de lidar com o poder, o dinheiro e a autoridade. Você entende como o mundo funciona e sabe jogar o jogo.</p>
               <p>Sua energia é executiva, justa e ambiciosa. Você não sonha pequeno; você quer construir impérios. Mas o 8 também é o número do equilíbrio cármico: você colhe exatamente o que planta, multiplicado.</p>`,
        motiva: `<p>Sua alma deseja realizar grandes feitos. Você quer deixar um legado tangível, ter recursos para mudar a realidade e ser respeitado por sua competência. A pobreza e a impotência são seus maiores medos.</p>
                 <p>Você é motivado pelo desafio de organizar o caos e gerar riqueza. Seu desejo não é apenas ter dinheiro, mas ter a liberdade e o poder que o dinheiro proporciona para fazer coisas grandes.</p>`,
        impres: `<p>O mundo te vê como um líder nato. Você transmite sucesso, força e controle. Sua presença impõe respeito imediato. As pessoas naturalmente esperam que você tenha a solução e pague a conta.</p>
                 <p>Podem te achar intimidante ou exigente, mas reconhecem sua justiça e sua capacidade de gestão. Você tem "cara de chefe".</p>`,
        destino: `<p>Seu caminho é o domínio da matéria. Você veio para lidar com grandes responsabilidades financeiras ou corporativas. O sucesso material é seu direito de nascença, desde que mantenha a ética.</p>
                  <p>Seu desafio é equilibrar o material e o espiritual, e não deixar que a busca pelo poder endureça seu coração. Você veio para empoderar os outros.</p>`
    },
    "9": {
        titulo: "O Humanitário Universal",
        arquetipo: "O Eremita",
        desc: `<p>O Número 9 é o ápice do ciclo numérico, contendo a sabedoria de todos os números anteriores. Você é uma "alma velha". Sua visão é panorâmica e universal; você se preocupa mais com a humanidade do que com problemas mesquinhos.</p>
               <p>Você é generoso, compassivo e artístico. Tem uma necessidade profunda de se doar e de fechar ciclos. O desapego é sua grande lição, pois você entende que nada nos pertence verdadeiramente.</p>`,
        motiva: `<p>Sua alma deseja servir ao mundo. Você quer fazer a diferença em larga escala, seja através da arte, da filantropia ou do ensino. A injustiça social e o sofrimento alheio te tocam profundamente.</p>
                 <p>Você é motivado pelo ideal de um mundo melhor. Seu desejo íntimo é ser livre de preconceitos e fronteiras, amando incondicionalmente.</p>`,
        impres: `<p>O mundo te vê como alguém carismático, sofisticado e generoso. Você transmite uma aura de sabedoria e compreensão. As pessoas sentem que você as entende sem que elas precisem explicar muito.</p>
                 <p>Você projeta uma imagem de idealista, alguém que está um pouco acima das trivialidades do cotidiano. É magnético e atrai seguidores.</p>`,
        destino: `<p>Seu caminho é o da finalização e do humanitarismo. A vida vai te pedir que abra mão de interesses egoístas em prol do bem maior. Você veio para ensinar, curar e inspirar através do exemplo.</p>
                  <p>Seu sucesso vem quando você para de tentar segurar as coisas e deixa a vida fluir através de você. Você é um canal de luz para o mundo.</p>`
    },
    "11": {
        titulo: "O Mestre Iluminado (11)",
        arquetipo: "A Força Espiritual",
        desc: `<p>O Número Mestre 11 é uma oitava superior do número 2. Você possui uma intuição elétrica e uma conexão direta com o plano espiritual. Você é um "para-raios" cósmico, captando ideias e inspirações que parecem vir do futuro.</p>
               <p>Sua vida é marcada por uma tensão nervosa constante, fruto dessa alta voltagem energética. Você é um visionário e um idealista, capaz de enxergar o potencial divino nas pessoas e situações.</p>`,
        motiva: `<p>Sua alma busca a iluminação. O mundo material comum não te satisfaz plenamente; você sente que tem uma missão espiritual a cumprir. Você deseja elevar a consciência das pessoas ao seu redor.</p>
                 <p>Você é motivado pela inspiração. Seu desejo é ser um canal de verdades superiores, trazendo luz onde há escuridão.</p>`,
        impres: `<p>O mundo te vê como alguém diferente, elétrico e inspirador. Você tem um olhar que parece ver através das pessoas. Transmite uma vibração de inteligência e idealismo fora do comum.</p>
                 <p>As pessoas são atraídas pela sua luz, esperando que você lhes mostre o caminho, embora às vezes possam te achar um pouco "aéreo" ou intenso demais.</p>`,
        destino: `<p>Seu destino é ser um mensageiro. A vida não vai te deixar acomodar na rotina; ela vai te empurrar para o palco da espiritualidade, da arte ou da liderança inspiradora. Você veio para acordar os outros.</p>
                  <p>Seu desafio é manter o equilíbrio nervoso e praticar o que prega. O sucesso vem quando você confia na sua intuição acima da lógica.</p>`
    },
    "22": {
        titulo: "O Mestre Construtor (22)",
        arquetipo: "O Arquiteto Universal",
        desc: `<p>O Número Mestre 22 é o mais poderoso de todos os números. Ele une a visão espiritual do 11 com a praticidade do 4. Você tem o potencial de sonhar o impossível e a capacidade técnica de construí-lo na realidade.</p>
               <p>Você é um arquiteto de destinos. Sua mente pensa em escala global. Não lhe interessam pequenos projetos; você quer criar sistemas, organizações ou obras que mudem o curso da história e beneficiem multidões.</p>`,
        motiva: `<p>Sua alma deseja deixar um legado monumental. Você sente uma responsabilidade imensa sobre os ombros, a de usar seus talentos para o progresso da humanidade. O desperdício de potencial é o seu maior pecado.</p>
                 <p>Você é motivado pela realização concreta de ideais elevados. Ver sua visão espiritual se tornar tijolo, sistema ou lei é o que te realiza.</p>`,
        impres: `<p>O mundo te vê como um gigante. Você transmite uma solidez e uma competência que intimidam e tranquilizam ao mesmo tempo. As pessoas sabem que, se algo é impossível, devem chamar você.</p>
                 <p>Sua imagem é de poder, eficiência e visão. Você é percebido como alguém que carrega o mundo nas costas, mas que tem força para isso.</p>`,
        destino: `<p>Seu caminho é materializar o divino. A vida vai te dar recursos e grandes desafios. Você não veio para ter uma vida pequena ou fácil. Seu destino é construir as bases do futuro.</p>
                  <p>Seu desafio é vencer o medo da própria grandeza e organizar sua vida prática para suportar a magnitude dos seus sonhos.</p>`
    }
};

// 3. FUNÇÕES DE CÁLCULO (MOTOR)

function limparTexto(str) {
    if(!str) return "";
    return str.toUpperCase().trim();
}

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
    
    for (let char of nomeLimpo) {
        if (MAPA_ACENTOS[char]) char = MAPA_ACENTOS[char];
        
        const valor = TABELA_CABALA[char];
        if (!valor) continue; 

        // Regra Simplificada Web: Y como Vogal
        if (VOGAIS.includes(char) || char === 'Y') { 
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
    const partes = dataNasc.split('-');
    const ano = parseInt(partes[0]);
    const mes = parseInt(partes[1]);
    const dia = parseInt(partes[2]);

    let total = 0;
    String(ano).split('').forEach(n => total += parseInt(n));
    String(mes).split('').forEach(n => total += parseInt(n));
    String(dia).split('').forEach(n => total += parseInt(n));

    return reduzir(total);
}

// 4. FUNÇÃO GERADORA DE TEXTO (CORRIGIDA E EXPANDIDA)
function gerarAnaliseNumerologica(tipo, numero) {
    const info = TEXTOS_NUMEROS[String(numero)];
    
    // Tratamento de Erro
    if (!info) return `<div class="num-content"><p>Número ${numero} em análise especial (vibração rara).</p></div>`;

    let htmlConteudo = "";
    let tituloCard = "";
    let subtituloCard = "";

    // SELEÇÃO INTELIGENTE DO CONTEÚDO (EVITA REPETIÇÃO)
    if (tipo === 'motivacao') {
        tituloCard = "MOTIVAÇÃO (ALMA)";
        subtituloCard = "O DESEJO SECRETO DO SEU SER";
        htmlConteudo = `
            <div class="intro-box">
                <p>A Motivação revela o "combustível" da sua existência. É aquilo que você faria de graça, o que te preenche quando ninguém está olhando.</p>
            </div>
            ${info.motiva}
        `;
    } 
    else if (tipo === 'impressao') {
        tituloCard = "IMPRESSÃO (EGO)";
        subtituloCard = "A IMAGEM QUE O MUNDO VÊ";
        htmlConteudo = `
            <div class="intro-box">
                <p>A Impressão é a sua "aura social". É o que as pessoas sentem nos primeiros 5 minutos de conversa com você, antes de te conhecerem profundamente.</p>
            </div>
            ${info.impres}
        `;
    } 
    else if (tipo === 'expressao') {
        tituloCard = "EXPRESSÃO (PERSONALIDADE)";
        subtituloCard = "QUEM VOCÊ É NA ÍNTEGRA";
        htmlConteudo = `
            <div class="intro-box">
                <p>A Expressão é a soma de tudo o que você é. Une seus desejos internos (Alma) com sua capacidade externa (Ego). É o seu conjunto de talentos naturais.</p>
            </div>
            ${info.desc}
        `;
    } 
    else if (tipo === 'destino') {
        tituloCard = "DESTINO (CAMINHO DE VIDA)";
        subtituloCard = "A MISSÃO QUE VOCÊ VEIO CUMPRIR";
        htmlConteudo = `
            <div class="intro-box">
                <p>O Destino não é quem você <em>é</em>, mas o que você veio <em>aprender e fazer</em>. É a estrada pavimentada à sua frente. Aceitar este caminho traz prosperidade.</p>
            </div>
            ${info.destino}
        `;
    }

    // Retorna o HTML Estruturado
    return `
        <div class="num-header">
            <span class="num-big">${numero}</span>
            <div class="num-meta">
                <h4>${tituloCard}</h4>
                <small>${subtituloCard}</small>
                <div style="color:var(--gold); margin-top:5px; font-size:0.9em;">Arquétipo: ${info.arquetipo}</div>
            </div>
        </div>
        <div class="num-content">
            ${htmlConteudo}
        </div>
    `;
}