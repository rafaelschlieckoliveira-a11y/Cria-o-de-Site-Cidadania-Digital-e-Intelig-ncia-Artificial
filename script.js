# Cidadania Digital e Inteligência Artificial: O Impacto das Deepfakes e da Desinformação na Sociedade

### Objetivo do Site
Este site foi desenvolvido para conscientizar a comunidade escolar sobre os riscos das deepfakes e fake news geradas por IA, oferecendo dicas práticas para identificar mídias manipuladas e navegar de forma segura na internet.

### Uso de Inteligência Artificial
* Caso não tenha usado IA para textos/imagens: "Não foram utilizadas ferramentas de IA para a criação de conteúdo deste projeto."
* Caso tenha usado (exemplo): 
  - **Ferramenta:** ChatGPT
  - **Prompt utilizado:** *"Escreva um texto curto explicando o que é deepfake para estudantes do ensino médio."*
// Banco de dados das fases (Perguntas, Imagens e Opções)
// DICA: Você pode substituir os links de 'image' por imagens do seu próprio projeto
const phases = [
    {
        question: "Você recebeu uma mensagem alarmante num grupo dizendo que as aulas serão canceladas amanhã devido a um vírus misterioso, sem link de fonte oficial. O que você faz?",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500", // Imagem simulando redes sociais
        options: [
            { text: "Compartilho imediatamente nos outros grupos para alertar meus amigos.", correct: false },
            { text: "Não compartilho e procuro o site oficial da escola para checar a informação.", correct: true }
        ]
    },
    {
        question: "Um colega da turma está recebendo comentários ofensivos e piadas pesadas em uma foto dele no Instagram. Qual a atitude correta de cidadania digital?",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500", // Imagem simulando tecnologia/conversa
        options: [
            { text: "Apoio o colega no privado e ajudo a denunciar os comentários ofensivos na plataforma.", correct: true },
            { text: "Deixo para lá, afinal a internet é livre e é apenas uma brincadeira.", correct: false }
        ]
    },
    {
        question: "Para criar uma conta em um jogo novo, você precisa criar uma senha. Qual dessas opções é a mais segura e ideal?",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500", // Imagem simulando segurança/código
        options: [
            { text: "Minha data de nascimento ou '123456', porque são fáceis de lembrar.", correct: false },
            { text: "Uma combinação de letras maiúsculas, minúsculas, números e um símbolo como '#'.", correct: true }
        ]
    }
];

let currentPhaseIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const gameImage = document.getElementById("game-image");
const optionsContainer = document.getElementById("options-container");
const scoreDisplay = document.getElementById("score");

function loadPhase() {
    // Limpa os botões anteriores
    optionsContainer.innerHTML = "";

    // Verifica se o jogo acabou
    if (currentPhaseIndex >= phases.length) {
        questionText.innerText = `Parabéns! Você concluiu o desafio. Sua pontuação final foi de ${score} pontos.`;
        gameImage.src = "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500"; // Imagem de sucesso
        return;
    }

    // Carrega os dados da fase atual
    const currentPhase = phases[currentPhaseIndex];
    questionText.innerText = currentPhase.question;
    gameImage.src = currentPhase.image;

    // Cria os botões de opção
    currentPhase.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.classList.add("option-btn");
        button.addEventListener("click", () => handleAnswer(option.correct));
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(isCorrect) {
    if (isCorrect) {
        alert("Resposta Correta! +10 pontos. 🎉");
        score += 10;
    } else {
        alert("Ops, essa não é a melhor prática de Cidadania Digital. 😕");
    }
    
    scoreDisplay.innerText = score;
    currentPhaseIndex++;
    loadPhase();
}

// Inicia o jogo
loadPhase();
