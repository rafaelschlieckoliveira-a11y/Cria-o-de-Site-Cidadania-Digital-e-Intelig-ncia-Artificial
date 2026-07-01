// Dados do Quiz
const dadosQuiz = {
    pergunta: "Você recebeu um vídeo bombástico de um influenciador no WhatsApp. O que você deve fazer antes de compartilhar?",
    alternativas: [
        { texto: "Compartilhar imediatamente nos grupos da família.", correta: false },
        { texto: "Procurar se portais de notícias confiáveis estão falando sobre o assunto.", correta: true },
        { texto: "Acreditar no vídeo se a imagem parecer muito realista.", false }
    ]
};

// Elementos da página
const elementoPergunta = document.getElementById("pergunta");
const elementoAlternativas = document.getElementById("alternativas");
const elementoResultado = document.getElementById("resultado-quiz");

// Inicializar Quiz
function carregarQuiz() {
    elementoPergunta.innerText = dadosQuiz.pergunta;
    elementoAlternativas.innerHTML = ""; // Limpa alternativas anteriores

    dadosQuiz.alternativas.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.innerText = opcao.texto;
        botao.classList.add("btn-opcao");
        
        // Adiciona o evento de clique para validar a resposta
        botao.addEventListener("click", () => verificarResposta(opcao.correta));
        
        elementoAlternativas.appendChild(botao);
    });
}

// Verificar a resposta selecionada
function verificarResposta(eCorreta) {
    if (eCorreta) {
        elementoResultado.innerText = "✅ Correto! Checar fontes confiáveis antes de espalhar conteúdo evita a desinformação.";
        elementoResultado.style.color = "#28a745";
    } else {
        elementoResultado.innerText = "❌ Incorreto. Compartilhar sem checar espalha notícias falsas e prejudica a cidadania digital.";
        elementoResultado.style.color = "#dc3545";
    }
}

// Executar ao carregar a página
window.onload = carregarQuiz;
