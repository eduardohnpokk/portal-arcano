/* * ARQUIVO: astro-texts.js
 * VERSÃO: PREMIUM DEEP ANALYSIS
 * DESCRIÇÃO: Gera textos astrológicos complexos com base em arquétipos, modos e cenários.
 */

const ASTRO_DATA = {
    // 1. ARQUÉTIPOS PSICOLÓGICOS (O PLANETA)
    planetas: {
        "Sol": {
            titulo: "Sua Essência e Jornada do Herói",
            essencia: "O Sol no mapa não é apenas quem você é, mas quem você está aprendendo a se tornar. Ele representa a sua bateria vital, o centro da sua consciência e a figura do 'Rei' ou 'Pai' interno.",
            missao: "Sua missão principal envolve iluminar, liderar e expressar sua verdade individual sem desculpas."
        },
        "Lua": {
            titulo: "Nutrição Emocional e Inconsciente",
            essencia: "A Lua rege o seu passado, suas memórias ancestrais e como você reage instintivamente para se sentir seguro. Ela é a sua criança interior e o seu refúgio emocional.",
            missao: "Seu desafio é aprender a processar emoções flutuantes e encontrar um lar dentro de si mesmo."
        },
        "Mercúrio": {
            titulo: "Processos Mentais e Comunicação",
            essencia: "Mercúrio é o mensageiro. Ele define não o que você pensa, mas *como* você pensa. É o filtro através do qual você traduz a realidade para a sua mente e vice-versa.",
            missao: "A meta é conectar ideias díspares e articular sua visão de mundo com clareza e agilidade."
        },
        "Vênus": {
            titulo: "Linguagem do Amor e Valores",
            essencia: "Vênus dita a sua estética, o que lhe dá prazer e como você atrai os outros (magnetismo). Não é apenas amor romântico, mas o valor que você dá a si mesmo.",
            missao: "Você busca criar harmonia, estabelecer vínculos valiosos e vivenciar o prazer sensorial da existência."
        },
        "Marte": {
            titulo: "O Motor da Ação e Desejo",
            essencia: "Marte é o princípio da afirmação e da separação. É onde você precisa ser egoísta (no bom sentido) para sobreviver e conquistar. É a sua lâmina e seu escudo.",
            missao: "Sua jornada exige coragem para iniciar, defender seu território e perseguir seus desejos com assertividade."
        },
        "Júpiter": {
            titulo: "A Busca por Sentido e Expansão",
            essencia: "Júpiter é o filósofo e o explorador. Onde ele toca, ele expande. Representa sua fé, sua sorte e onde você tende a cometer excessos pela busca de 'mais'.",
            missao: "O objetivo é crescer além dos limites impostos, buscando sabedoria superior e confiança na vida."
        },
        "Saturno": {
            titulo: "O Mestre da Realidade e Karma",
            essencia: "Saturno representa onde você sente medo, inadequação e restrição, mas também onde construirá sua obra mais duradoura através do esforço e do tempo.",
            missao: "Sua tarefa é desenvolver autodisciplina, maturidade e assumir responsabilidade total pelo seu destino."
        },
        "Urano": {
            titulo: "O Despertador e o Rebelde",
            essencia: "Urano é a oitava superior de Mercúrio. Ele rege a intuição relâmpago, a quebra de padrões e a necessidade de liberdade absoluta. É o seu gênio louco.",
            missao: "Você deve quebrar as correntes do condicionamento social e inovar, trazendo o futuro para o presente."
        },
        "Netuno": {
            titulo: "O Místico e a Dissolução",
            essencia: "Netuno dissolve o ego. Ele fala de onde você é poético, sensível e compassivo, mas também onde pode cair em ilusões, vitimismo ou escapismo.",
            missao: "O chamado é para transcender a realidade material através da arte, espiritualidade ou serviço altruísta."
        },
        "Plutão": {
            titulo: "O Agente de Transformação Profunda",
            essencia: "Plutão é o poder nuclear da alma. Ele lida com o que está oculto, tabus, morte e renascimento. Onde ele está, nada permanece superficial.",
            missao: "Sua evolução depende de encarar as sombras, destruir o que está podre e renascer com poder pessoal regenerado."
        }
    },

    // 2. MODULADORES ZODIACAIS (O SIGNO)
    signos: {
        "Áries": {
            adverbio: "de forma incisiva, corajosa e imediata",
            descricao: "veste uma armadura de fogo. A expressão é marcada pela urgência, iniciativa e uma certa ingenuidade combativa. Há pouca paciência para a diplomacia, priorizando a ação direta."
        },
        "Touro": {
            adverbio: "com constância, sensualidade e pragmatismo",
            descricao: "ganha peso e substância. A energia desacelera para fixar raízes, valorizando a segurança material, o prazer dos sentidos e a resistência a mudanças bruscas."
        },
        "Gêmeos": {
            adverbio: "através da curiosidade, dualidade e intelecto",
            descricao: "torna-se aérea e dispersa. A busca é por variedade, troca de informações e conexão mental. Existe uma habilidade camaleônica de adaptação, mas risco de superficialidade."
        },
        "Câncer": {
            adverbio: "com proteção, sensibilidade e memória",
            descricao: "recua para dentro da carapaça. A motivação torna-se emocional, guiada pela necessidade de pertencer, nutrir e proteger o clã. A intuição supera a lógica."
        },
        "Leão": {
            adverbio: "com nobreza, criatividade e autoexpressão",
            descricao: "sobe ao palco. Há uma necessidade vital de ser visto, aplaudido e reconhecido como único. A energia é calorosa, generosa, mas pode tender ao egocentrismo."
        },
        "Virgem": {
            adverbio: "com critério, análise e desejo de servir",
            descricao: "foca no microscópio. A expressão busca a perfeição, a ordem e a utilidade prática. O caos é o inimigo, e a inteligência é aplicada para purificar e organizar sistemas."
        },
        "Libra": {
            adverbio: "buscando harmonia, beleza e o 'outro'",
            descricao: "pondera os dois lados. A ação é mediada pela diplomacia e pela estética. Nada é feito sozinho; a identidade se reflete no espelho dos relacionamentos e da justiça."
        },
        "Escorpião": {
            adverbio: "com intensidade visceral, mistério e controle",
            descricao: "mergulha nas profundezas. A energia não se contenta com a superfície; ela investiga, penetra e transforma. Há um imenso poder de regeneração e magnetismo emocional."
        },
        "Sagitário": {
            adverbio: "com otimismo, filosofia e expansão",
            descricao: "aponta a flecha para o distante. A busca é pela verdade maior, leis universais e horizontes estrangeiros. A energia é jovial e profética, mas pode ser dogmática."
        },
        "Capricórnio": {
            adverbio: "com ambição, estrutura e seriedade",
            descricao: "escala a montanha. A expressão é contida, estratégica e voltada para metas de longo prazo. Valoriza-se a hierarquia, o tempo e a construção de um legado sólido."
        },
        "Aquário": {
            adverbio: "de maneira original, rebelde e coletiva",
            descricao: "quebra o padrão. A energia é elétrica e focada no futuro, nos grupos e nas ideologias. Há um desapego emocional em prol da liberdade intelectual e da inovação."
        },
        "Peixes": {
            adverbio: "com empatia, fluidez e transcendência",
            descricao: "dissolve-se no oceano. A fronteira entre o eu e o outro desaparece. A expressão é psíquica, artística e espiritual, movida por compaixão e sonhos, com risco de caos."
        }
    },

    // 3. CENÁRIOS DE ATUAÇÃO (A CASA)
    casas: {
        1: {
            nome: "Casa da Identidade e Vitalidade",
            foco: "Isso afeta diretamente sua autoimagem, seu corpo físico e como você inicia as coisas. É a 'frente de batalha' da sua vida."
        },
        2: {
            nome: "Casa dos Recursos e Valores",
            foco: "O cenário é a vida material: dinheiro, posses e, principalmente, sua autoestima. Trata-se de como você sustenta sua existência."
        },
        3: {
            nome: "Casa da Mente Concreta e Trocas",
            foco: "A influência ocorre no aprendizado, na comunicação diária, irmãos e vizinhos. É onde sua mente processa o ambiente imediato."
        },
        4: {
            nome: "Casa das Raízes e do Lar",
            foco: "Toca o fundo da sua alma: família, passado, imóveis e sua vida privada. É onde você busca refúgio quando o mundo lá fora cansa."
        },
        5: {
            nome: "Casa da Criatividade e Prazer",
            foco: "É o palco da sua vida: romances, filhos, hobbies, especulações e tudo aquilo que faz seu coração vibrar e criar identidade."
        },
        6: {
            nome: "Casa da Rotina e Servidão",
            foco: "Manifesta-se no dia a dia, no trabalho, na saúde e nos hábitos. É a área do aperfeiçoamento técnico e da utilidade prática."
        },
        7: {
            nome: "Casa das Parcerias e do Outro",
            foco: "O foco sai de você e vai para o casamento, sociedades e inimigos declarados. É onde você aprende através do espelho dos relacionamentos."
        },
        8: {
            nome: "Casa da Transformação e Fusão",
            foco: "Envolve o dinheiro dos outros, heranças, sexualidade profunda e o oculto. É onde você vive crises que geram renascimento."
        },
        9: {
            nome: "Casa da Filosofia e Horizontes",
            foco: "Expande para viagens longas, ensino superior, leis e busca espiritual. É onde você busca o sentido da vida e sua verdade."
        },
        10: {
            nome: "Casa da Carreira e Status",
            foco: "É o ponto mais alto do mapa: sua reputação, carreira, vocação e autoridade. Mostra como o mundo vê o seu sucesso."
        },
        11: {
            nome: "Casa do Coletivo e Futuro",
            foco: "Atua nos grupos, amizades, tecnologia e projetos de longo prazo. É onde sua identidade se mescla com esperanças humanitárias."
        },
        12: {
            nome: "Casa do Inconsciente e Karma",
            foco: "A área mais misteriosa: isolamento, espiritualidade, hospitais e o que está oculto de você mesmo. É a casa da dissolução e do resgate."
        }
    }
};

