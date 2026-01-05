// oriental-database.js
// MOTOR DO HORÓSCOPO CHINÊS (LUNI-SOLAR)

// 1. TABELA DE DATAS DO ANO NOVO CHINÊS (1930 - 2030)
// Formato: Ano: "Mês-Dia" (Data que inicia o ano novo)
const LUNAR_DATES = {
    1930: "01-30", 1931: "02-17", 1932: "02-06", 1933: "01-26", 1934: "02-14",
    1935: "02-04", 1936: "01-24", 1937: "02-11", 1938: "01-31", 1939: "02-19",
    1940: "02-08", 1941: "01-27", 1942: "02-15", 1943: "02-05", 1944: "01-25",
    1945: "02-13", 1946: "02-02", 1947: "01-22", 1948: "02-10", 1949: "01-29",
    1950: "02-17", 1951: "02-06", 1952: "01-27", 1953: "02-14", 1954: "02-03",
    1955: "01-24", 1956: "02-12", 1957: "01-31", 1958: "02-18", 1959: "02-08",
    1960: "01-28", 1961: "02-15", 1962: "02-05", 1963: "01-25", 1964: "02-13",
    1965: "02-02", 1966: "01-21", 1967: "02-09", 1968: "01-30", 1969: "02-17",
    1970: "02-06", 1971: "01-27", 1972: "02-15", 1973: "02-03", 1974: "01-23",
    1975: "02-11", 1976: "01-31", 1977: "02-18", 1978: "02-07", 1979: "01-28",
    1980: "02-16", 1981: "02-05", 1982: "01-25", 1983: "02-13", 1984: "02-02",
    1985: "02-20", 1986: "02-09", 1987: "01-29", 1988: "02-17", 1989: "02-06",
    1990: "01-27", 1991: "02-15", 1992: "02-04", 1993: "01-23", 1994: "02-10",
    1995: "01-31", 1996: "02-19", 1997: "02-07", 1998: "01-28", 1999: "02-16",
    2000: "02-05", 2001: "01-24", 2002: "02-12", 2003: "02-01", 2004: "01-22",
    2005: "02-09", 2006: "01-29", 2007: "02-18", 2008: "02-07", 2009: "01-26",
    2010: "02-14", 2011: "02-03", 2012: "01-23", 2013: "02-10", 2014: "01-31",
    2015: "02-19", 2016: "02-08", 2017: "01-28", 2018: "02-16", 2019: "02-05",
    2020: "01-25", 2021: "02-12", 2022: "02-01", 2023: "01-22", 2024: "02-10",
    2025: "01-29", 2026: "02-17", 2027: "02-06", 2028: "01-26", 2029: "02-13",
    2030: "02-03"
};

// 2. ELEMENTOS (Baseado no último dígito do ano REAL)
const ELEMENTOS_CHINESES = {
    0: { nome: "Metal", qualidade: "Determinação, inflexibilidade e ambição." },
    1: { nome: "Metal", qualidade: "Determinação, inflexibilidade e ambição." },
    2: { nome: "Água", qualidade: "Adaptabilidade, intuição e diplomacia." },
    3: { nome: "Água", qualidade: "Adaptabilidade, intuição e diplomacia." },
    4: { nome: "Madeira", qualidade: "Crescimento, criatividade e idealismo." },
    5: { nome: "Madeira", qualidade: "Crescimento, criatividade e idealismo." },
    6: { nome: "Fogo", qualidade: "Paixão, liderança e dinamismo." },
    7: { nome: "Fogo", qualidade: "Paixão, liderança e dinamismo." },
    8: { nome: "Terra", qualidade: "Estabilidade, praticidade e responsabilidade." },
    9: { nome: "Terra", qualidade: "Estabilidade, praticidade e responsabilidade." }
};

