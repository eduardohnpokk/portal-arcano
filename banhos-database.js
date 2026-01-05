// banhos-database.js
// GRIMÓRIO DE RITUAIS & CALCULADORA LUNAR

// 1. MOTOR ASTRONÔMICO (LUA E PLANETAS)
const MOTOR_ALQUIMICO = {
    fases: ["Nova", "Crescente", "Cheia", "Minguante"],
    
    diasRegentes: [
        { dia: "Domingo", planeta: "Sol", energia: "Sucesso, Vitalidade e Brilho Pessoal", cor: "#ffd700" },
        { dia: "Segunda-feira", planeta: "Lua", energia: "Intuição, Psiquismo e Limpeza Emocional", cor: "#e0e0e0" },
        { dia: "Terça-feira", planeta: "Marte", energia: "Coragem, Proteção e Quebra de Demandas", cor: "#ff4444" },
        { dia: "Quarta-feira", planeta: "Mercúrio", energia: "Comunicação, Estudos e Negócios Rápidos", cor: "#b19cd9" },
        { dia: "Quinta-feira", planeta: "Júpiter", energia: "Expansão, Dinheiro e Causas Judiciais", cor: "#8a2be2" },
        { dia: "Sexta-feira", planeta: "Vênus", energia: "Amor, Beleza e Harmonia", cor: "#ff69b4" },
        { dia: "Sábado", planeta: "Saturno", energia: "Banimento, Disciplina e Proteção Pesada", cor: "#555" }
    ],

    // Cálculo da Lua (Algoritmo Conway Simplificado para JS)
    getFaseLunar: function(date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        
        if (month < 3) { year--; month += 12; }
        ++month;
        let c = 365.25 * year;
        let e = 30.6 * month;
        let jd = c + e + day - 694039.09; // dias desde 1900
        jd /= 29.5305882; // ciclo lunar
        let b = parseInt(jd);
        jd -= b;
        b = Math.round(jd * 8);
        
        if (b >= 8) b = 0;
        
        // 0-1: Nova, 2-3: Crescente, 4-5: Cheia, 6-7: Minguante
        if (b <= 1) return "Nova";
        if (b <= 3) return "Crescente";
        if (b <= 5) return "Cheia";
        return "Minguante";
    }
};

