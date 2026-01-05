// auth-guard.js
// SISTEMA DE SEGURANÇA COM CHAVE MESTRA

// 1. BLOQUEIO IMEDIATO DA VISÃO
// Cria uma barreira visual preta antes de qualquer coisa carregar
const style = document.createElement('style');
style.id = 'bloqueio-total';
style.innerHTML = 'body { display: none !important; background-color: #000 !important; }';
document.head.appendChild(style);

// 2. CONFIGURAÇÃO (SENHA MESTRA)
const SENHA_MESTRA = "souoimperador"; // <--- SUA SENHA SECRETA AQUI

// Configuração do Firebase
const guardConfig = { apiKey: "AIzaSyDMeLgPB2wroI-papk-T9R_mbCcj3MC2TE", authDomain: "portal-mistico-6532b.firebaseapp.com", projectId: "portal-mistico-6532b", storageBucket: "portal-mistico-6532b.firebasestorage.app", messagingSenderId: "925159229004", appId: "1:925159229004:web:5d9dc758474789085016e9" };

if (typeof firebase === 'undefined' || !firebase.apps.length) {
    // Carrega script do firebase dinamicamente se não existir (segurança extra)
    // Mas assume-se que as páginas já têm os scripts.
}

// 3. FUNÇÃO DE DESBLOQUEIO (LIBERA A TELA)
function liberarAcesso() {
    const bloqueio = document.getElementById('bloqueio-total');
    if(bloqueio) bloqueio.remove();
    
    // Força o body a aparecer
    const styleLibera = document.createElement('style');
    styleLibera.innerHTML = 'body { display: block !important; opacity: 1 !important; visibility: visible !important; }';
    document.head.appendChild(styleLibera);
}

// 4. LÓGICA DO GUARDA
document.addEventListener("DOMContentLoaded", () => {
    
    // A. Verifica se já usou a senha mestra antes (para não pedir toda hora)
    if (localStorage.getItem('acesso_admin_liberado') === 'sim') {
        liberarAcesso();
        return; 
    }

    const auth = firebase.auth();
    const db = firebase.firestore();

    auth.onAuthStateChanged(user => {
        if (!user) {
            // Visitante -> Pede senha ou expulsa
            checarSenhaOuExpulsar();
        } else {
            // Usuário Logado -> Checa se é Premium
            db.collection("usuarios").doc(user.uid).get().then(doc => {
                if (doc.exists && doc.data().status === "premium") {
                    // É PAGANTE -> Libera
                    liberarAcesso();
                } else {
                    // LOGADO MAS NÃO PAGOU -> Pede senha
                    checarSenhaOuExpulsar();
                }
            }).catch(() => {
                checarSenhaOuExpulsar();
            });
        }
    });
});

function checarSenhaOuExpulsar() {
    // Dá uma chance para o dono do site (VOCÊ) digitar a senha
    // Um delay pequeno para garantir que o navegador renderizou o prompt
    setTimeout(() => {
        const tentativa = prompt("ÁREA RESTRITA A MEMBROS PREMIUM.\nSe você é o administrador, digite a Senha Mestra:");
        
        if (tentativa === SENHA_MESTRA) {
            // Senha correta: Salva no navegador e libera
            localStorage.setItem('acesso_admin_liberado', 'sim');
            alert("Bem-vindo, Mestre. Acesso liberado permanentemente neste navegador.");
            liberarAcesso();
        } else {
            // Senha errada ou Cancelou: TCHAU.
            window.location.href = "index.html"; 
        }
    }, 500);
}