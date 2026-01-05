// oraculo-database.js
// GRIMÓRIO DO TARÔ (ARCANOS MAIORES)

const ARCANOS = [
    {
        id: 0,
        nome: "O Louco",
        numero: "0",
        arquetipo: "O Salto de Fé",
        img_placeholder: "fas fa-feather-alt", // Ícone caso não tenha imagem
        geral: "O Louco representa o início de uma jornada, a inocência e a liberdade espiritual. É o momento de confiar no universo e dar um salto de fé, mesmo que pareça imprudente para os outros.",
        amor: "No amor, indica um romance espontâneo, sem amarras, ou a necessidade de trazer mais leveza para a relação atual.",
        trabalho: "Novos projetos ousados. Momento de arriscar em algo inovador.",
        conselho: "Não tenha medo de parecer tolo. A sabedoria está em arriscar o novo."
    },
    {
        id: 1,
        nome: "O Mago",
        numero: "I",
        arquetipo: "O Manifestador",
        img_placeholder: "fas fa-magic",
        geral: "O Mago indica que você tem todas as ferramentas necessárias na sua mesa. É a carta da ação, da vontade consciente e da capacidade de transformar sonhos em realidade.",
        amor: "Iniciativa. Se você quer alguém, aja. Você tem o poder de sedução e comunicação agora.",
        trabalho: "Hora de colocar a mão na massa. Use suas habilidades técnicas. O sucesso depende da sua ação direta.",
        conselho: "Concentre sua vontade. O universo espera seu comando para agir."
    },
    {
        id: 2,
        nome: "A Sacerdotisa",
        numero: "II",
        arquetipo: "A Intuição",
        img_placeholder: "fas fa-book-open",
        geral: "A Sacerdotisa pede silêncio e introspecção. Nem tudo deve ser revelado agora. Confie nos seus sonhos e na sua intuição mais do que na lógica fria.",
        amor: "Um amor platônico, secreto ou uma conexão espiritual profunda. Mantenha a discrição.",
        trabalho: "Estude, planeje e observe. Não é hora de movimentos bruscos, mas de estratégia oculta.",
        conselho: "Olhe para dentro. A resposta que você busca não está no mundo lá fora."
    },
    {
        id: 3,
        nome: "A Imperatriz",
        numero: "III",
        arquetipo: "A Mãe Natureza",
        img_placeholder: "fas fa-leaf",
        geral: "A Imperatriz é a abundância, a fertilidade e a criatividade. É um sinal de que seus projetos vão florescer e dar frutos. Energia feminina de nutrição e beleza.",
        amor: "Fertilidade, sensualidade e harmonia. Um período de grande atração e realização afetiva.",
        trabalho: "Prosperidade. Projetos criativos estão favorecidos. O que você plantar agora, crescerá forte.",
        conselho: "Nutra seus sonhos e cuide de si mesmo. Permita-se o prazer."
    },
    {
        id: 4,
        nome: "O Imperador",
        numero: "IV",
        arquetipo: "O Pai Estruturador",
        img_placeholder: "fas fa-chess-king",
        geral: "O Imperador traz ordem, estrutura e autoridade. É o momento de usar a razão, estabelecer limites claros e construir bases sólidas para o futuro.",
        amor: "Relação estável e séria, mas cuidado com a rigidez ou o excesso de controle.",
        trabalho: "Liderança, organização e disciplina. Assuma o comando da situação.",
        conselho: "Coloque ordem no caos. Seja firme nas suas decisões."
    },
    {
        id: 5,
        nome: "O Hierofante",
        numero: "V",
        arquetipo: "O Mestre Espiritual",
        img_placeholder: "fas fa-cross",
        geral: "O Hierofante representa a tradição, o ensino e a busca por sentido. Pode indicar a necessidade de seguir regras estabelecidas ou buscar um mentor.",
        amor: "Compromisso sério, casamento ou valores tradicionais influenciando a relação.",
        trabalho: "Faça o que é correto e ético. Associações com instituições ou ensino são favorecidas.",
        conselho: "Busque a sabedoria dos antigos. Não é hora de reinventar a roda."
    },
    {
        id: 6,
        nome: "Os Enamorados",
        numero: "VI",
        arquetipo: "A Escolha",
        img_placeholder: "fas fa-heart",
        geral: "Esta carta fala sobre escolhas de coração. Pode representar uma união, mas também uma bifurcação no caminho onde você deve decidir baseado nos seus valores.",
        amor: "Paixão, união de almas, mas também a necessidade de fazer uma escolha afetiva importante.",
        trabalho: "Parcerias e sociedades. Decisões que envolvem ética e paixão pelo que se faz.",
        conselho: "Siga seu coração, mas esteja pronto para as consequências da escolha."
    },
    {
        id: 7,
        nome: "O Carro",
        numero: "VII",
        arquetipo: "A Vitória",
        img_placeholder: "fas fa-space-shuttle",
        geral: "O Carro é movimento, progresso e triunfo através do controle da vontade. Seus objetivos serão alcançados se você mantiver o foco e as rédeas firmes.",
        amor: "Conquista rápida. Pode indicar alguém chegando na sua vida ou uma viagem a dois.",
        trabalho: "Avanço rápido, promoção ou sucesso em viagens de negócios. Mantenha o foco.",
        conselho: "Não desista agora. Avance com confiança e determinação."
    },
    {
        id: 8,
        nome: "A Justiça",
        numero: "VIII",
        arquetipo: "O Equilíbrio Cármico",
        img_placeholder: "fas fa-balance-scale",
        geral: "A Justiça indica que colhemos o que plantamos. É a carta da verdade, da clareza e das decisões racionais. Tudo será pesado na balança.",
        amor: "Trate o parceiro com igualdade. Pode indicar formalização de laços ou divórcio, dependendo do equilíbrio.",
        trabalho: "Contratos, questões legais e avaliações. Seja honesto e imparcial.",
        conselho: "Seja justo consigo mesmo e com os outros. A verdade aparecerá."
    },
    {
        id: 9,
        nome: "O Eremita",
        numero: "IX",
        arquetipo: "A Sabedoria Solitária",
        img_placeholder: "fas fa-lantern",
        geral: "O Eremita pede isolamento voluntário para encontrar a luz interior. É um tempo de pausa, reflexão e amadurecimento, longe do barulho do mundo.",
        amor: "Momento de estar só para se entender, ou uma relação que esfria para ser reavaliada.",
        trabalho: "Pesquisa, especialização e trabalho solitário. Não espere reconhecimento imediato.",
        conselho: "Ilumine seu próprio caminho. A resposta está no silêncio."
    },
    {
        id: 10,
        nome: "A Roda da Fortuna",
        numero: "X",
        arquetipo: "O Destino Cíclico",
        img_placeholder: "fas fa-sync-alt",
        geral: "A Roda gira. O que está em cima desce, o que está embaixo sobe. Mudanças inesperadas, sorte e destino estão em jogo. Nada é permanente.",
        amor: "Reviravoltas. Encontros cármicos ou mudanças súbitas na dinâmica da relação.",
        trabalho: "Instabilidade que traz oportunidades. Esteja pronto para se adaptar rapidamente.",
        conselho: "Aceite a mudança. Não resista aos ciclos da vida."
    },
    {
        id: 11,
        nome: "A Força",
        numero: "XI",
        arquetipo: "O Domínio da Paixão",
        img_placeholder: "fas fa-paw",
        geral: "Não é força bruta, é força interior. A capacidade de domar seus instintos e medos com compaixão e paciência. Resiliência e coragem moral.",
        amor: "Paixão intensa, mas controlada. Relação que exige paciência e diplomacia.",
        trabalho: "Persistência. Você vencerá pelo cansaço e pela competência, não pela força.",
        conselho: "Domine seus monstros internos com gentileza, não com violência."
    },
    {
        id: 12,
        nome: "O Enforcado",
        numero: "XII",
        arquetipo: "O Sacrifício",
        img_placeholder: "fas fa-user-injured",
        geral: "Um período de suspensão e espera. É necessário ver o mundo por outro ângulo. Às vezes, é preciso sacrificar algo agora para ganhar algo maior depois.",
        amor: "Estagnação ou sacrifício pelo outro. Necessidade de mudar a perspectiva sobre a relação.",
        trabalho: "Projetos travados. Não force. Use o tempo para replanejar.",
        conselho: "Pare de lutar contra a corrente. Solte e observe."
    },
    {
        id: 13,
        nome: "A Morte",
        numero: "XIII",
        arquetipo: "A Transformação",
        img_placeholder: "fas fa-skull",
        geral: "Não é morte física, mas o fim de um ciclo. Algo precisa acabar para que o novo nasça. Renovação profunda, corte de laços e metamorfose.",
        amor: "Fim de uma fase (ou relação) e início de outra. Transformação radical.",
        trabalho: "Mudança de emprego, fim de um projeto ou reinvenção profissional.",
        conselho: "Desapegue do que já morreu. Deixe ir para poder renascer."
    },
    {
        id: 14,
        nome: "A Temperança",
        numero: "XIV",
        arquetipo: "A Alquimia",
        img_placeholder: "fas fa-glass-whiskey",
        geral: "Equilíbrio, paciência e moderação. A cura vem através da mistura correta dos opostos. É o tempo de curar, fluir e encontrar o caminho do meio.",
        amor: "Harmonia, cura emocional e paciência. As coisas fluem no tempo certo.",
        trabalho: "Diplomacia e gestão de recursos. Misture ideias para criar algo novo.",
        conselho: "Evite extremos. A virtude está no equilíbrio."
    },
    {
        id: 15,
        nome: "O Diabo",
        numero: "XV",
        arquetipo: "A Sombra",
        img_placeholder: "fas fa-link",
        geral: "O Diabo representa nossos apegos, vícios e o materialismo. Fala sobre estar acorrentado aos próprios desejos ou medos. Grande energia sexual e material.",
        amor: "Paixão avassaladora, ciúmes ou dependência emocional. Atração magnética.",
        trabalho: "Ambição desmedida, obsessão pelo sucesso ou manipulação. Cuidado com atalhos.",
        conselho: "Reconheça suas sombras para não ser escravizado por elas."
    },
    {
        id: 16,
        nome: "A Torre",
        numero: "XVI",
        arquetipo: "A Ruptura",
        img_placeholder: "fas fa-gopuram",
        geral: "A Torre é a destruição das estruturas falsas. Um evento súbito que abala as fundações, mas liberta. O que não é verdadeiro cairá.",
        amor: "Ruptura súbita, revelação de segredos ou fim de ilusões.",
        trabalho: "Perda de emprego ou falência de planos mal estruturados. Recomeço forçado.",
        conselho: "Deixe cair. Só assim você poderá construir algo sólido e verdadeiro."
    },
    {
        id: 17,
        nome: "A Estrela",
        numero: "XVII",
        arquetipo: "A Esperança",
        img_placeholder: "fas fa-star",
        geral: "Após a tempestade da Torre, vem a Estrela. Cura, esperança, inspiração e fé no futuro. Conexão espiritual e proteção divina.",
        amor: "Amor puro, esperança renovada e cura de feridas passadas.",
        trabalho: "Inspiração artística, reconhecimento e fé nos projetos futuros.",
        conselho: "Tenha fé. O universo está conspirando a seu favor."
    },
    {
        id: 18,
        nome: "A Lua",
        numero: "XVIII",
        arquetipo: "A Ilusão",
        img_placeholder: "fas fa-moon",
        geral: "A Lua traz confusão, medos subconscientes e ilusões. As coisas não são o que parecem. Cuidado com o autoengano e a ansiedade.",
        amor: "Insegurança, ciúmes infundados ou segredos. Não confie apenas nas aparências.",
        trabalho: "Ambiente confuso, fofocas ou falta de clareza sobre o caminho.",
        conselho: "Enfrente seus medos, mas não tome decisões definitivas no escuro."
    },
    {
        id: 19,
        nome: "O Sol",
        numero: "XIX",
        arquetipo: "A Alegria",
        img_placeholder: "fas fa-sun",
        geral: "A melhor carta do baralho. Sucesso, vitalidade, clareza e alegria pura. Tudo o que estava escondido é iluminado. Vitória total.",
        amor: "Felicidade, casamento, filhos ou amor pleno e transparente.",
        trabalho: "Sucesso, reconhecimento público e realização. Aproveite o momento.",
        conselho: "Brilhe. Não esconda sua luz. É hora de celebrar."
    },
    {
        id: 20,
        nome: "O Julgamento",
        numero: "XX",
        arquetipo: "O Despertar",
        img_placeholder: "fas fa-bullhorn",
        geral: "O Julgamento é um chamado para despertar. Uma segunda chance, uma renovação ou a necessidade de perdoar o passado para seguir em frente.",
        amor: "Reconciliação ou a decisão final sobre uma relação. Renascimento.",
        trabalho: "Um chamado vocacional. Mudança de carreira baseada em propósito.",
        conselho: "Ouça o chamado da sua alma. Liberte-se do passado."
    },
    {
        id: 21,
        nome: "O Mundo",
        numero: "XXI",
        arquetipo: "A Realização",
        img_placeholder: "fas fa-globe",
        geral: "A conclusão de um grande ciclo. Sucesso total, integração e realização. Você chegou lá. O mundo está aos seus pés.",
        amor: "Plenitude, união feliz e sensação de completude.",
        trabalho: "Conclusão de projetos com êxito, viagens internacionais ou reconhecimento global.",
        conselho: "Celebre suas conquistas. Um ciclo se fecha para outro começar."
    }
];

// LÓGICA DE SORTEIO (SHUFFLE ALGORÍTMICO)
function embaralhar(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// SIMULAÇÃO DA MÃO DO DESTINO
function tirarCartas(quantidade) {
    const deck = [...ARCANOS]; // Copia o deck
    embaralhar(deck); // Embaralha 1x
    embaralhar(deck); // Embaralha 2x (Energia)
    return deck.slice(0, quantidade); // Tira as do topo
}