const phases = [
    {
        question: "Você recebeu uma mensagem alarmante num grupo dizendo que as aulas serão canceladas amanhã devido a um vírus misterioso, sem link de fonte oficial. O que você faz?",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
        options: [
            { text: "Compartilho imediatamente nos outros grupos para alertar meus amigos.", correct: false },
            { text: "Não compartilho e procuro o site oficial da escola para checar a informação.", correct: true }
        ]
    },
    {
        question: "Um colega da turma está recebendo comentários ofensivos e piadas pesadas em uma foto dele no Instagram. Qual a atitude correta de cidadania digital?",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500",
        options: [
            { text: "Apoio o colega no privado e ajudo a denunciar os comentários ofensivos na plataforma.", correct: true },
            { text: "Deixo para lá, afinal a internet é livre e é apenas uma brincadeira.", correct: false }
        ]
    }
];

let currentPhaseIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadPhase();
});

function loadPhase() {
    const questionText = document.getElementById("question-text");
    const gameImage = document.getElementById("game-image");
    const optionsContainer = document.getElementById("options-container");

    if (!questionText || !gameImage || !optionsContainer) return;

    optionsContainer.innerHTML = "";

    if (currentPhaseIndex >= phases.length) {
        questionText.innerText = `Parabéns! Você concluiu o desafio. Sua pontuação final foi de ${score} pontos.`;
        gameImage.src = "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500";
        return;
    }

    const currentPhase = phases[currentPhaseIndex];
    questionText.innerText = currentPhase.question;
    gameImage.src = currentPhase.image;

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
    
    document.getElementById("score").innerText = score;
    currentPhaseIndex++;
    loadPhase();
}
