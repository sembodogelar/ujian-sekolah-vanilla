// --- 1. DATA: Array of Question Objects ---
const examQuestions = [
    {
        question: "Pada gambar, disajikan berbagai macam gelombang elektromagnetik yang disusun berdasarkan frekuensinya dalam satuan Hz. Warna yang memiliki frekuensi lebih tinggi daripada warna hijau, tetapi lebih rendah daripada warna ungu adalah ….",
        image: "media/frekuensi.png",
        answers: [
            { text: "Biru", correct: true },
            { text: "Jingga", correct: false },
            { text: "Merah", correct: false },
            { text: "Kuning", correct: false }
        ]
    },
    {
        image: "media/mayer.png",
        question: "Suatu hari, Mayer sedang berjalan-jalan mengelilingi beberapa titik. Rute perjalanan Mayer terlihat pada gambar di atas dibawah.Terdapat 5 titik lokasi Mayer singgah, yaitu titik A, B, C, D, dan E.  Untuk mencapai titik-titik tertentu, Mayer menghabiskan energi setara dengan angka yang ditampilkan pada gambar. Sebagai ilustrasi: Mayer ingin mencapai titik B dari titik A. Rute ke B membutuhkan 1 energi. Dari titik B ke titik E membutuhkan 2 energi. Jadi, jika Mayer berjalan dari A ke B, lalu ke E, maka ia menghabiskan total 3 energi. Rute ini bisa ditulis sebagai A-B-E. Saat ini, Mayer berada di titik A dengan berbekal x energi. Jika kemudian Mayer menempuh rute A-B-C-A-D-E, dan yang tersisa adalah 7 energi, total energi Mayer awal mula-mula adalah … energi.  ",
        answers: [
            { text: "78", correct: false },
            { text: "120", correct: false },
            { text: "44", correct: false },
            { text: "32", correct: true } 
        ]
    },
    {
        question: "Mina padi adalah suatu bentuk usaha tani gabungan yang memanfaatkan genangan air sawah yang tengah ditanami padi sebagai kolam untuk budidaya ikan. Oleh karena itu, selain mendapat hasil panen yaitu padi, petani yang menerapkan sistem mina padi juga dapat memanen ikan. Pak Made adalah salah satu petani di Bali yang menerapkan sistem mina padi di sawahnya. Pak Made mengatakan bahwa dengan menerapkan sistem mina padi, pendapatan dari hasil panen beliau meningkat. “Akan tetapi, perawatan padi dan ikan pada sistem mina padi memang gampang-gampang susah”, katanya.<br><br>Benih ikan yang ditebar oleh Pak Made di sawah beliau yang seluas 1,5 ha adalah ikan emas dan ikan nila yang masih berukuran 5 cm sampai dengan 8 cm dengan kepadatan 5.000 ekor/ha. Perbandingan benih ikan emas dengan benih ikan nila yang ditebar oleh Pak Made adalah 3 : 2. Harga bibit ikan nila adalah Rp500,00/ekor dan harga bibit ikan emas adalah dua kali lipatnya. Setiap pagi, Pak Made memberi pakan tambahan berupa dedak halus 250 kg/ha untuk ikan yang ada di sawahnya.<br><br>Setelah tujuh puluh hari, Pak Made memanen ikannya tersebut. Total ikan yang dipanen adalah 6.500 kg/ha. Perbandingan hasil panen ikan emas dan ikan nila sama dengan perbandingan benih ikan ketika ditebar. Harga ikan emas dan ikan nila yang dipanen oleh Pak Made berturut-turut adalah Rp30.000,00/kg dan Rp27.000,00/kg. Sekitar 2 bulan kemudian, Pak Made memanen padinya dengan hasil panen 5,7 ton/ha. Pak Made menjualnya dalam bentuk gabah kering panen (GKP) dengan harga Rp5.000,00/kg.<br><br>Berapa total benih ikan emas...<br><br>Berapa total benih ikan nila...<br><br>Berapa total ikan emas yang dipanen...<br><br>Berapa total ikan nila yang dipanen Pak Made?",
        answers: [
            { text: "4.500 ekor, 3.000 ekor, 5.860 ekor, 4.200 ekor", correct: false },
            { text: "3.200 ekor, 3.100 ekor, 3.240 ekor, 4.200 ekor", correct: false },
            { text: "5.500 ekor, 2.250 ekor, 7.590 ekor, 3.900 ekor", correct: false },
            { text: "4.500 ekor, 3.000 ekor, 5.850 ekor, 3.900 ekor", correct: true } 
        ]
    },
    {
        question: "Pemerintah melalui Badan Pusat Statistik telah merilis data produktivitas padi...<br><br>Tentukan urutan provinsi dari yang memiliki jumlah hasil panen tertinggi hingga terendah!(berurutan paling kiri tertinggi paling kanan terendah",
        image: "media/grafik-sawah.png",
        answers: [
            { text: "1. Sumatera Utara, 2. Jawa Barat, 3. Kalimantan Selatan, 4. Sulawesi Selatan, 5. Papua", correct: true },
            { text: "1. Sumatera Utara, 2. Papua, 3. Kalimantan Selatan, 4. Sulawesi Selatan, 5. Bali", correct: false },
            { text: "1. Sumatera Utara, 2. Kalimantan Selatan, 3. Jawa Barat, 4. Sulawesi Selatan, 5. Papua", correct: false },
            { text: "1. Sumatera Utara, 2. Jawa Barat, 3. Sulawesi Selatan, 4. Kalimantan Barat, 5. Papua", correct: false }
        ]
    },
    // NOTE: This question has multiple correct answers, but the current system only supports selecting one.
    {
        question: "Suatu liga sepak bola telah berlangsung hingga tiap tim memainkan 25 pertandingan...<br><br>Sebanyak 3 poin diperoleh untuk tiap kemenangan. Tiap pertandingan yang berakhir seri mendapatkan 1 poin, sedangkan kalah tidak mendapatkan poin.<br><br>Tim yang tidak ada peluang naik peringkat pada pertandingan berikutnya meski memperoleh kemenangan adalah ….<br><br>Catatan: Jawaban bisa lebih dari satu",
        image: "media/soccer.png",
        answers: [
            { text: "Chelocean", correct: false },
            { text: "Heparpool", correct: false },
            { text: "Lesta City", correct: false },
            { text: "West Hum United", correct: true },
            { text: "Manchasta United", correct: true }
        ]
    },
];

