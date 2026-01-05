// fengshui-database.js
// ARQUITETURA ENERGÉTICA (MÉTODO BA ZHAI) - VERSÃO MASTER

const DIRECOES = {
    "N": "Norte", "S": "Sul", "L": "Leste", "O": "Oeste",
    "NE": "Nordeste", "NO": "Noroeste", "SE": "Sudeste", "SO": "Sudoeste"
};

// BANCO DE DADOS DETALHADO (KUA)
const MAPA_KUA = {
    "1": {
        elemento: "Água (Kan)",
        grupo: "Leste",
        arquetipo: "O Filósofo",
        // DESCRIÇÃO PROFUNDA DA PERSONALIDADE ENERGÉTICA
        perfil: `<p>O <strong>Kua 1</strong> é regido pelo Trigrama <em>Kan</em> (Água). Assim como a água, sua natureza é profunda, adaptável e persistente. Você possui uma sabedoria inata e flui através dos obstáculos em vez de confrontá-los rigidamente. Sua energia tende à introspecção, à diplomacia e ao movimento contínuo.</p>
                 <p><strong>Sua Essência:</strong> Flexibilidade, profundidade intelectual e intuição.</p>`,
        cores: "Preto, Azul Marinho e Carvão (Cores de Água Profunda).",
        // DIREÇÕES
        sheng_qi: { dir: "SE", nome: "Sheng Qi (Sucesso Vital)", desc: "Esta é a direção onde a energia 'nasce'. É a frequência da prosperidade financeira e do avanço social. Posicione sua mesa de trabalho aqui para atrair oportunidades de crescimento rápido." },
        tian_yi:  { dir: "L",  nome: "Tian Yi (O Médico Celestial)",  desc: "A direção da cura. Aqui, a energia restaura o corpo físico e a mente. É a posição ideal para o quarto de dormir, especialmente se você busca recuperação de saúde ou vitalidade." },
        yan_nian: { dir: "S",  nome: "Yan Nian (Longevidade e Amor)", desc: "A energia da harmonia. Regula relacionamentos, casamentos e diplomacia. Se você busca um parceiro ou quer paz no lar, ative esta área com objetos aos pares." },
        fu_wei:   { dir: "N",  nome: "Fu Wei (Estabilidade Pessoal)", desc: "Sua 'sede' energética. É a direção do autoconhecimento e da paz mental. Excelente para meditação, estudos profundos ou para posicionar a cabeceira se você tem insônia." },
        azar: "SO"
    },
    "2": {
        elemento: "Terra (Kun)",
        grupo: "Oeste",
        arquetipo: "O Nutridor",
        perfil: `<p>O <strong>Kua 2</strong> é regido pelo Trigrama <em>Kun</em> (Terra Mãe). Sua energia é a da receptividade suprema, da nutrição e da sustentação. Assim como o solo que permite que tudo cresça, você é a base segura para as pessoas ao seu redor. Sua força está na constância, no serviço e na confiabilidade.</p>
                 <p><strong>Sua Essência:</strong> Paciência, dedicação e suporte material.</p>`,
        cores: "Amarelo Ocre, Bege, Terracota e Tons de Areia.",
        sheng_qi: { dir: "NE", nome: "Sheng Qi (Sucesso Vital)", desc: "A energia da montanha (Terra) impulsiona seu sucesso. Vire sua mesa para cá para ter ganhos financeiros sólidos e autoridade inquestionável." },
        tian_yi:  { dir: "O",  nome: "Tian Yi (O Médico Celestial)",  desc: "A direção que fortalece sua imunidade e vitalidade. Se houver problemas digestivos ou de cansaço crônico, esta é a direção obrigatória para o descanso." },
        yan_nian: { dir: "NO", nome: "Yan Nian (Longevidade e Amor)", desc: "A energia do 'Pai' (Céu) encontra a 'Mãe' (Terra). Excelente para casamentos duradouros e parcerias de negócios fiéis." },
        fu_wei:   { dir: "SO", nome: "Fu Wei (Estabilidade Pessoal)", desc: "Seu palácio de origem. Traz clareza mental e segurança emocional. Ótimo local para guardar documentos, cofre ou ter seu altar pessoal." },
        azar: "N"
    },
    "3": {
        elemento: "Madeira Trovão (Zhen)",
        grupo: "Leste",
        arquetipo: "O Iniciador",
        perfil: `<p>O <strong>Kua 3</strong> é regido pelo Trigrama <em>Zhen</em> (Trovão). Sua natureza é o despertar da primavera: explosiva, rápida e voltada para o crescimento. Você é aquele que inicia projetos, que tem a ideia pioneira e a coragem de agir. Sua energia é vibrante e às vezes impaciente.</p>
                 <p><strong>Sua Essência:</strong> Ação, movimento, inovação e crescimento vertical.</p>`,
        cores: "Verde Escuro, Marrom e Azul (Água alimenta Madeira).",
        sheng_qi: { dir: "S",  nome: "Sheng Qi (Sucesso Vital)", desc: "A Madeira alimenta o Fogo do Sul. O resultado é fama, reconhecimento público e sucesso acelerado. Ideal para quem trabalha com mídias ou liderança." },
        tian_yi:  { dir: "N",  nome: "Tian Yi (O Médico Celestial)",  desc: "A Água do Norte nutre sua Madeira. Traz cura profunda, rejuvenescimento e fertilidade. O melhor local para dormir." },
        yan_nian: { dir: "SE", nome: "Yan Nian (Longevidade e Amor)", desc: "A energia da Madeira Suave ajuda a temperar sua impulsividade. Traz relacionamentos equilibrados e boa comunicação." },
        fu_wei:   { dir: "L",  nome: "Fu Wei (Estabilidade Pessoal)", desc: "Seu local de poder. Traz foco, determinação e consistência para terminar o que você começou. Ótimo para escritórios." },
        azar: "O"
    },
    "4": {
        elemento: "Madeira Vento (Xun)",
        grupo: "Leste",
        arquetipo: "O Harmonizador",
        perfil: `<p>O <strong>Kua 4</strong> é regido pelo Trigrama <em>Xun</em> (Vento/Madeira Suave). Diferente do trovão, sua energia é como a das raízes e videiras: penetrante, persistente e gentil. Você alcança seus objetivos através da rede de contatos, da inteligência e da adaptação suave.</p>
                 <p><strong>Sua Essência:</strong> Intelecto, criatividade, comunicação e networking.</p>`,
        cores: "Verde Claro, Turquesa e Tons Pastéis.",
        sheng_qi: { dir: "N",  nome: "Sheng Qi (Sucesso Vital)", desc: "A Água do Norte alimenta seu crescimento. Traz fluxo financeiro contínuo e sorte nos negócios. Use fontes de água aqui para ativar a riqueza." },
        tian_yi:  { dir: "S",  nome: "Tian Yi (O Médico Celestial)",  desc: "O Fogo do Sul aquece sua energia. Traz vitalidade cardíaca e entusiasmo pela vida. Ótimo para atividades físicas." },
        yan_nian: { dir: "L",  nome: "Yan Nian (Longevidade e Amor)", desc: "Fortalece laços familiares e românticos. É uma direção de lealdade e confiança mútua." },
        fu_wei:   { dir: "SE", nome: "Fu Wei (Estabilidade Pessoal)", desc: "Sua base. Traz clareza mental para estudos, escrita e planejamento estratégico. O melhor local para meditar." },
        azar: "NE"
    },
    "6": {
        elemento: "Metal Céu (Qian)",
        grupo: "Oeste",
        arquetipo: "O Líder",
        perfil: `<p>O <strong>Kua 6</strong> é regido pelo Trigrama <em>Qian</em> (O Céu). É a energia Yang pura, masculina e ativa. Representa o pai, o líder, o imperador. Sua natureza é organizar, comandar e estruturar. Você tem um senso inato de justiça e autoridade.</p>
                 <p><strong>Sua Essência:</strong> Liderança, ética, organização e poder.</p>`,
        cores: "Branco, Dourado, Prata e Cinza Metálico.",
        sheng_qi: { dir: "O",  nome: "Sheng Qi (Sucesso Vital)", desc: "A energia do Oeste ressoa com a sua. Traz autoridade inquestionável, promoções e sucesso financeiro. Coloque objetos de metal nobre aqui." },
        tian_yi:  { dir: "NE", nome: "Tian Yi (O Médico Celestial)",  desc: "A Terra nutre o Metal. Traz saúde mental, foco e imunidade forte. O local ideal para o descanso do guerreiro." },
        yan_nian: { dir: "SO", nome: "Yan Nian (Longevidade e Amor)", desc: "A união do Céu com a Terra. Traz o casamento perfeito, parcerias duradouras e harmonia doméstica inabalável." },
        fu_wei:   { dir: "NO", nome: "Fu Wei (Estabilidade Pessoal)", desc: "Seu trono. Traz disciplina e capacidade de gestão. O melhor lugar para tomar decisões importantes." },
        azar: "S"
    },
    "7": {
        elemento: "Metal Lago (Dui)",
        grupo: "Oeste",
        arquetipo: "O Comunicador",
        perfil: `<p>O <strong>Kua 7</strong> é regido pelo Trigrama <em>Dui</em> (O Lago). Representa a alegria, a boca e a comunicação. Sua energia é carismática, persuasiva e brilhante. Como um lago sereno que reflete a lua, você atrai as pessoas pelo charme e pela inteligência.</p>
                 <p><strong>Sua Essência:</strong> Carisma, oratória, alegria e prazer.</p>`,
        cores: "Branco, Cobre e Tons Metálicos Cintilantes.",
        sheng_qi: { dir: "NO", nome: "Sheng Qi (Sucesso Vital)", desc: "A energia do Céu apoia o Lago. Traz mentores poderosos, networking influente e sucesso em vendas ou política." },
        tian_yi:  { dir: "SO", nome: "Tian Yi (O Médico Celestial)",  desc: "A Terra nutre seu Metal. Traz saúde digestiva e absorção de nutrientes (físicos e emocionais). Local de cura." },
        yan_nian: { dir: "NE", nome: "Yan Nian (Longevidade e Amor)", desc: "Traz estabilidade para suas emoções e relacionamentos profundos, equilibrando sua natureza sociável." },
        fu_wei:   { dir: "O",  nome: "Fu Wei (Estabilidade Pessoal)", desc: "Seu refúgio. Traz criatividade e conexão com a 'criança interior'. Ótimo para lazer e hobbies." },
        azar: "L"
    },
    "8": {
        elemento: "Terra Montanha (Gen)",
        grupo: "Oeste",
        arquetipo: "O Guardião",
        perfil: `<p>O <strong>Kua 8</strong> é regido pelo Trigrama <em>Gen</em> (A Montanha). Sua energia é de quietude, sabedoria e pausa. Você é aquele que observa antes de agir. Sua natureza é sólida, confiável e voltada para o acúmulo de conhecimento e bens.</p>
                 <p><strong>Sua Essência:</strong> Estabilidade, contemplação e preservação.</p>`,
        cores: "Amarelo, Marrom, Bege e Tons de Pedra.",
        sheng_qi: { dir: "SO", nome: "Sheng Qi (Sucesso Vital)", desc: "Terra sobre Terra. Traz riqueza imobiliária, sucesso em investimentos de longo prazo e construção de patrimônio." },
        tian_yi:  { dir: "NO", nome: "Tian Yi (O Médico Celestial)",  desc: "O Céu protege a Montanha. Traz saúde robusta, longevidade e proteção contra acidentes." },
        yan_nian: { dir: "O",  nome: "Yan Nian (Longevidade e Amor)", desc: "Traz romance com alegria e comunicação leve, equilibrando sua natureza mais séria." },
        fu_wei:   { dir: "NE", nome: "Fu Wei (Estabilidade Pessoal)", desc: "Sua caverna de sabedoria. O local perfeito para estudos espirituais, biblioteca ou meditação profunda." },
        azar: "SE"
    },
    "9": {
        elemento: "Fogo (Li)",
        grupo: "Leste",
        arquetipo: "O Visionário",
        perfil: `<p>O <strong>Kua 9</strong> é regido pelo Trigrama <em>Li</em> (Fogo). Você é a luz que ilumina, que revela e que guia. Sua energia é ascendente, apaixonada e visível. Você depende de inspiração constante e tem o dom de inspirar os outros.</p>
                 <p><strong>Sua Essência:</strong> Paixão, visibilidade, intelecto rápido e espiritualidade.</p>`,
        cores: "Vermelho, Púrpura, Laranja e Magenta.",
        sheng_qi: { dir: "L",  nome: "Sheng Qi (Sucesso Vital)", desc: "A Madeira alimenta seu Fogo. Traz fama explosiva, clareza mental e novos inícios. Ideal para lançar projetos." },
        tian_yi:  { dir: "SE", nome: "Tian Yi (O Médico Celestial)",  desc: "Traz cura através do equilíbrio emocional e da visão clara (física e espiritual). Ótimo para recuperação." },
        yan_nian: { dir: "N",  nome: "Yan Nian (Longevidade e Amor)", desc: "Equilíbrio entre Fogo e Água. Traz relacionamentos apaixonados mas profundos, unindo emoção e sexualidade." },
        fu_wei:   { dir: "S",  nome: "Fu Wei (Estabilidade Pessoal)", desc: "Sua chama interna. Traz autoconfiança e carisma. O melhor lugar para se apresentar ou gravar vídeos." },
        azar: "NO"
    }
};

