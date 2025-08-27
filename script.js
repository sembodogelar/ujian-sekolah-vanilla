// --- 1. DATA: Array of Question Objects ---
const examQuestions = [
    {
        question: "Presiden pertama Republik Indonesia adalah...",
        answers: [
            { text: "B.J. Habibie", correct: false },
            { text: "Soeharto", correct: false },
            { text: "Soekarno", correct: true },
            { text: "Jokowi", correct: false }
        ]
    },
    {
        question: "Pulau yang ditandai dengan warna merah adalah pulau ?",
        image: "media/petaindo.png",
        answers: [
            { text: "Sumatera", correct: false },
            { text: "Kalimantan", correct: false },
            { text: "Sulawesi", correct: false },
            { text: "Jawa", correct: true } 
        ]
    }



]

// --- 2. STATE VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;

// --- 3. DOM ELEMENT REFERENCES ---
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const imageContainer = document.getElementById('image-container');
const answerOptions = document.getElementById('answer-options');
const nextBtn = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');

// --- 4. CORE FUNCTION ---
function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextBtn.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState()
    const currentQuestion = examQuestions[currentQuestionIndex];

    questionText.innerText = (currentQuestionIndex + 1) + ". " + currentQuestion.question;

    if (currentQuestion.image) {
        const img = document.createElement('img');
        img.src = currentQuestion.image;
        img.id = 'question-image';
        imageContainer.appendChild(img);
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerOptions.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hide');
    imageContainer.innerHTML = '';
    while (answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if (isCorrect) {
        score++;
    }

    Array.from(answerOptions.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true")
        button.disabled = true; // Disable all buttons after selection
    });

    if (examQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        showResults();
    }
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function showResults() {
    questionContainer.classList.add('hide');
    nextBtn.classList.add('hide');
    resultsContainer.classList.remove('hide');
    
    // 1. Calculate the precentage score.
    const finalScore = Math.round((score / examQuestions.length) * 100);

    // 2. Display the final score out of 100.
    scoreText.innerText = `Skor Akhir Anda: ${finalScore}`;
}

// --- 5. EVENT LISTENER ---
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

// --- 6. INITIALIZATION ---
startQuiz();