// fengshui-database.js
// ARQUITETURA ENERGÉTICA (MÉTODO BA ZHAI)

const DIRECOES = {
    "N": "Norte", "S": "Sul", "L": "Leste", "O": "Oeste",
    "NE": "Nordeste", "NO": "Noroeste", "SE": "Sudeste", "SO": "Sudoeste"
};

// BANCO DE DADOS DOS NÚMEROS KUA
const MAPA_KUA = {
    "1": {
        elemento: "Água",
        grupo: "Leste",
        arquetipo: "O Diplomata",
        cores: "Preto, Azul Escuro e Cinza",
        // DIREÇÕES FAVORÁVEIS
        sheng_qi: { dir: "SE", nome: "Sucesso Total", desc: "A melhor direção para prosperidade e carreira. Coloque sua mesa de trabalho virada para cá." },
        tian_yi:  { dir: "L",  nome: "Saúde Divina",  desc: "A direção da cura. Ideal para a cabeceira da cama, especialmente se estiver doente." },
        yan_nian: { dir: "S",  nome: "Amor e Relacionamentos", desc: "Harmonia familiar e romance. Ative com cristais de quartzo rosa ou fotos de casal." },
        fu_wei:   { dir: "N",  nome: "Estabilidade Pessoal", desc: "Direção de crescimento pessoal e meditação. Boa para estudos." },
        // O QUE EVITAR
        azar: "SO"
    },
    "2": {
        elemento: "Terra",
        grupo: "Oeste",
        arquetipo: "O Nutridor",
        cores: "Amarelo, Bege e Tons Terrosos",
        sheng_qi: { dir: "NE", nome: "Sucesso Total", desc: "Atraia riqueza virando sua mesa para cá. Use elementos de Terra ou Fogo." },
        tian_yi:  { dir: "O",  nome: "Saúde Divina",  desc: "Vitalidade física. Se tiver problemas de estômago, durma com a cabeça para o Oeste." },
        yan_nian: { dir: "NO", nome: "Amor e Relacionamentos", desc: "Para atrair parceiros ou melhorar o casamento. Use decorações metálicas aqui." },
        fu_wei:   { dir: "SO", nome: "Estabilidade Pessoal", desc: "Sua 'base' de poder. Ótima para o local onde você guarda documentos ou cofre." },
        azar: "N"
    },
    "3": {
        elemento: "Madeira",
        grupo: "Leste",
        arquetipo: "O Iniciador",
        cores: "Verde e Marrom",
        sheng_qi: { dir: "S",  nome: "Sucesso Total", desc: "Fama e reconhecimento. Use luzes fortes ou objetos vermelhos aqui para ativar." },
        tian_yi:  { dir: "N",  nome: "Saúde Divina",  desc: "Recuperação rápida. Mantenha esta área livre de bagunça." },
        yan_nian: { dir: "SE", nome: "Amor e Relacionamentos", desc: "Comunicação clara no amor. Coloque plantas saudáveis nesta direção." },
        fu_wei:   { dir: "L",  nome: "Estabilidade Pessoal", desc: "Crescimento constante. A melhor posição para sua mesa de estudos." },
        azar: "O"
    },
    "4": {
        elemento: "Madeira Suave",
        grupo: "Leste",
        arquetipo: "O Harmonizador",
        cores: "Verde Claro e Azul",
        sheng_qi: { dir: "N",  nome: "Sucesso Total", desc: "Fluxo financeiro contínuo. Ative com uma fonte de água pequena (movimento)." },
        tian_yi:  { dir: "S",  nome: "Saúde Divina",  desc: "Energia vital. Ótimo local para exercícios físicos ou yoga." },
        yan_nian: { dir: "L",  nome: "Amor e Relacionamentos", desc: "Laços familiares fortes. Coloque fotos da família nesta parede." },
        fu_wei:   { dir: "SE", nome: "Estabilidade Pessoal", desc: "Foco mental. Excelente para meditação e planejamento." },
        azar: "NE"
    },
    "6": {
        elemento: "Metal",
        grupo: "Oeste",
        arquetipo: "O Líder",
        cores: "Branco, Dourado e Prata",
        sheng_qi: { dir: "O",  nome: "Sucesso Total", desc: "Autoridade e liderança. Coloque objetos de metal ou troféus aqui." },
        tian_yi:  { dir: "NE", nome: "Saúde Divina",  desc: "Clareza mental e saúde imunológica. Evite cores vermelhas excessivas aqui." },
        yan_nian: { dir: "SO", nome: "Amor e Relacionamentos", desc: "Parcerias duradouras. O melhor local para a cama de casal." },
        fu_wei:   { dir: "NO", nome: "Estabilidade Pessoal", desc: "Organização e disciplina. Mantenha sua agenda ou computador nesta direção." },
        azar: "S"
    },
    "7": {
        elemento: "Metal Suave",
        grupo: "Oeste",
        arquetipo: "O Comunicador",
        cores: "Branco e Metálicos",
        sheng_qi: { dir: "NO", nome: "Sucesso Total", desc: "Oportunidades de networking. Coloque seu telefone ou computador virado para cá." },
        tian_yi:  { dir: "SO", nome: "Saúde Divina",  desc: "Digestão e absorção de nutrientes. Bom local para a mesa de jantar." },
        yan_nian: { dir: "NE", nome: "Amor e Relacionamentos", desc: "Estabilidade emocional. Use cristais de quartzo ou pedras naturais." },
        fu_wei:   { dir: "O",  nome: "Estabilidade Pessoal", desc: "Criatividade e filhos. Ótima área para brincar ou criar arte." },
        azar: "L"
    },
    "8": {
        elemento: "Terra Montanha",
        grupo: "Oeste",
        arquetipo: "O Guardião",
        cores: "Amarelo Ocre e Terra",
        sheng_qi: { dir: "SO", nome: "Sucesso Total", desc: "Riqueza imobiliária e negócios sólidos. Use cerâmicas ou pedras aqui." },
        tian_yi:  { dir: "NO", nome: "Saúde Divina",  desc: "Pulmões e pele. Mantenha o ar circulando nesta direção." },
        yan_nian: { dir: "O",  nome: "Amor e Relacionamentos", desc: "Romance divertido e leve. Coloque flores brancas (em número par)." },
        fu_wei:   { dir: "NE", nome: "Estabilidade Pessoal", desc: "Sabedoria e quietude. O melhor lugar da casa para sua biblioteca." },
        azar: "SE"
    },
    "9": {
        elemento: "Fogo",
        grupo: "Leste",
        arquetipo: "O Visionário",
        cores: "Vermelho, Roxo e Laranja",
        sheng_qi: { dir: "L",  nome: "Sucesso Total", desc: "Expansão rápida e novos inícios. Plantas altas funcionam muito bem aqui." },
        tian_yi:  { dir: "SE", nome: "Saúde Divina",  desc: "Fígado e visão. Mantenha plantas verdes e saudáveis nesta área." },
        yan_nian: { dir: "N",  nome: "Amor e Relacionamentos", desc: "Paixão e conexão profunda. Evite excesso de água parada aqui." },
        fu_wei:   { dir: "S",  nome: "Estabilidade Pessoal", desc: "Fama e reputação. Coloque seus diplomas e prêmios nesta parede." },
        azar: "NO"
    }
};

