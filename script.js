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
        type: "problem-set",
        image: "",
        context: "Mina padi adalah suatu bentuk usaha tani gabungan yang memanfaatkan genangan air sawah yang tengah ditanami padi sebagai kolam untuk budidaya ikan. Oleh karena itu, selain mendapat hasil panen yaitu padi, petani yang menerapkan sistem mina padi juga dapat memanen ikan. Pak Made adalah salah satu petani di Bali yang menerapkan sistem mina padi di sawahnya. Pak Made mengatakan bahwa dengan menerapkan sistem mina padi, pendapatan dari hasil panen beliau meningkat. “Akan tetapi, perawatan padi dan ikan pada sistem mina padi memang gampang-gampang susah”, katanya.<br><br>Benih ikan yang ditebar oleh Pak Made di sawah beliau yang seluas 1,5 ha adalah ikan emas dan ikan nila yang masih berukuran 5 cm sampai dengan 8 cm dengan kepadatan 5.000 ekor/ha. Perbandingan benih ikan emas dengan benih ikan nila yang ditebar oleh Pak Made adalah 3 : 2. Harga bibit ikan nila adalah Rp500,00/ekor dan harga bibit ikan emas adalah dua kali lipatnya. Setiap pagi, Pak Made memberi pakan tambahan berupa dedak halus 250 kg/ha untuk ikan yang ada di sawahnya.<br><br>Setelah tujuh puluh hari, Pak Made memanen ikannya tersebut. Total ikan yang dipanen adalah 6.500 kg/ha. Perbandingan hasil panen ikan emas dan ikan nila sama dengan perbandingan benih ikan ketika ditebar. Harga ikan emas dan ikan nila yang dipanen oleh Pak Made berturut-turut adalah Rp30.000,00/kg dan Rp27.000,00/kg. Sekitar 2 bulan kemudian, Pak Made memanen padinya dengan hasil panen 5,7 ton/ha. Pak Made menjualnya dalam bentuk gabah kering panen (GKP) dengan harga Rp5.000,00/kg.",
        subQuestions: [
            {
                questionText: "Berapa total benih ikan mas yang ditebar di sawah Pak Made ?",
                type: "multiple-choice",
                answers: [
                    { text: "3.000 ekor", correct: false},
                    { text: "4.500 ekor", correct: true},
                    { text: "5.000 ekor", correct: false}
                ]
            },
            {
                questionText: "Faktor apa saja yang meningkatkan pendapatan Pak Made? (pilih semua yang benar)",
                type: "multiple-answers",
                answers: [
                    { text: "Hasil panen padi", correct: true},
                    { text: "Hasil panen ikan", correct: true},
                    { text: "Biaya pakan tambahan", correct: false}
                ]

            },
            {
                questionText: "Berapa harga total bibit ikan yang ditebar pak Made?",
                type: "multiple-choice",
                answers: [
                    { text: "Rp. 6.000.000", correct: true},
                    { text: "Rp. 5.500.000", correct: false},
                    { text: "Rp. 8.900.000", correct: false}
                ]

            },
            {
                questionText: "Berapa biaya bibit ikan nila dan ikan emas masing-masing?",
                type: "multiple-choice",
                answers: [
                    { text: "Nila Rp.2.500.000 ; Emas Rp.6.500.000", correct: false},
                    { text: "Nila Rp.3.400.000 ; Emas Rp.4.500.000", correct: false},
                    { text: "Nila Rp.1.500.000 ; Emas Rp.4.500.000", correct: true}
                ]

            },
            {
                questionText: "Jika tingkat kelangsungan hidup 80%, berapa ekor ikan emas dan nila yang berhasil di panen?",
                type: "multiple-choice",
                answers: [
                    { text: "Nila 2.400 ekor ; Emas 3.700 ekor", correct: false},
                    { text: "Nila 3.400 ekor ; Emas 3.600 ekor", correct: false},
                    { text: "Nila 2.400 ekor ; Emas 3.600 ekor", correct: true},
                    { text: "Nila 1.400 ekor ; Emas 5.600 ekor", correct: false}
                ]

            },
            {
                questionText: "Berapa total pakan dedak halus yang digunakan selama 70 hari untuk 1,5 ha?",
                type: "multiple-choice",
                answers: [
                    { text: "34.500 kg", correct: false},
                    { text: "26.250 kg", correct: true},
                    { text: "45.700 kg", correct: false},
                    { text: "38.000 kg", correct: false}
                ]

            },
            {
                questionText: "Jika harga dedak Rp.2.000/kg, berapa biaya total untuk pakan tambahan?",
                type: "multiple-choice",
                answers: [
                    { text: "Rp.54.300.000", correct: false},
                    { text: "Rp.42.500.000", correct: false},
                    { text: "Rp.31.200.000", correct: false},
                    { text: "Rp.52.500.000", correct: true}
                ]

            },
            {
                questionText: "Berapa kilogram ikan emas dan ikan nila yang dipanen per hektar?",
                type: "multiple-choice",
                answers: [
                    { text: "2.900 kg/ha", correct: false},
                    { text: "2.600 kg/ha", correct: true},
                    { text: "4.300 kg/ha", correct: false},
                    { text: "5.600 kg/ha", correct: false}
                ]

            },
            {
                questionText: "Berapa kilogram ikan emas dan ikan nila yang dipanen dari 1,5 ha?",
                type: "multiple-choice",
                answers: [
                    { text: "Emas 4.550 kg; Nila 2.900", correct: false},
                    { text: "Emas 3.740 kg; Nila 2.900", correct: false},
                    { text: "Emas 5.850 kg; Nila 3.900", correct: true},
                    { text: "Emas 5.850 kg; Nila 3.800", correct: false}
                ]

            },
            {
                questionText: "Berapa pendapatan dari penjualan ikan emas dan nila masing-masing?",
                type: "multiple-choice",
                answers: [
                    { text: "Emas Rp.134.500.000; Nila Rp97.300.000", correct: false},
                    { text: "Emas Rp.180.700.000; Nila Rp105.300.000", correct: false},
                    { text: "Emas Rp.174.300.000; Nila Rp106.500.000", correct: false},
                    { text: "Emas Rp.175.500.000; Nila Rp105.300.000", correct: true}
                ]

            },
            {
                questionText: "Berapa total produksi padi (kg) dari 1,5 ha?",
                type: "multiple-choice",
                answers: [
                    { text: "8.750 kg", correct: false},
                    { text: "8.550 kg", correct: true},
                    { text: "8.520 kg", correct: false},
                    { text: "8.250 kg", correct: false}
                ]

            },
            {
                questionText: "Berapa total pendapatan dari penjualan padi?",
                type: "multiple-choice",
                answers: [
                    { text: "Rp 41.550.000", correct: false},
                    { text: "Rp 55.700.000", correct: false},
                    { text: "Rp 42.750.000", correct: true},
                    { text: "Rp 47.250.000", correct: false}
                ]

            },
            {
                questionText: "Berapa total pendapatan Pak Made dari padi + ikan?",
                type: "multiple-choice",
                answers: [
                    { text: "Rp 323.550.000", correct: true},
                    { text: "Rp 253.000.000", correct: false},
                    { text: "Rp 525.700.000", correct: false},
                    { text: "Rp 363.850.000", correct: false}
                ]

            },
            {
                questionText: "Jika biaya bibit dan pakan dikurangi dari pendapatan, berapa keuntungan bersih (sederhana)?",
                type: "multiple-choice",
                answers: [
                    { text: "Rp 278.200.000", correct: false},
                    { text: "Rp 355.420.000", correct: false},
                    { text: "Rp 265.050.000", correct: true},
                    { text: "Rp 532.050.000", correct: false}
                ]

            },
            {
                questionText: "Apakah harga jual per kg emas lebih menguntungkan dibanding nila?",
                type: "multiple-choice",
                answers: [
                    { text: "Ya", correct: true},
                    { text: "Tidak", correct: false}
                ]

            },
            {
                questionText: "Berapa persen kontribusi pendapatan ikan dibandingkan pendapatan total (ikan + padi)?",
                type: "multiple-choice",
                answers: [
                    { text: "Ikan 90,3% ; Padi 18,67%", correct: false},
                    { text: "Ikan 86,79% ; Padi 13,21%", correct: true},
                    { text: "Ikan 53% ; Padi 19,32%", correct: false},
                   
                ]

            }
           
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
        type: "multiple-answer",
        answers: [
            { text: "Chelocean", correct: false },
            { text: "Heparpool", correct: false },
            { text: "Lesta City", correct: false },
            { text: "West Hum United", correct: true },
            { text: "Manchasta United", correct: true }
        ]
    },
];