// CÁLCULO DO KUA (LÓGICA MATEMÁTICA)
function calcularKua(anoNascimento, genero, antesFev4) {
    let ano = parseInt(anoNascimento);
    if (antesFev4) ano = ano - 1;

    let total = 0;
    String(ano).split('').forEach(n => total += parseInt(n));
    while(total > 9) {
        let t = 0;
        String(total).split('').forEach(n => t += parseInt(n));
        total = t;
    }

    let kua = 0;
    if (genero === 'masculino') {
        kua = 11 - total;
    } else {
        kua = 4 + total;
    }

    while(kua > 9) {
        let t = 0;
        String(kua).split('').forEach(n => t += parseInt(n));
        kua = t;
    }

    if (kua === 5) {
        kua = (genero === 'masculino') ? 2 : 8;
    }

    return String(kua);
}

// GERADOR DE RELATÓRIO RICO EM HTML
function gerarRelatorioFengShui(kua) {
    const dados = MAPA_KUA[kua];
    if(!dados) return "<p>Erro no cálculo.</p>";

    return `
        <div class="kua-header">
            <div class="kua-badge">
                <span class="kua-label">KUA</span>
                <span class="kua-number">${kua}</span>
            </div>
            <div class="kua-info">
                <h3>Elemento: ${dados.elemento}</h3>
                <div class="element-desc">${dados.perfil}</div>
                <div class="color-palette"><i class="fas fa-palette"></i> <strong>Cores de Poder:</strong> ${dados.cores}</div>
            </div>
        </div>

        <div class="section-divider">SUAS DIREÇÕES SAGRADAS</div>

        <div class="directions-grid">
            
            <div class="direction-card success">
                <div class="card-icon"><i class="fas fa-crown"></i></div>
                <div class="card-content">
                    <h4>${dados.sheng_qi.nome}</h4>
                    <span class="dir-badge">${DIRECOES[dados.sheng_qi.dir]}</span>
                    <p>${dados.sheng_qi.desc}</p>
                </div>
            </div>

            <div class="direction-card health">
                <div class="card-icon"><i class="fas fa-heartbeat"></i></div>
                <div class="card-content">
                    <h4>${dados.tian_yi.nome}</h4>
                    <span class="dir-badge">${DIRECOES[dados.tian_yi.dir]}</span>
                    <p>${dados.tian_yi.desc}</p>
                </div>
            </div>

            <div class="direction-card love">
                <div class="card-icon"><i class="fas fa-heart"></i></div>
                <div class="card-content">
                    <h4>${dados.yan_nian.nome}</h4>
                    <span class="dir-badge">${DIRECOES[dados.yan_nian.dir]}</span>
                    <p>${dados.yan_nian.desc}</p>
                </div>
            </div>

            <div class="direction-card stability">
                <div class="card-icon"><i class="fas fa-anchor"></i></div>
                <div class="card-content">
                    <h4>${dados.fu_wei.nome}</h4>
                    <span class="dir-badge">${DIRECOES[dados.fu_wei.dir]}</span>
                    <p>${dados.fu_wei.desc}</p>
                </div>
            </div>
        </div>

        <div class="warning-box">
            <div class="warn-icon"><i class="fas fa-ban"></i></div>
            <div class="warn-text">
                <strong>DIREÇÃO DE PERDA TOTAL (JUE MING): ${DIRECOES[dados.azar]}</strong>
                <p>Esta é a direção onde sua energia biológica entra em conflito com o campo magnético local. Evite dormir apontando a cabeça para cá.</p>
            </div>
        </div>
    `;
}