// --- NEW SHUFFLE FUNCTION ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// --- 2. STATE VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;
let timer;

// --- 3. DOM ELEMENT REFERENCES ---
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const imageContainer = document.getElementById('image-container');
const answerOptions = document.getElementById('answer-options');
const nextBtn = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const timerElement = document.getElementById('timer');

// --- 4. CORE FUNCTION ---
function startQuiz () {
    shuffleArray(examQuestions);
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextBtn.classList.add('hide');
    startTimer(300);
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = examQuestions[currentQuestionIndex];

    questionText.innerHTML = (currentQuestionIndex + 1) + ". " + currentQuestion.question;

    if (currentQuestion.image) {
        const img = document.createElement('img');
        img.src = currentQuestion.image;
        img.id = 'question-image';
        imageContainer.appendChild(img);
    }
    
    const shuffledAnswers = [...currentQuestion.answers];
    shuffleArray(shuffledAnswers);

    shuffledAnswers.forEach(answer => {
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
        setStatusClass(button, button.dataset.correct === "true");
        button.disabled = true;
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
    clearInterval(timer);
    questionContainer.classList.add('hide');
    nextBtn.classList.add('hide');
    resultsContainer.classList.remove('hide');
    
    const finalScore = Math.round((score / examQuestions.length) * 100);

    scoreText.innerText = `Skor Akhir Anda: ${finalScore}`;
}

// --- TIMER FUNCTIONS ---
function startTimer(durationInSeconds) {
    // FIXED: Changed variable to 'timeLeft' (camelCase) for consistency.
    let timeLeft = durationInSeconds;

    timer = setInterval(() => {
        if (timeLeft < 0) {
            clearInterval(timer);
            showResults();
            return;
        }

        // FIXED: Using consistent 'timeLeft' variable.
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerElement.innerText = `${minutes}:${seconds}`;

        // FIXED: Using consistent 'timeLeft' variable.
        timeLeft--;
    }, 1000);
}

// --- 5. EVENT LISTENER ---
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

// --- 6. INITIALIZATION ---
startQuiz();
// FIXED: Removed extra closing brace from end of file.