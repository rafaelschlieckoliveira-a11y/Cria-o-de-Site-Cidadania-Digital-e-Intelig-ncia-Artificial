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
const questions = [
    {
        question: "O que caracteriza a 'Pegada Digital' (Digital Footprint)?",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500", 
        answers: [
            { text: "O rastro de dados que deixamos ao navegar na internet.", correct: true },
            { text: "A quantidade de memória que um aplicativo ocupa.", correct: false },
            { text: "O tempo gasto olhando para a tela do celular.", correct: false },
            { text: "Um vírus que rastreia cliques do teclado.", correct: false }
        ]
    },
    {
        question: "Você vê uma foto comprometedora de um colega em um grupo. Qual a melhor postura ética?",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
        answers: [
            { text: "Apagar e alertar quem enviou sobre o respeito à privacidade.", correct: true },
            { text: "Salvar na galeria para ter provas caso dê algum problema.", correct: false },
            { text: "Encaminhar apenas para o seu melhor amigo de confiança.", correct: false },
            { text: "Rir e mandar um sticker de brincadeira.", correct: false }
        ]
    },
    {
        question: "Qual o principal objetivo da LGPD (Lei Geral de Proteção de Dados)?",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500",
        answers: [
            { text: "Proibir os jovens de usarem redes sociais à noite.", correct: false },
            { text: "Garantir a segurança e privacidade dos seus dados pessoais.", correct: true },
            { text: "Tornar a internet gratuita para todas as escolas.", correct: false },
            { text: "Controlar o tipo de jogo que pode ser baixado.", correct: false }
        ]
    },
    {
        question: "Ao criar um perfil público nas redes, o que NÃO se deve expor?",
        image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500",
        answers: [
            { text: "Seu nome artístico ou apelido favorito.", correct: false },
            { text: "Fotos da sua rotina diária sem uniformes ou locais específicos.", correct: false },
            { text: "Seus gostos musicais e hobbies.", correct: false },
            { text: "Localização em tempo real, endereço residencial e documentos.", correct: true }
        ]
    }
];

let shuffledQuestions, currentQuestionIndex;
let score = 0;

const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionElement = document.getElementById('question-title');
const imageElement = document.getElementById('quiz-image');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');

const resultText = document.getElementById('result-text');
const badgeIcon = document.getElementById('badge-icon');
const badgeName = document.getElementById('badge-name');

startGame();

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    quizScreen.classList.remove('hide');
    resultScreen.classList.add('hide');
    nextButton.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    updateProgressBar();
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    imageElement.src = question.image;
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    
    if (correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
        // Mostra a resposta certa mesmo se o aluno errar
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add('correct');
            }
        });
    }

    // Desativa todos os botões após o clique
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        setTimeout(showResults, 1500); // Vai para o resultado após 1.5s
    }
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

restartButton.addEventListener('click', startGame);

function showResults() {
    progressBar.style.width = '100%';
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    
    resultText.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
    
    // Sistema de Rankings Dinâmicos
    if (score === questions.length) {
        badgeIcon.innerText = "👑";
        badgeName.innerText = "Embaixador da Cidadania Digital";
    } else if (score >= questions.length / 2) {
        badgeIcon.innerText = "🛡️";
        badgeName.innerText = "Navegador Consciente";
    } else {
        badgeIcon.innerText = "📚";
        badgeName.innerText = "Aprendiz Digital (Hora de estudar mais!)";
    }
}
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

// O código só roda quando a página estiver totalmente pronta
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
const questions = [
    {
        question: "O que caracteriza a 'Pegada Digital' (Digital Footprint)?",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500", 
        answers: [
            { text: "O rastro de dados que deixamos ao navegar na internet.", correct: true },
            { text: "A quantidade de memória que um aplicativo ocupa.", correct: false },
            { text: "O tempo gasto olhando para a tela do celular.", correct: false }
        ]
    },
    {
        question: "Ao criar um perfil público nas redes, o que NÃO se deve expor?",
        image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500",
        answers: [
            { text: "Seus gostos musicais e hobbies.", correct: false },
            { text: "Localização em tempo real, endereço residencial e documentos.", correct: true }
        ]
    }
];

let shuffledQuestions, currentQuestionIndex, score;

document.addEventListener("DOMContentLoaded", () => {
    startGame();
    document.getElementById('next-btn').addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });
    document.getElementById('restart-btn').addEventListener('click', startGame);
});

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-screen').classList.remove('hide');
    document.getElementById('result-screen').classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    updateProgressBar();
}

function showQuestion(question) {
    document.getElementById('question-title').innerText = question.question;
    document.getElementById('quiz-image').src = question.image;
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        document.getElementById('answer-buttons').appendChild(button);
    });
}

function resetState() {
    document.getElementById('next-btn').classList.add('hide');
    const buttons = document.getElementById('answer-buttons');
    while (buttons.firstChild) buttons.removeChild(buttons.firstChild);
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    
    if (correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }

    Array.from(document.getElementById('answer-buttons').children).forEach(button => {
        if (button.dataset.correct === "true") button.classList.add('correct');
        button.disabled = true;
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        document.getElementById('next-btn').classList.remove('hide');
    } else {
        setTimeout(showResults, 1200);
    }
}

function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / shuffledQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
}

function showResults() {
    document.getElementById('progress-bar').style.width = '100%';
    document.getElementById('quiz-screen').classList.add('hide');
    document.getElementById('result-screen').classList.remove('hide');
    document.getElementById('result-text').innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
    
    const badgeIcon = document.getElementById('badge-icon');
    const badgeName = document.getElementById('badge-name');

    if (score === questions.length) {
        badgeIcon.innerText = "👑"; badgeName.innerText = "Embaixador Digital";
    } else {
        badgeIcon.innerText = "🛡️"; badgeName.innerText = "Navegador Consciente";
    }
}