// 3. ARQUÉTIPOS DOS ANIMAIS
// Ordem do Zodíaco: Rato(0), Boi(1), Tigre(2), Coelho(3), Dragão(4), Serpente(5), Cavalo(6), Cabra(7), Macaco(8), Galo(9), Cão(10), Porco(11)
const ANIMAIS_CHINESES = [
    {
        nome: "Rato",
        arquetipo: "O Estrategista",
        icone: "fas fa-mouse",
        perfil: "Inteligente, charmoso e engenhoso. O Rato nunca perde uma oportunidade. Sabe acumular recursos e valoriza a família, mas deve cuidar com a ganância.",
        aliados: "Dragão e Macaco",
        inimigo: "Cavalo"
    },
    {
        nome: "Boi",
        arquetipo: "O Realizador",
        icone: "fas fa-bullhorn", // Adaptado
        perfil: "Forte, confiável e metódico. O Boi alcança o sucesso através do trabalho duro. É leal e protetor, mas sua teimosia pode ser seu maior obstáculo.",
        aliados: "Serpente e Galo",
        inimigo: "Cabra"
    },
    {
        nome: "Tigre",
        arquetipo: "O Rebelde",
        icone: "fas fa-paw",
        perfil: "Corajoso, impetuoso e magnético. O Tigre nasceu para liderar, não para obedecer. É apaixonado e imprevisível, inspirando respeito e medo.",
        aliados: "Cavalo e Cão",
        inimigo: "Macaco"
    },
    {
        nome: "Coelho",
        arquetipo: "O Diplomata",
        icone: "fas fa-carrot", // Adaptado, ou usar 'rabbit' se disponível na lib
        perfil: "Refinado, gentil e astuto. O Coelho detesta conflitos e usa sua inteligência para contornar problemas. É sortudo e tem bom gosto estético.",
        aliados: "Cabra e Porco",
        inimigo: "Galo"
    },
    {
        nome: "Dragão",
        arquetipo: "O Visionário",
        icone: "fas fa-dragon",
        perfil: "Poderoso, nobre e sortudo. O único animal mítico do zodíaco. Tem carisma natural e busca realizar grandes feitos, mas pode ser egocêntrico.",
        aliados: "Rato e Macaco",
        inimigo: "Cão"
    },
    {
        nome: "Serpente",
        arquetipo: "O Filósofo",
        icone: "fas fa-staff-snake",
        perfil: "Misteriosa, sábia e intuitiva. A Serpente observa em silêncio antes de agir. Tem gosto pelo luxo e é possessiva no amor.",
        aliados: "Boi e Galo",
        inimigo: "Porco"
    },
    {
        nome: "Cavalo",
        arquetipo: "O Aventureiro",
        icone: "fas fa-horse",
        perfil: "Livre, enérgico e popular. O Cavalo precisa de espaço e independência. Trabalha duro, mas pode perder o interesse rapidamente se ficar entediado.",
        aliados: "Tigre e Cão",
        inimigo: "Rato"
    },
    {
        nome: "Cabra",
        arquetipo: "O Artista",
        icone: "fas fa-cloud-meatball", // Adaptado
        perfil: "Criativa, pacífica e sonhadora. A Cabra tem um coração gentil e talento artístico. Prefere ser cuidada a liderar e detesta pressão.",
        aliados: "Coelho e Porco",
        inimigo: "Boi"
    },
    {
        nome: "Macaco",
        arquetipo: "O Inovador",
        icone: "fas fa-lightbulb", // Representação de inteligência
        perfil: "Brilhante, versátil e brincalhão. O Macaco resolve problemas complexos com facilidade. É mestre na improvisação, mas pode ser manipulador.",
        aliados: "Rato e Dragão",
        inimigo: "Tigre"
    },
    {
        nome: "Galo",
        arquetipo: "O Perfeccionista",
        icone: "fas fa-feather",
        perfil: "Observador, preciso e vaidoso. O Galo gosta de ordem e de se destacar. É trabalhador e honesto, mas suas críticas podem ser afiadas demais.",
        aliados: "Boi e Serpente",
        inimigo: "Coelho"
    },
    {
        nome: "Cão",
        arquetipo: "O Guardião",
        icone: "fas fa-dog",
        perfil: "Leal, justiceiro e honesto. O Cão defende os seus até o fim. Tem um faro para o perigo e para a mentira, mas tende ao pessimismo.",
        aliados: "Tigre e Cavalo",
        inimigo: "Dragão"
    },
    {
        nome: "Porco",
        arquetipo: "O Bon Vivant",
        icone: "fas fa-piggy-bank",
        perfil: "Generoso, tolerante e sincero. O Porco gosta dos prazeres da vida e trata todos bem. É ingênuo por acreditar que todos são bons como ele.",
        aliados: "Coelho e Cabra",
        inimigo: "Serpente"
    }
];

// 4. FUNÇÃO DE CÁLCULO
function calcularSignoChines(dataNascimento) {
    // dataNascimento: "YYYY-MM-DD"
    const [anoStr, mesStr, diaStr] = dataNascimento.split('-');
    let ano = parseInt(anoStr);
    const mes = parseInt(mesStr);
    const dia = parseInt(diaStr);

    // 1. Verifica Ano Novo Chinês
    const dataLimite = LUNAR_DATES[ano];
    
    // Se não tivermos o ano na base, usamos aproximação (04 de Fev)
    // Mas nossa base cobre 1930-2030, então é seguro para usuários vivos.
    let ehAnoAnterior = false;

    if (dataLimite) {
        const [limiteMes, limiteDia] = dataLimite.split('-').map(Number);
        
        if (mes < limiteMes) {
            ehAnoAnterior = true;
        } else if (mes === limiteMes && dia < limiteDia) {
            ehAnoAnterior = true;
        }
    }

    // Se nasceu antes do ano novo (ex: Jan 1990), pertence ao ano de 1989
    if (ehAnoAnterior) {
        ano = ano - 1;
    }

    // 2. Calcula Animal (Ciclo de 12 a partir de 1900 = Rato)
    // 1900 % 12 = 4 (Rato é offset 4 na matemática simples de resto, ou ajustamos o array)
    // Vamos usar um array fixo onde: 1900 = Rato.
    // (ano - 1900) % 12
    const offset = (ano - 1900) % 12;
    // O array ANIMAIS_CHINESES começa com Rato (0).
    const animal = ANIMAIS_CHINESES[offset];

    // 3. Calcula Elemento (Último dígito do ano REAL calculado)
    const ultimoDigito = ano % 10;
    const elemento = ELEMENTOS_CHINESES[ultimoDigito];

    return {
        animal: animal,
        elemento: elemento,
        anoReal: ano // Para debug ou exibição
    };
}