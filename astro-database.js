// astro-database.js
// BANCO DE DADOS DE INTERPRETAÇÃO PREMIUM

const GRIMORIO_ESTELAR = {
    // === O SOL (A ESSÊNCIA) ===
    "sol": {
        "Áries": `
            <h3><i class="fas fa-fire"></i> O Guerreiro Primordial</h3>
            <p>Com o Sol em Áries, sua alma escolheu a frequência do "Início". Você é a faísca que acende a fogueira, a força vital que rompe a inércia do inverno. Sua natureza é fundamentalmente corajosa, direta e incapaz de tolerar a estagnação. Onde outros veem barreiras, você vê oportunidades de testar sua força.</p>
            <p>Psicologicamente, você opera sob o princípio da afirmação do "Eu". Isso não é necessariamente egoísmo, mas uma necessidade vital de autodescoberta através da ação. Você não descobre quem é pensando; você descobre agindo. A paciência é seu maior desafio kármico, pois seu relógio interno bate no ritmo da urgência.</p>
            <p><strong>Desafio Evolutivo:</strong> Aprender que liderar não é apenas ir na frente, mas garantir que outros consigam te seguir. Transformar a impulsividade em iniciativa estratégica.</p>
        `,
        "Touro": `
            <h3><i class="fas fa-mountain"></i> O Construtor de Realidades</h3>
            <p>Ter o Sol em Touro significa que sua essência é sustentada pelos pilares da Terra Fixa. Diferente da explosão momentânea de Áries, sua energia é a da persistência inabalável. Você veio a este mundo para materializar o espírito, para dar forma, cheiro, toque e valor às ideias abstratas. Você é o guardião dos recursos e da beleza.</p>
            <p>Sua psicologia é orientada pela busca de segurança e prazer. Não há culpa em desejar o conforto; para você, a matéria é sagrada. Sua lealdade é lendária, assim como sua teimosia. Uma vez que você decide um caminho, é como um trem em movimento: impossível de parar e difícil de desviar.</p>
            <p><strong>Desafio Evolutivo:</strong> O desapego. Entender que sua segurança reside na sua capacidade interna de gerar valor, e não nas coisas ou pessoas que você acumula. Vencer o medo da mudança.</p>
        `,
        "Gêmeos": `
            <h3><i class="fas fa-wind"></i> O Mensageiro dos Mundos</h3>
            <p>O Sol em Gêmeos ilumina a mente superior. Você é o eterno estudante e o comunicador do zodíaco. Sua alma se alimenta de conexão, troca e variedade. Para você, o inferno é o tédio e a rotina repetitiva. Sua inteligência é rápida, adaptável e capaz de ver as duas faces de qualquer moeda.</p>
            <p>Você possui o dom da palavra e a maldição da dispersão. Seu sistema nervoso é altamente ativo, captando informações o tempo todo. Você é a ponte entre pessoas diferentes, o catalisador de ideias. Onde você está, a informação circula e o ar se move.</p>
            <p><strong>Desafio Evolutivo:</strong> O foco. Aprender a aprofundar-se em um tema antes de pular para o próximo. Transformar informação (dados) em sabedoria (experiência vivida).</p>
        `,
        // ... (Para economizar espaço aqui, a lógica se repete para Câncer a Peixes. 
        // No produto final, você terá textos deste tamanho para todos).
        "Câncer": `<p>Texto longo sobre Câncer...</p>`, 
        "Leão": `
            <h3><i class="fas fa-crown"></i> O Rei Solar</h3>
            <p>O Sol em Leão está em casa. Aqui, a estrela central brilha com força total. Sua missão de vida envolve autoexpressão, criatividade e liderança. Você não precisa pedir atenção; sua presença naturalmente atrai olhares. Existe uma nobreza intrínseca no seu caráter, uma generosidade que aquece todos ao redor.</p>
            <p>Sua jornada é a do Herói que busca sua própria identidade. Você precisa criar algo que leve sua assinatura, seja um filho, uma obra de arte ou uma empresa. A mediocridade é sua inimiga. Você vive pelo aplauso, não por vaidade vazia, mas porque o reconhecimento confirma sua existência.</p>
            <p><strong>Desafio Evolutivo:</strong> Diferenciar o "Eu Sou" do "Eu Tenho". Aprender a brilhar para iluminar os outros, e não para ofuscá-los. Controlar o orgulho ferido.</p>
        `,
        // ... Preencher até Peixes
    },

    // === ASCENDENTE (O DESTINO) ===
    "asc": {
        "Leão": `
            <h3><i class="fas fa-arrow-up"></i> Ascendente em Leão: A Máscara Real</h3>
            <p>Ter o Ascendente em Leão significa que, independentemente do seu signo solar, sua "porta de entrada" no mundo é majestosa. As pessoas te percebem imediatamente como alguém confiante, magnético e caloroso. Você entra num ambiente e a energia muda; há uma autoridade natural na sua postura.</p>
            <p>O destino te empurra para o palco. A vida constantemente te coloca em posições de liderança ou destaque, mesmo que você não procure por isso. Sua aparência física tende a ser marcante, muitas vezes com um cabelo ou semblante "leonino". Você não gosta de demonstrar fraqueza em público, mantendo sempre a dignidade.</p>
            <p><strong>Karma:</strong> Desenvolver a autoconfiança real, não apenas a fachada. Você veio para inspirar os outros através do seu exemplo de força e otimismo.</p>
        `,
        "Gêmeos": `
            <h3><i class="fas fa-arrow-up"></i> Ascendente em Gêmeos: A Eterna Juventude</h3>
            <p>Sua abordagem à vida é intelectual e curiosa. O mundo te vê como alguém inteligente, jovial e inquieto. Você provavelmente gesticula muito ao falar e tem um olhar vivo, que varre o ambiente captando tudo. A vida, para você, é um quebra-cabeça a ser resolvido.</p>
            <p>Você abre portas através da comunicação. Seu superpoder é a adaptabilidade; você consegue conversar com o rei e com o mendigo com a mesma facilidade. Porém, pode passar a impressão de ser inconstante ou superficial para signos mais rígidos.</p>
        `
        // ... Preencher outros Ascendentes
    },

    // === LUA (EMOÇÕES) ===
    "lua": {
        "Peixes": `
            <h3><i class="fas fa-moon"></i> Lua em Peixes: O Oceano Profundo</h3>
            <p>Sua estrutura emocional é das mais complexas e sensíveis do zodíaco. Você é uma "esponja psíquica". Muitas vezes, você se sente triste ou feliz sem motivo aparente, apenas porque absorveu a energia de quem estava ao seu lado. Sua compaixão é infinita.</p>
            <p>Para se sentir seguro, você precisa de escapismo. Seja através da música, do sono, da meditação ou da arte. O mundo real, cru e duro, machuca sua alma. Você nutre os outros através da compreensão espiritual e do sacrifício.</p>
            <p><strong>Cuidado:</strong> Tendência a se fazer de vítima ou a tentar "salvar" pessoas problemáticas para se sentir útil.</p>
        `
        // ... Preencher outras Luas
    },

    // === PLANETAS (ARQUÉTIPOS) ===
    "merc": {
        "Touro": `<p><strong>Mente Prática:</strong> Seu pensamento é construtivo. Você não aprende rápido, mas o que aprende, nunca esquece. Sua voz tende a ser melódica e calma. Decisões financeiras são seu forte.</p>`,
        "Escorpião": `<p><strong>Mente Detetive:</strong> Você não aceita respostas superficiais. Sua mente fura a aparência e busca a verdade oculta. Fala pouco, mas quando fala, toca na ferida ou na cura.</p>`
    },
    
    "venus": {
        "Touro": `<p><strong>Amor Sensorial:</strong> Vênus está em casa aqui. Você ama com o toque, com o cheiro, com a presença física. Fidelidade e estabilidade são inegociáveis. Você atrai dinheiro e beleza naturalmente.</p>`
    },

    "marte": {
        "Câncer": `<p><strong>Guerreiro Protetor:</strong> Sua agressividade é defensiva. Você luta com unhas e dentes por quem ama, mas pode ter dificuldade em lutar por si mesmo de forma direta. A raiva tende a ser engolida e virar rancor.</p>`
    }
};