// CÁLCULO DO KUA (LÓGICA MATEMÁTICA)
function calcularKua(anoNascimento, genero, antesFev4) {
    let ano = parseInt(anoNascimento);
    
    // Correção Solar: Se nasceu antes de 4 de fev, conta como ano anterior
    if (antesFev4) ano = ano - 1;

    let soma = 0;
    let digitos = String(ano).split('');
    
    // Soma os dígitos até reduzir a 1 (mas o método Kua usa os 2 últimos dígitos ou soma total dependendo da fórmula)
    // Fórmula Simplificada Robusta:
    // 1. Somar todos os dígitos do ano
    let total = 0;
    String(ano).split('').forEach(n => total += parseInt(n));
    // Reduzir a um dígito
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

    // Reduzir novamente se passar de 9
    while(kua > 9) {
        let t = 0;
        String(kua).split('').forEach(n => t += parseInt(n));
        kua = t;
    }

    // CASO ESPECIAL: Kua 5 não existe no Bagua direcional
    // Homem 5 vira 2. Mulher 5 vira 8.
    if (kua === 5) {
        kua = (genero === 'masculino') ? 2 : 8;
    }

    return String(kua);
}

function gerarRelatorioFengShui(kua) {
    const dados = MAPA_KUA[kua];
    if(!dados) return "<p>Erro no cálculo.</p>";

    return `
        <div class="kua-header">
            <div class="kua-number">${kua}</div>
            <div class="kua-meta">
                <h3>Elemento: ${dados.elemento}</h3>
                <p>Grupo: ${dados.grupo} | Cores: ${dados.cores}</p>
            </div>
        </div>

        <div class="directions-grid">
            <div class="direction-card success">
                <h4><i class="fas fa-crown"></i> ${dados.sheng_qi.nome} (${DIRECOES[dados.sheng_qi.dir]})</h4>
                <p>${dados.sheng_qi.desc}</p>
            </div>
            <div class="direction-card health">
                <h4><i class="fas fa-heartbeat"></i> ${dados.tian_yi.nome} (${DIRECOES[dados.tian_yi.dir]})</h4>
                <p>${dados.tian_yi.desc}</p>
            </div>
            <div class="direction-card love">
                <h4><i class="fas fa-heart"></i> ${dados.yan_nian.nome} (${DIRECOES[dados.yan_nian.dir]})</h4>
                <p>${dados.yan_nian.desc}</p>
            </div>
            <div class="direction-card stability">
                <h4><i class="fas fa-anchor"></i> ${dados.fu_wei.nome} (${DIRECOES[dados.fu_wei.dir]})</h4>
                <p>${dados.fu_wei.desc}</p>
            </div>
        </div>

        <div class="warning-box">
            <p><strong>⛔ Direção de Perda Total: ${DIRECOES[dados.azar]}.</strong> Evite dormir com a cabeça voltada para esta direção ou sentar-se de frente para ela em reuniões importantes.</p>
        </div>
    `;
}