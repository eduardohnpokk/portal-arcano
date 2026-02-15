// numerologia-database.js
// MOTOR DE CÁLCULO & GRIMÓRIO PREMIUM (VERSÃO SISTÊMICA PROFUNDA)

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
        arquetipo: "O Mago / O Impulso de Vida",
        desc: `<p>O Número 1 representa a singularidade primordial, o ponto de onde toda a geometria sagrada se origina. No nível sistêmico, você carrega a vibração do "Pioneiro Ancestral", aquele que tem a missão de quebrar padrões de estagnação na árvore genealógica. Sua força não reside no apoio alheio, mas na capacidade absoluta de se manter em pé através da vontade individualizada.</p>
               <p>Você possui uma mentalidade de "Mestre de Si Mesmo". Enquanto outros esperam permissão para agir, você sente o chamado da ação direta. O desafio desta vibração é a integração do ego: a liderança só se torna divina quando serve a um propósito maior que a própria vaidade. Você veio para manifestar a inovação e o poder da decisão pura no plano material.</p>`,
        motiva: `<p>Sua alma anseia por <b>autonomia absoluta</b> e pelo direito de ser único. O que te move nas profundezas é o desejo de não ser dominado por nenhuma estrutura externa. Você se sente vivo quando está abrindo trilhas virgens, e o maior "pecado" para o seu espírito seria a submissão a uma rotina medíocre criada por terceiros.</p>
                 <p>Sistemicamente, sua motivação atua como um motor de independência para o seu clã, mostrando que é possível sobreviver e prosperar confiando unicamente na própria visão. Você é movido pelo desafio; se a meta não parecer impossível para os outros, ela não terá sabor para você.</p>`,
        impres: `<p>O mundo te vê como uma figura de autoridade inquestionável. Você projeta uma aura de decisão e firmeza que pode ser interpretada como arrogância pelos mais sensíveis, mas que é celebrada como porto seguro por quem precisa de direção. Sua presença exige respeito imediato; você não entra em um ambiente, você o ocupa.</p>`,
        destino: `<p>Seu caminho é o da <b>coragem solitária</b>. A vida o colocará constantemente em situações onde você terá que escolher entre o rebanho e a sua própria verdade. Seu sucesso material e espiritual depende diretamente da sua capacidade de assumir riscos que outros temem. Você veio para liderar através do exemplo, não da imposição.</p>`
    },
    "2": {
        titulo: "O Diplomata Sensitivo",
        arquetipo: "A Sacerdotisa / O Equilíbrio das Dualidades",
        desc: `<p>O Número 2 é o mistério da dualidade, o espelho necessário para que a consciência se reconheça. Você vibra na frequência da receptividade e da diplomacia sistêmica. Sua missão é ser o "fio condutor" que mantém o sistema unido, operando através da sutileza e da escuta, em um mundo que muitas vezes só valoriza o grito.</p>
               <p>Sua força é invisível, mas onipresente. Você possui uma inteligência emocional superior, capaz de captar as tensões ocultas em qualquer ambiente. Você é o mestre da cooperação, entendendo que o "Nós" é o próximo passo evolutivo do "Eu". O desafio é não se perder na sombra do outro, mantendo sua própria identidade enquanto acolhe a dor alheia.</p>`,
        motiva: `<p>Sua alma busca <b>harmonia, pertencimento e paz</b>. O que te move é o desejo profundo de criar pontes onde outros cavaram abismos. Você se nutre através do afeto, do toque e da compreensão mútua. A solidão é o seu maior teste, e a intimidade verdadeira é o seu maior prêmio espiritual.</p>
                 <p>Você é motivado pelo detalhe, pela beleza das relações e pelo ideal de um mundo onde o conflito seja resolvido através da palavra, nunca da força. Seu espírito se expande quando você sente que é a peça que completa o quebra-cabeça de alguém.</p>`,
        impres: `<p>As pessoas te veem como alguém gentil, elegante e profundamente sábio no silêncio. Você transmite uma aura de acolhimento que convida os outros a desabafarem. Sua imagem social é de alguém diplomático, que nunca fere sem necessidade e que busca sempre o caminho do meio.</p>`,
        destino: `<p>Seu destino é o da <b>mediação sagrada</b>. Você veio para trabalhar nos bastidores de grandes mudanças, sendo o conselheiro estratégico ou o parceiro essencial. O sucesso virá através da sua paciência e da sua capacidade de esperar o tempo certo das coisas. Você veio para ensinar que a gentileza é a forma mais resiliente de poder.</p>`
    },
    "3": {
        titulo: "O Comunicador Criativo",
        arquetipo: "A Imperatriz / A Expressão da Alma",
        desc: `<p>O Número 3 é a vibração da fertilidade mental e da alegria expandida. No nível cabalístico, você representa a síntese entre a tese e a antítese: o nascimento de algo novo. Sua personalidade é um caldeirão de ideias, imagens e sons que precisam de vazão para que você não sinta uma "congestão criativa".</p>
               <p>Você é o mestre da autoexpressão. Sua vida é um palco onde a verdade deve ser dita com brilho e entusiasmo. Você carrega a "Criança Divina", aquela que vê o mundo com curiosidade eterna. O perigo desta vibração é a dispersão; ter mil talentos e não concluir uma única obra. Quando focado, você tem o poder de inspirar multidões a saírem da escuridão.</p>`,
        motiva: `<p>Sua alma anseia por <b>visibilidade e brilho</b>. Você se sente pleno quando pode comunicar sua essência, seja através da arte, da fala ou da escrita. O que te move é o desejo de encantar o mundo e afastar a sombra da tristeza coletiva. Você é motivado pela aprovação e pelo reconhecimento do seu valor criativo.</p>
                 <p>A beleza e o convívio social são oxigênio para o seu espírito. Você é motivado pela busca da felicidade genuína, e nada te fere mais do que ambientes austeros, cinzas ou onde o riso é proibido. Seu desejo secreto é deixar uma marca de leveza na vida de cada pessoa que cruzar seu caminho.</p>`,
        impres: `<p>O mundo te vê como um centro de luz e carisma. Você é percebido como alguém divertido, magnético e sempre pronto para uma troca inteligente. Sua presença reduz a gravidade dos problemas alheios, e as pessoas buscam sua companhia para "respirar" um pouco de otimismo e criatividade.</p>`,
        destino: `<p>Seu caminho é o da <b>comunicação transformadora</b>. Você veio para usar sua voz para elevar a frequência do planeta. Seja na educação, nas artes ou na oratória, seu sucesso depende da coragem de se expor sem máscaras. Seu destino é mostrar que a vida é uma celebração contínua, mesmo em meio aos desafios.</p>`
    },
    "4": {
        titulo: "O Construtor Disciplinado",
        arquetipo: "O Imperador / A Lei da Matéria",
        desc: `<p>O Número 4 é a vibração da estrutura, do solo firme e da ordem que sustenta o caos. Você é o "Arquiteto da Realidade". Enquanto outros flutuam em sonhos abstratos, você manifesta no plano físico através do método, do rigor e da disciplina inabalável. No nível sistêmico, você representa as raízes profundas da árvore familiar.</p>
               <p>Sua força é a persistência. Você entende que o sucesso não é um golpe de sorte, mas uma sucessão de atos precisos e constantes. Você valoriza a tradição, a segurança e a justiça. O desafio é não se tornar excessivamente rígido ou resistente às mudanças necessárias; a estrutura deve ser sólida, mas não deve se tornar uma prisão de pedra para o seu crescimento.</p>`,
        motiva: `<p>Sua alma busca <b>estabilidade, segurança e legado</b>. O que te move nas profundezas é o desejo de construir algo que sobreviva ao tempo. Você sente uma necessidade visceral de ter controle sobre o seu ambiente prático, e a desordem (financeira ou emocional) é o que mais drena sua energia vital.</p>
                 <p>Você é motivado pelo progresso tangível. Ver uma parede erguida, uma conta poupança crescendo ou um projeto finalizado te traz uma paz que poucos entendem. Seu desejo secreto é ser a fundação confiável para todos os que ama, garantindo que o teto nunca caia sobre as cabeças deles.</p>`,
        impres: `<p>O mundo te vê como a "Rocha Inabalável". Alguém que transmite seriedade, competência extrema e um pragmatismo que impõe respeito. As pessoas sabem que, se você assumiu uma responsabilidade, ela será entregue com perfeição técnica. Você projeta uma imagem de alguém que não brinca em serviço e que valoriza a hierarquia e o mérito.</p>`,
        destino: `<p>Seu destino é a <b>realização prática e a fundação de sistemas</b>. Você veio para organizar o que está disperso e dar forma ao que é fluido. Seu sucesso vem através do trabalho árduo e da paciência milimétrica. Você é o guardião das leis da matéria e seu caminho é o de criar estruturas duradouras para a sociedade ou para sua família.</p>`
    },
    "5": {
        titulo: "O Viajante Livre",
        arquetipo: "O Hierofante Reverso / A Expansão dos Sentidos",
        desc: `<p>O Número 5 é a vibração do movimento, da curiosidade e da quebra de paradigmas. Você é um espírito livre que não aceita limitações geográficas ou mentais. Sua natureza é <b>exploratória</b>; você veio para testar os limites do que é possível experimentar nos cinco sentidos.</p>
               <p>Você atua como um catalisador de mudanças. Sua presença em qualquer sistema serve para oxigenar as ideias antigas e propor novas rotas. O risco desta vibração é a impulsividade destrutiva ou o vício em novidades; para o 5, o desafio é aprender que a verdadeira liberdade só existe quando há um eixo interno forte para o qual retornar.</p>`,
        motiva: `<p>Sua alma grita por <b>liberdade, aventura e novos horizontes</b>. Você é motivado pelo desconhecido, pelo risco calculado e pela possibilidade de ser uma pessoa diferente a cada década. Qualquer tentativa de possessividade ou controle externo faz sua alma murchar instantaneamente.</p>
                 <p>Você busca a expansão da consciência através da vivência direta. Seu desejo íntimo é conhecer todos os sabores, culturas e ideias que o mundo oferece, sem se prender a dogmas ou preconceitos. Você é motivado pela agilidade mental e pelo prazer de estar sempre um passo à frente da rotina.</p>`,
        impres: `<p>O mundo te vê como alguém magnético, versátil e um tanto indomável. Você projeta uma energia elétrica, sensual e curiosa. As pessoas se sentem estimuladas pela sua conversa rápida e pela sua coragem de mudar de vida sem olhar para trás. Você é percebido como o eterno jovem, independentemente da idade cronológica.</p>`,
        destino: `<p>Seu destino é o do <b>progresso através da experiência</b>. Você veio para ensinar ao mundo que a segurança é uma ilusão e que a única constante é a mudança. Seu sucesso virá através da sua adaptabilidade e da sua capacidade de se comunicar com mundos diferentes. Você é o viajante que traz as notícias do futuro para o presente.</p>`
    },
    "6": {
        titulo: "O Guardião do Equilíbrio",
        arquetipo: "Os Enamorados / O Ajuste Sistêmico",
        desc: `<p>O Número 6 vibra na frequência do amor incondicional, da beleza e da justiça comunitária. Você é o "Ajustador Cósmico", aquele que tem o dom natural de identificar onde o equilíbrio foi quebrado e agir para restaurá-lo. Sua personalidade é marcada por um senso agudo de responsabilidade para com o outro.</p>
               <p>Você busca a perfeição estética e moral em tudo o que toca. Tem um talento nato para as artes, para o aconselhamento e para criar ambientes de cura. O desafio desta vibração é o "Complexo de Salvador": querer carregar o mundo nas costas e esquecer de cuidar da própria harmonia interior.</p>`,
        motiva: `<p>Sua alma busca <b>servir, nutrir e ser amada</b>. Você se sente pleno quando é útil aos seus e quando vive em um ambiente cercado de harmonia estética e emocional. A beleza e a ordem doméstica não são luxos para você, são necessidades da alma.</p>
                 <p>Sistemicamente, você é motivado pela busca da reconciliação. Seu desejo secreto é que todos ao seu redor estejam em paz e que os conflitos familiares sejam curados através do perdão e da aceitação. Você se nutre através da gratidão daqueles que você protege e cuida.</p>`,
        impres: `<p>O mundo te vê como o porto seguro, o conselheiro amoroso e a figura de autoridade moral benevolente. Você transmite uma aura de proteção e dignidade que faz com que estranhos busquem sua ajuda. Sua imagem é impecável e transmite equilíbrio, confiança e uma certa doçura protetora.</p>`,
        destino: `<p>Seu destino é o da <b>responsabilidade compartilhada e do serviço amoroso</b>. Você veio para fundar lares, comunidades ou projetos sociais onde a justiça e o afeto caminhem juntos. Seu sucesso depende da sua capacidade de amar sem controlar e de cuidar sem se anular.</p>`
    },
    "7": {
        titulo: "O Sábio Investigador",
        arquetipo: "O Carro Interior / A Mente Metafísica",
        desc: `<p>O Número 7 é a vibração do mistério, da introspecção e da análise profunda da existência. Você é o filósofo, o cientista e o místico. Para você, a realidade visível é apenas a casca de um fruto muito mais profundo. Sua natureza é seletiva, exigente e intelectualmente aristocrática.</p>
               <p>Você possui uma necessidade vital de solidão para processar seus pensamentos e conectar-se com o Divino. Nada superficial te satisfaz. O desafio do 7 é não cair no cinismo ou no isolamento amargo; a sabedoria que você acumula no silêncio deve ser, eventualmente, compartilhada com o mundo para iluminar os outros.</p>`,
        motiva: `<p>Sua alma busca a <b>Verdade absoluta</b> e o entendimento das leis ocultas da vida. Você é motivado pelo conhecimento que não está nos livros populares, mas nas entrelinhas da realidade. O barulho e a futilidade das massas te irritam profundamente, drenando sua energia vital.</p>
                 <p>Seu desejo íntimo é alcançar a maestria sobre um assunto complexo e viver de acordo com uma ética superior. Você é motivado pela descoberta e pelo aperfeiçoamento constante do seu ser interno. O silêncio, para o seu espírito, é o laboratório onde Deus fala mais alto.</p>`,
        impres: `<p>O mundo te vê como alguém misterioso, intelectualmente brilhante e um tanto inacessível. Você projeta uma aura de dignidade e reserva que impede abordagens superficiais. As pessoas sentem que você sabe segredos que elas desconhecem, e sua palavra é ouvida com o peso de uma verdade técnica ou espiritual.</p>`,
        destino: `<p>Seu destino é o do <b>aperfeiçoamento interior e da especialização</b>. Você veio para ser um farol de sabedoria em um mundo de opiniões rasas. Seu sucesso virá através do estudo profundo, da meditação e da confiança na sua intuição técnica. Você veio para ensinar que o maior tesouro está no reino invisível do pensamento.</p>`
    },
    "8": {
        titulo: "O Gestor do Poder",
        arquetipo: "A Justiça / A Lei da Causa e Efeito",
        desc: `<p>O Número 8 é a potência da manifestação material em sua forma mais elevada. É o símbolo do infinito em pé, indicando o equilíbrio necessário entre o Céu e a Terra. Você possui uma visão executiva avassaladora e uma capacidade inata de lidar com o poder, o dinheiro e as estruturas de autoridade.</p>
               <p>Você entende intuitivamente como o jogo do mundo funciona. Sua energia é de realização em larga escala. No entanto, o 8 é o número da colheita implacável: você recebe exatamente o que planta, multiplicado. O desafio é não se deixar corromper pelo materialismo e entender que o verdadeiro poder serve para empoderar os outros.</p>`,
        motiva: `<p>Sua alma busca <b>realização material, autoridade e legado concreto</b>. Você deseja ter os meios para transformar a realidade e ser respeitado por sua competência inabalável. A pobreza, a impotência e a ineficiência são os seus maiores medos ancestrais.</p>
                 <p>Você é motivado pelo desafio de organizar o caos e gerar riqueza sistêmica. Seu desejo não é apenas acumular, mas ser o motor que faz os grandes projetos girarem. Você se sente pleno quando está na liderança de algo complexo e quando seu mérito é recompensado de forma justa e abundante.</p>`,
        impres: `<p>O mundo te vê como um líder nato, alguém que nasceu para o topo. Sua presença impõe respeito imediato e sinaliza sucesso e controle. As pessoas naturalmente esperam que você tome as decisões difíceis e pague a conta emocional e material dos projetos. Você tem "cara de chefe" e projeta solidez inabalável.</p>`,
        destino: `<p>Seu destino é o do <b>domínio da matéria com ética espiritual</b>. Você veio para gerir grandes recursos e construir impérios (sejam eles familiares ou corporativos). O sucesso material é o seu direito de nascença, desde que você mantenha o equilíbrio entre o ter e o ser. Você veio para ser o pilar de prosperidade do seu clã.</p>`
    },
    "9": {
        titulo: "O Humanitário Universal",
        arquetipo: "O Eremita Finalizador / O Amor sem Fronteiras",
        desc: `<p>O Número 9 representa o encerramento do ciclo numérico, contendo em si a sabedoria e as dores de todos os números anteriores. Você é uma "alma velha", com uma visão panorâmica e altruísta da vida. Para você, nada que seja puramente pessoal ou egoísta traz satisfação real; sua alma só descansa no serviço ao Todo.</p>
               <p>Você é o mestre do desapego. Entende que a vida é feita de ciclos que precisam ser encerrados com dignidade para que o novo nasça. Sua vibração é de compaixão universal e generosidade sem limites. O desafio é não se perder no drama emocional alheio e aprender a dizer "não" para preservar sua própria energia de cura.</p>`,
        motiva: `<p>Sua alma busca <b>servir à humanidade, ensinar e inspirar</b> através do exemplo. Você é motivado pela compaixão e pelo desejo de deixar o planeta melhor do que o encontrou. Injustiças sociais e o sofrimento de seres indefesos tocam seu espírito com uma intensidade avassaladora.</p>
                 <p>Você deseja a liberdade emocional e espiritual absoluta. É motivado por ideais elevados de fraternidade e por uma curiosidade artística que busca a beleza no que é transitório. Seu desejo secreto é ser um canal de luz que dissolve as fronteiras entre as pessoas, amando sem exigir nada em troca.</p>`,
        impres: `<p>O mundo te vê como alguém generoso, carismático, sofisticado e dotado de uma sabedoria que ultrapassa sua idade. Você projeta uma imagem de idealista, alguém que vive por uma causa maior. As pessoas sentem que você as compreende sem que elas precisem explicar muito, e sua aura transmite uma paz melancólica e profunda.</p>`,
        destino: `<p>Seu destino é o da <b>finalização sagrada e do humanitarismo</b>. Você veio para fechar as contas abertas do passado (seu e de seus ancestrais) e preparar a humanidade para um novo nível de consciência. Seu sucesso virá quando você parar de tentar segurar as coisas e deixar a vida fluir através do seu serviço. Você é o mestre que ensina a arte de soltar.</p>`
    },
    "11": {
        titulo: "O Mestre Iluminador",
        arquetipo: "A Força Espiritual / O Para-Raios Cósmico",
        desc: `<p>O Número Mestre 11 é uma vibração de alta voltagem, um canal direto entre o plano espiritual e a matéria. Você é um visionário nato que capta ideias e frequências antes mesmo delas existirem na mente comum. Sua vida é marcada por uma tensão nervosa constante, fruto dessa energia elétrica que atravessa seu corpo.</p>`,
        motiva: `<p>Sua alma anseia por <b>iluminar o caminho alheio</b> e revelar verdades ocultas. Você não se contenta com uma vida trivial; precisa sentir que sua existência tem um propósito sagrado. Você é motivado pela inspiração e pelo desejo de acordar a consciência das pessoas ao seu redor através da sua intuição aguçada.</p>`,
        impres: `<p>O mundo te vê como alguém diferente, elétrico, profético e profundamente intuitivo. Você projeta uma aura de genialidade ou de uma estranheza fascinante. As pessoas buscam sua luz quando estão perdidas, esperando que sua visão clareie o caminho delas, mesmo que te achem "intenso demais".</p>`,
        destino: `<p>Seu destino é o de ser um <b>mensageiro de luz</b>. Você veio para trazer inovações espirituais, artísticas ou intelectuais que sacudam a inércia do mundo. O sucesso depende da sua coragem de confiar na sua voz interior acima de qualquer lógica humana. Você é o ponteiro da bússola da evolução.</p>`
    },
    "22": {
        titulo: "O Mestre Construtor",
        arquetipo: "O Arquiteto Universal / O Materializador de Sonhos",
        desc: `<p>O Número Mestre 22 é a vibração mais poderosa do espectro numérico. Ele une a visão espiritual do 11 com a capacidade de realização prática do 4. Você não veio para pequenos projetos; sua mente pensa em escala global, em estruturas que beneficiem multidões e que durem por gerações.</p>`,
        motiva: `<p>Sua alma deseja <b>construir o "impossível"</b>. Você sente uma responsabilidade monumental sobre seus ombros de usar seus talentos para o progresso real da sociedade. O desperdício de potencial é o que mais angustia seu espírito. Você é motivado pela visão de um mundo organizado, próspero e espiritualizado.</p>`,
        impres: `<p>O mundo te vê como um gigante da realização. Você transmite uma competência avassaladora e uma solidez que intimida e tranquiliza ao mesmo tempo. As pessoas sentem que, se algo é grande demais para ser feito, deve ser entregue às suas mãos. Você projeta poder, visão sistêmica e integridade inabalável.</p>`,
        destino: `<p>Seu destino é <b>materializar visões elevadas em escala monumental</b>. Você veio para ser o arquiteto de novos sistemas, leis ou obras físicas que sustentem o futuro da humanidade. O sucesso é inevitável para você, desde que você organize sua vida pessoal para suportar a magnitude dos seus próprios sonhos.</p>`
    }
};

// MOTOR DE CÁLCULO (PRESCRITO PELAS REGRAS DE TI)
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