// 2. RECEITUÁRIO (RITUAIS COMPLEXOS)
const GRIMORIO_BANHOS = [
    {
        id: "limpeza_pesada",
        titulo: "Ritual do Quebra-Demanda (Limpeza Pesada)",
        tipo: "Limpeza",
        melhorLua: ["Minguante"],
        melhorDia: ["Terça-feira", "Sábado"],
        ingredientes: [
            "7 Punhados de Sal Grosso (Cristalização)",
            "3 Galhos de Arruda (Erva quente para banimento)",
            "1 Espada-de-São-Jorge cortada em 3 pedaços",
            "Casca de 1 Alho (Proteção contra vampirismo)",
            "2 Litros de Água fervente"
        ],
        preparo: `
            <p>1. Em uma terça-feira ou sábado, ferva a água. Quando borbulhar, jogue os ingredientes e desligue o fogo imediatamente para não 'matar' a energia das plantas.</p>
            <p>2. Abafe com uma tampa branca por 20 minutos. Coe e devolva as ervas à natureza (pé de uma árvore seca ou lixo externo).</p>
            <p>3. Após seu banho higiênico, despeje esta mistura do <strong>pescoço para baixo</strong>. Não molhe a cabeça (o chacra coronário é sensível ao sal).</p>
            <p>4. Enquanto a água cai, visualize uma fumaça cinza saindo dos seus poros e descendo pelo ralo. Diga em voz alta: <em>'Eu ordeno que toda inveja, praga e estagnação saiam do meu corpo agora.'</em></p>
            <p>5. Não se seque com toalha. Deixe secar naturalmente e vista roupas claras.</p>
        `,
        aviso: "Este banho é forte. Pode causar sonolência. Faça antes de dormir."
    },
    {
        id: "prosperidade_ouro",
        titulo: "Banho da Coroa Solar (Atração de Ouro)",
        tipo: "Prosperidade",
        melhorLua: ["Crescente", "Cheia"],
        melhorDia: ["Domingo", "Quinta-feira"],
        ingredientes: [
            "7 Folhas de Louro (Triunfo e Vitória)",
            "3 Paus de Canela (Acelerador de energia)",
            "1 Colher de Mel (Atração magnética)",
            "Raspas de uma Laranja (Energia solar)",
            "Algumas moedas douradas (lavadas) para energizar a água"
        ],
        preparo: `
            <p>1. Ferva a água. Adicione o louro e a canela. Deixe ferver por 3 minutos (ervas secas precisam de fervura leve).</p>
            <p>2. Desligue, adicione o mel e as raspas de laranja. Tampe e deixe amornar.</p>
            <p>3. Retire as moedas (guarde-as na carteira após o ritual, não as gaste por 7 dias).</p>
            <p>4. Tome este banho da <strong>cabeça aos pés</strong>. A energia da prosperidade deve cobrir sua aura inteira.</p>
            <p>5. Mantenha o pensamento fixo na sensação de ter dinheiro sobrando. Não pense na falta, pense na sobra.</p>
        `,
        aviso: "Evite fazer na Lua Minguante, pois pode minguar seus ganhos."
    },
    {
        id: "amor_venus",
        titulo: "O Encantamento de Vênus (Amor e Autoestima)",
        tipo: "Amor",
        melhorLua: ["Crescente", "Cheia"],
        melhorDia: ["Sexta-feira"],
        ingredientes: [
            "Pétalas de 1 Rosa Vermelha (Paixão)",
            "Pétalas de 1 Rosa Cor-de-Rosa (Afeto)",
            "1 Maçã cortada em 4 partes (Símbolo de Vênus)",
            "3 Gotas de Essência de Baunilha ou Ylang-Ylang",
            "Quartzo Rosa (opcional)"
        ],
        preparo: `
            <p>1. Aqueça a água (não deixe ferver para não destruir a essência das flores). Quando estiver quente, desligue.</p>
            <p>2. Adicione as pétalas e a maçã. Macere (amasse) levemente as pétalas com as mãos dentro da água, pedindo para ativar seu magnetismo pessoal.</p>
            <p>3. Adicione o perfume/essência.</p>
            <p>4. Tome o banho do pescoço para baixo. Não se enxugue esfregando; apenas apalpe a toalha no corpo para manter o aroma na pele.</p>
            <p>5. Vista uma roupa que faça você se sentir poderoso(a) e atraente, mesmo que vá ficar em casa.</p>
        `,
        aviso: "Se feito na Lua Nova, atrai um amor novo. Na Cheia, intensifica o atual."
    },
    {
        id: "abertura_caminhos",
        titulo: "Chave Mestra (Abertura de Caminhos)",
        tipo: "Caminhos",
        melhorLua: ["Nova", "Crescente"],
        melhorDia: ["Quarta-feira", "Domingo"],
        ingredientes: [
            "7 Folhas de Abre-Caminho (ou Manjericão)",
            "3 Chaves velhas (lavadas)",
            "1 Girassol (ou sementes de girassol)",
            "Água de coco (1 copo) misturada na água comum"
        ],
        preparo: `
            <p>1. Ferva a água com as chaves dentro (o metal ancora a energia de abertura). </p>
            <p>2. Desligue e adicione as ervas frescas e o girassol. Abafe.</p>
            <p>3. Adicione a água de coco por último (elemento purificador e abridor).</p>
            <p>4. Jogue do pescoço para baixo visualizando portas destrancando à sua frente.</p>
            <p>5. Pegue as chaves e coloque-as atrás da porta de entrada da sua casa por 3 dias.</p>
        `,
        aviso: "Ideal para quem busca emprego ou mudança de casa."
    }
];

// 3. FUNÇÃO MESTRA: ENCONTRA O BANHO PERFEITO
function consultarOraculoBanhos(intencaoUsuario) {
    const hoje = new Date();
    const faseAtual = MOTOR_ALQUIMICO.getFaseLunar(hoje);
    const diaSemana = hoje.getDay(); // 0 = Domingo
    const regenteHoje = MOTOR_ALQUIMICO.diasRegentes[diaSemana];

    // Filtra banhos pela intenção
    let banhosPossiveis = GRIMORIO_BANHOS.filter(b => b.tipo === intencaoUsuario);
    
    // Se não achar (ex: 'Geral'), pega todos
    if(banhosPossiveis.length === 0) banhosPossiveis = GRIMORIO_BANHOS;

    // Analisa Compatibilidade
    return banhosPossiveis.map(banho => {
        const luaCompativel = banho.melhorLua.includes(faseAtual);
        const diaCompativel = banho.melhorDia.includes(regenteHoje.dia);
        
        let status = "neutro";
        let msg = "Pode ser feito, mas a energia não está no pico.";
        
        if (luaCompativel && diaCompativel) {
            status = "perfeito";
            msg = "⚡ MOMENTO DE PODER MÁXIMO! A Lua e o Dia estão alinhados.";
        } else if (luaCompativel) {
            status = "bom";
            msg = "✅ A Lua está favorável para este ritual.";
        } else if (!luaCompativel) {
            status = "alerta";
            msg = `⚠️ Cuidado. Estamos na Lua ${faseAtual}. Este banho pede Lua ${banho.melhorLua.join(' ou ')}.`;
        }

        return {
            ...banho,
            statusCosmico: status,
            mensagemCosmica: msg,
            faseAtual: faseAtual,
            regenteHoje: regenteHoje
        };
    });
}