// --- SHUFFLE FUNCTION ---
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
const startContainer = document.getElementById('start-container');
const startBtn = document.getElementById('start-btn');
const quizContainer = document.querySelector('.quiz-container');
const progressIndicator = document.getElementById('progress-indicator');
const questionText = document.getElementById('question-text');
const imageContainer = document.getElementById('image-container');
const answerOptions = document.getElementById('answer-options');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const timerElement = document.getElementById('timer');

// --- 4. CORE FUNCTIONS ---
function startQuiz () {
    startContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    resultsContainer.classList.add('hide');
    
    shuffleArray(examQuestions);
    currentQuestionIndex = 0;
    score = 0;
    
    startTimer(1800);
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = examQuestions[currentQuestionIndex];
    progressIndicator.innerText = `Soal ${currentQuestionIndex + 1} dari ${examQuestions.length}`;

    if (currentQuestion.type === 'problem-set') {
        questionText.innerHTML = currentQuestion.context;
        if (currentQuestion.image) {
            const img = document.createElement('img');
            img.src = currentQuestion.image;
            img.id = 'question-image';
            imageContainer.appendChild(img);
        }
        
        currentQuestion.subQuestions.forEach((subQ, subIndex) => {
            const subQuestionContainer = document.createElement('div');
            subQuestionContainer.classList.add('sub-question-container');
            
            const subQuestionText = document.createElement('p');
            subQuestionText.innerHTML = `<b>${subIndex + 1}.</b> ${subQ.questionText}`;
            subQuestionContainer.appendChild(subQuestionText);

            const shuffledSubAnswers = [...subQ.answers];
            shuffleArray(shuffledSubAnswers);
            
            shuffledSubAnswers.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer.text;
                button.classList.add('answer-btn');
                button.dataset.subIndex = subIndex;
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener('click', toggleAnswerSelect);
                subQuestionContainer.appendChild(button);
            });
            answerOptions.appendChild(subQuestionContainer);
        });
        
        submitBtn.classList.remove('hide');

    } else {
        questionText.innerHTML = currentQuestion.question;
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
            
            if (currentQuestion.type === 'multiple-answer') {
                button.addEventListener('click', toggleAnswerSelect);
            } else {
                button.addEventListener('click', selectAnswer);
            }
            
            answerOptions.appendChild(button);
        });

        if (currentQuestion.type === 'multiple-answer') {
            submitBtn.classList.remove('hide');
        }
    }
}

