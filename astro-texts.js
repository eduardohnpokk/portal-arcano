/* * ARQUIVO: astro-texts.js
 * DESCRIÇÃO: Biblioteca de Interpretações Astrológicas Profissionais
 */

const ASTRO_DB = {
    // 1. DEFINIÇÃO DOS ARQUÉTIPOS PLANETÁRIOS (O "QUÊ")
    planetas: {
        "Sol": {
            titulo: "A Essência Vital e o Propósito",
            texto: "O Sol representa o centro da sua personalidade, sua vontade consciente e a fonte de sua vitalidade. É onde você busca brilhar e ser reconhecido."
        },
        "Lua": {
            titulo: "O Mundo Emocional e Inconsciente",
            texto: "A Lua rege suas reações instintivas, suas necessidades de segurança e como você nutre a si mesmo e aos outros. Ela revela sua alma privada."
        },
        "Mercúrio": {
            titulo: "O Intelecto e a Comunicação",
            texto: "Mercúrio define como você processa informações, aprende e se expressa. É a ponte entre o seu mundo interno e o externo."
        },
        "Vênus": {
            titulo: "O Amor, Valores e Estética",
            texto: "Vênus dita o que você valoriza, como você ama e o que lhe dá prazer. É o filtro pelo qual você busca harmonia e beleza."
        },
        "Marte": {
            titulo: "A Ação, Desejo e Conquista",
            texto: "Marte é o guerreiro interior. Ele mostra como você persegue seus desejos, defende seus limites e canaliza sua energia física."
        },
        "Júpiter": {
            titulo: "Expansão, Fé e Sabedoria",
            texto: "Júpiter representa onde buscamos crescimento, sorte e sentido maior. É a área da vida onde tendemos a ser otimistas e excessivos."
        },
        "Saturno": {
            titulo: "Estrutura, Limites e Amadurecimento",
            texto: "Saturno é o grande professor. Ele indica onde encontraremos desafios que exigem disciplina, mas que trazem recompensas duradouras."
        },
        "Urano": {
            titulo: "Inovação, Liberdade e Ruptura",
            texto: "Urano mostra onde você precisa ser diferente, quebrar regras e expressar sua individualidade única, muitas vezes de forma súbita."
        },
        "Netuno": {
            titulo: "Espiritualidade, Sonhos e Ilusão",
            texto: "Netuno dissolve fronteiras. Ele indica onde somos mais sensíveis, inspirados e compassivos, mas também onde podemos nos iludir."
        },
        "Plutão": {
            titulo: "Transformação Profunda e Poder",
            texto: "Plutão rege os ciclos de morte e renascimento. Ele mostra onde você viverá crises intensas que resultarão em uma regeneração total."
        }
    },

    // 2. MATIZES ZODIACAIS (O "COMO")
    // Aqui explicamos como o planeta se comporta naquele signo específico
    signos: {
        "Áries": "de forma impulsiva, direta e pioneira. Há uma necessidade de liderar e iniciar processos com coragem, embora possa haver impaciência.",
        "Touro": "de maneira constante, sensorial e prática. A energia se fixa na busca por estabilidade, prazer e recursos materiais duradouros.",
        "Gêmeos": "através da curiosidade, da troca de ideias e da versatilidade. A expressão é rápida, lógica e adaptável, buscando sempre novas conexões.",
        "Câncer": "com sensibilidade, proteção e memória emocional. A energia flui através do cuidado, do pertencimento e da intuição profunda.",
        "Leão": "com criatividade, drama e nobreza. Existe uma necessidade de expressar o 'eu' de forma radiante, calorosa e centralizadora.",
        "Virgem": "através da análise, do critério e do serviço. A energia busca aperfeiçoamento, ordem e utilidade prática nos detalhes.",
        "Libra": "buscando equilíbrio, beleza e parceria. A expressão é diplomática e orientada para o outro, evitando conflitos diretos.",
        "Escorpião": "com intensidade, profundidade e magnetismo. A energia investiga o oculto, transforma crises e busca fusão emocional total.",
        "Sagitário": "através da busca pela verdade, aventura e expansão. A expressão é otimista, filosófica e voltada para horizontes distantes.",
        "Capricórnio": "com ambição, disciplina e foco no longo prazo. A energia é estruturada, prudente e voltada para conquistas concretas e status.",
        "Aquário": "de forma original, inventiva e humanitária. A expressão quebra padrões, valoriza o coletivo e olha para o futuro com independência.",
        "Peixes": "através da empatia, da imaginação e da transcendência. A energia é fluida, sensível e conectada a realidades sutis e espirituais."
    },

    // 3. CENÁRIOS DAS CASAS (O "ONDE")
    casas: {
        1: "na sua identidade pessoal, na aparência física e na forma como você inicia projetos. É a máscara que você apresenta ao mundo.",
        2: "na área das finanças, dos valores pessoais e da autoestima. Envolve tudo aquilo que você considera 'seu' e como gera recursos.",
        3: "na comunicação, no aprendizado básico e no ambiente imediato. Afeta sua relação com irmãos, vizinhos e trocas cotidianas.",
        4: "na esfera doméstica, nas raízes familiares e na vida privada. É a base emocional e o refúgio onde você recarrega as energias.",
        5: "na criatividade, nos romances, nos filhos e na autoexpressão. É o palco onde você busca prazer, diversão e reconhecimento pessoal.",
        6: "na rotina diária, no trabalho, na saúde e no serviço. Envolve como você organiza seus hábitos e sua utilidade prática no mundo.",
        7: "nos relacionamentos sérios, casamentos e parcerias comerciais. É onde você encontra o 'outro' e aprende sobre cooperação.",
        8: "nas crises, na sexualidade profunda, nos recursos compartilhados e nas transformações. É o território do oculto e da regeneração.",
        9: "na busca por sentido, na filosofia, viagens longas e estudos superiores. Envolve a expansão da consciência e crenças.",
        10: "na carreira, na reputação pública e no status social. É onde você busca realizar suas ambições e deixar um legado no mundo.",
        11: "nas amizades, nos grupos, nas esperanças e nos projetos futuros. Envolve sua conexão com o coletivo e ideais humanitários.",
        12: "no inconsciente, na espiritualidade, no isolamento e nos sacrifícios. É onde as fronteiras se dissolvem e lidamos com o carma."
    }
};

// Função Auxiliar para montar o texto final
function gerarInterpretacao(planeta, signo, casa) {
    const pData = ASTRO_DB.planetas[planeta] || { titulo: planeta, texto: "Influência planetária." };
    const sTexto = ASTRO_DB.signos[signo] || "de forma característica.";
    const cTexto = ASTRO_DB.casas[casa] || "em uma área específica da vida.";

    return `
        <h4 style="color:#d4af37; margin-bottom:5px; font-family:'Cinzel'">${pData.titulo}</h4>
        <p style="margin-bottom: 10px;">${pData.texto}</p>
        <p>
            <strong>Dinâmica:</strong> A energia de ${planeta} manifesta-se ${sTexto}
        </p>
        <p>
            <strong>Cenário de Atuação (Casa ${casa}):</strong> Esta configuração foca sua influência ${cTexto}
        </p>
        <hr style="border: 0; border-top: 1px solid #333; margin: 15px 0;">
    `;
}