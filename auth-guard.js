// auth-guard.js
// O CÃO DE GUARDA DO SISTEMA PREMIUM

// 1. Bloqueia a visão imediatamente (CSS via JS)
document.write('<style>body { display: none !important; background: #000; }</style>');

// 2. Verifica credenciais
const firebaseGuardConfig = { apiKey: "AIzaSyDMeLgPB2wroI-papk-T9R_mbCcj3MC2TE", authDomain: "portal-mistico-6532b.firebaseapp.com", projectId: "portal-mistico-6532b", storageBucket: "portal-mistico-6532b.firebasestorage.app", messagingSenderId: "925159229004", appId: "1:925159229004:web:5d9dc758474789085016e9" };

// Inicializa apenas se ainda não foi (evita erro de duplicidade)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseGuardConfig);
}
const authGuard = firebase.auth();
const dbGuard = firebase.firestore();

// 3. A Lógica de Expulsão
authGuard.onAuthStateChanged(user => {
    if (!user) {
        // Não logado? TCHAU.
        window.location.href = "index.html"; 
    } else {
        // Logado? Vamos ver se pagou.
        dbGuard.collection("usuarios").doc(user.uid).get()
        .then(doc => {
            if (doc.exists) {
                const dados = doc.data();
                
                // VERIFICAÇÃO FERROZ
                if (dados.status === "premium") {
                    // É PAGANTE: Libera a visão
                    const styleSheet = document.createElement("style");
                    styleSheet.innerText = "body { display: block !important; }";
                    document.head.appendChild(styleSheet);
                } else {
                    // NÃO É PAGANTE: Manda para a página de vendas
                    alert("Acesso restrito a Iniciados Premium.");
                    window.location.href = "vendas.html"; // Crie essa página ou mande para index
                }
            } else {
                // Erro de conta
                window.location.href = "index.html";
            }
        })
        .catch(error => {
            console.error("Erro na segurança:", error);
            window.location.href = "index.html";
        });
    }
});