function resetState() {
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
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

function toggleAnswerSelect(e) {
    e.target.classList.toggle('selected');
}

function checkMultipleAnswers() {
    const currentQuestion = examQuestions[currentQuestionIndex];
    
    if (currentQuestion.type === 'problem-set') {
        checkProblemSet();
    } else {
        const totalCorrectAnswers = currentQuestion.answers.filter(answer => answer.correct).length;
        const selectedButtons = document.querySelectorAll('.answer-btn.selected');
        let correctSelections = 0;
        let isCorrectSubmission = true;

        selectedButtons.forEach(button => {
            if (button.dataset.correct === "true") {
                correctSelections++;
            } else {
                isCorrectSubmission = false;
            }
        });

        if (isCorrectSubmission && correctSelections === totalCorrectAnswers) {
            score++;
        }
    }
    
    Array.from(answerOptions.querySelectorAll('.answer-btn')).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
        button.disabled = true;
    });

    submitBtn.classList.add('hide');
    
    if (examQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        showResults();
    }
}

function checkProblemSet() {
    const currentQuestion = examQuestions[currentQuestionIndex];
    let problemSetScore = 0;

    currentQuestion.subQuestions.forEach((subQ, subIndex) => {
        const totalCorrectSubAnswers = subQ.answers.filter(answer => answer.correct).length;
        const selectedSubButtons = document.querySelectorAll(`.answer-btn.selected[data-sub-index="${subIndex}"]`);
        
        let correctSubSelections = 0;
        let isCorrectSubSubmission = true;

        selectedSubButtons.forEach(button => {
            if (button.dataset.correct === "true") {
                correctSubSelections++;
            } else {
                isCorrectSubSubmission = false;
            }
        });
        
        if (isCorrectSubSubmission && correctSubSelections === totalCorrectSubAnswers) {
            problemSetScore++;
        }
    });
    
    if (problemSetScore === currentQuestion.subQuestions.length) {
        score++;
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
    quizContainer.classList.add('hide');
    resultsContainer.classList.remove('hide');
    
    const finalScore = Math.round((score / examQuestions.length) * 100);
    scoreText.innerText = `Skor Akhir Anda: ${finalScore}`;
}

function startTimer(durationInSeconds) {
    let timeLeft = durationInSeconds;
    timer = setInterval(() => {
        if (timeLeft < 0) {
            clearInterval(timer);
            showResults();
            return;
        }
        
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerElement.innerText = `${minutes}:${seconds}`;
        
        timeLeft--;
    }, 1000);
}

// --- 5. EVENT LISTENERS ---
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});
submitBtn.addEventListener('click', checkMultipleAnswers);