// ==========================================
// FUNÇÃO GERADORA DE NARRATIVA (CRUZAMENTO)
// ==========================================
function gerarInterpretacao(planeta, signo, casa) {
    // 1. Validação de dados (segurança)
    const pInfo = ASTRO_DATA.planetas[planeta] || ASTRO_DATA.planetas["Sol"];
    const sInfo = ASTRO_DATA.signos[signo] || ASTRO_DATA.signos["Áries"];
    const cInfo = ASTRO_DATA.casas[casa] || ASTRO_DATA.casas[1];

    // 2. Montagem do HTML Rico
    // Usamos Template Strings para criar blocos de texto legíveis e elegantes
    
    return `
        <div class="interpretation-box">
            <h4 style="color:#d4af37; font-family:'Cinzel'; font-size:1.4em; margin-bottom:5px; border-bottom:1px solid #333; padding-bottom:5px;">
                ${planeta} em ${signo} <span style="font-size:0.7em; color:#888;">(Casa ${casa})</span>
            </h4>
            
            <p style="color:#aaa; font-style:italic; font-size:0.9em; margin-bottom:15px;">
                "${pInfo.titulo}" filtrado pela energia de ${signo}.
            </p>

            <p style="margin-bottom: 12px; text-align: justify;">
                <strong>A Dinâmica:</strong> 
                Nesta posição, ${pInfo.essencia.toLowerCase()} 
                Aqui, essa força planetária atua <strong>${sInfo.adverbio}</strong>. 
                O arquétipo de ${planeta} ${sInfo.descricao}
            </p>

            <p style="margin-bottom: 12px; text-align: justify;">
                <strong>O Cenário (Casa ${casa}):</strong> 
                Essa combinação energética é canalizada especificamente para a <em>${cInfo.nome}</em>. 
                ${cInfo.foco} 
                É nesta área da vida que você sentirá mais fortemente a necessidade de expressar a energia de ${signo}.
            </p>

            <p style="background: rgba(212,175,55,0.1); padding: 10px; border-left: 3px solid #d4af37; font-size: 0.95em;">
                <strong>💡 Conselho Evolutivo:</strong> ${pInfo.missao} 
                Para integrar isso, tente equilibrar a urgência de ${planeta} com as características de ${signo} nas questões da Casa ${casa}.
            </p>
        </div>
        <br>
    `;
}