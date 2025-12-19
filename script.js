// Ustoz-shogird Tizimi - JavaScript

// Fanlar va test savollar
const subjects = {
    matematik: {
        name: "Matematika",
        description: "Algebra, geometriya va analiz",
        questions: [
            {
                question: "2x + 5 = 11 tenglamaning yechimi qanday?",
                options: ["x = 2", "x = 3", "x = 4", "x = 5"],
                correct: 1
            },
            {
                question: "Uchburchakning ichki burchaklari yig'indisi necha gradus?",
                options: ["90°", "180°", "270°", "360°"],
                correct: 1
            },
            {
                question: "√16 ning qiymati necha?",
                options: ["2", "3", "4", "8"],
                correct: 2
            },
            {
                question: "5! (5 faktorial) ning qiymati necha?",
                options: ["20", "60", "120", "240"],
                correct: 2
            },
            {
                question: "Doiraning yuzi formulasi qanday?",
                options: ["πr", "2πr", "πr²", "πd"],
                correct: 2
            }
        ]
    },
    fizika: {
        name: "Fizika",
        description: "Mexanika, elektr va optika",
        questions: [
            {
                question: "Yorug'likning vakuumdagi tezligi qancha?",
                options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                correct: 0
            },
            {
                question: "Nyutonning birinchi qonuni nima deb ataladi?",
                options: ["Inertsiya qonuni", "Harakat qonuni", "Ta'sir-aks ta'sir qonuni", "Tortishish qonuni"],
                correct: 0
            },
            {
                question: "Elektr toki birligi nima?",
                options: ["Volt", "Amper", "Om", "Vatt"],
                correct: 1
            },
            {
                question: "Atmosfera bosimi normal sharoitda necha Pa ga teng?",
                options: ["101325 Pa", "100000 Pa", "102000 Pa", "99000 Pa"],
                correct: 0
            },
            {
                question: "Tovushning havodagi tezligi taxminan necha m/s?",
                options: ["300 m/s", "330 m/s", "360 m/s", "400 m/s"],
                correct: 1
            }
        ]
    },
    kimyo: {
        name: "Kimyо",
        description: "Organik va noorganik kimyo",
        questions: [
            {
                question: "Suvning kimyoviy formulasi qanday?",
                options: ["HO", "H₂O", "H₃O", "HO₂"],
                correct: 1
            },
            {
                question: "Davriy jadvalda necha ta element mavjud?",
                options: ["116", "117", "118", "119"],
                correct: 2
            },
            {
                question: "Karbon atomining elektron konfiguratsiyasi qanday?",
                options: ["1s² 2s² 2p²", "1s² 2s² 2p¹", "1s² 2s¹ 2p³", "1s² 2s³"],
                correct: 0
            },
            {
                question: "Kislorodning atom massasi necha?",
                options: ["14", "15", "16", "17"],
                correct: 2
            },
            {
                question: "pH shkalasida neytral muhit qanday qiymatga ega?",
                options: ["6", "7", "8", "9"],
                correct: 1
            }
        ]
    },
    biologiya: {
        name: "Biologiya",
        description: "Botanika, zoologiya va genetika",
        questions: [
            {
                question: "Fotosintez jarayoni qayerda sodir bo'ladi?",
                options: ["Mitoxondriyada", "Xloroplastda", "Yadroda", "Ribosomada"],
                correct: 1
            },
            {
                question: "Insondagi qovurg'a juftlari soni necha?",
                options: ["10", "11", "12", "13"],
                correct: 2
            },
            {
                question: "DNK ning to'liq nomi nima?",
                options: ["Dezoksiribonuklein kislota", "Ribonuklein kislota", "Amino kislota", "Karbon kislota"],
                correct: 0
            },
            {
                question: "Yurak necha kameradan iborat?",
                options: ["2", "3", "4", "5"],
                correct: 2
            },
            {
                question: "Fotosintez natijasida qanday gaz ajraladi?",
                options: ["Karbon dioksid", "Kislorod", "Azot", "Vodorod"],
                correct: 1
            }
        ]
    },
    tarix: {
        name: "Tarix",
        description: "O'zbekiston va jahon tarixi",
        questions: [
            {
                question: "O'zbekiston mustaqillik e'lon qilgan sana?",
                options: ["31 avgust 1991", "1 sentyabr 1991", "8 dekabr 1991", "25 dekabr 1991"],
                correct: 0
            },
            {
                question: "Amir Temur qachon tug'ilgan?",
                options: ["1336", "1340", "1350", "1360"],
                correct: 0
            },
            {
                question: "Samarqand qachon qurilgan?",
                options: ["Mil. av. VII asr", "Mil. av. VI asr", "Mil. av. V asr", "Mil. av. IV asr"],
                correct: 0
            },
            {
                question: "Birinchi jahon urushi qachon boshlangan?",
                options: ["1914", "1915", "1916", "1917"],
                correct: 0
            },
            {
                question: "Sovet Ittifoqi qachon parchalangan?",
                options: ["1989", "1990", "1991", "1992"],
                correct: 2
            }
        ]
    },
    adabiyot: {
        name: "Adabiyot",
        description: "O'zbek va jahon adabiyoti",
        questions: [
            {
                question: "\"Xamsa\" asarining muallifi kim?",
                options: ["Alisher Navoiy", "Nizomiy", "Bobur", "Jomiy"],
                correct: 0
            },
            {
                question: "\"Urush va tinchlik\" romanining muallifi kim?",
                options: ["Dostoevskiy", "Tolstoy", "Turgenev", "Chekhov"],
                correct: 1
            },
            {
                question: "\"O'tkan kunlar\" romanining muallifi kim?",
                options: ["Abdulla Qodiriy", "Cho'lpon", "Fitrat", "Hamza"],
                correct: 0
            },
            {
                question: "Alisher Navoiy necha yoshida vafot etgan?",
                options: ["59", "60", "61", "62"],
                correct: 1
            },
            {
                question: "\"Xamriya\" g'azalining muallifi kim?",
                options: ["Hofiz Sherozi", "Omar Xayyom", "Navoiy", "Boqi"],
                correct: 1
            }
        ]
    },
    informatika: {
        name: "Informatika",
        description: "Dasturlash va kompyuter texnologiyalari",
        questions: [
            {
                question: "HTML ning to'liq nomi nima?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
                correct: 0
            },
            {
                question: "1 bayt necha bitdan iborat?",
                options: ["4 bit", "6 bit", "8 bit", "10 bit"],
                correct: 2
            },
            {
                question: "Qaysi dasturlash tili web-sahifa yaratish uchun ishlatiladi?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correct: 2
            },
            {
                question: "CPU ning vazifasi nima?",
                options: ["Ma'lumot saqlash", "Ma'lumotni qayta ishlash", "Internet ulanishi", "Ovozni chiqarish"],
                correct: 1
            },
            {
                question: "Qaysi protokol internet sahifalarini yuklash uchun ishlatiladi?",
                options: ["FTP", "SMTP", "HTTP", "POP3"],
                correct: 2
            }
        ]
    },
    ingliz_tili: {
        name: "Ingliz tili",
        description: "Grammatika va lug'at bilimlari",
        questions: [
            {
                question: "\"I ___ to school every day\" gapida qaysi fe'l to'g'ri?",
                options: ["go", "goes", "going", "went"],
                correct: 0
            },
            {
                question: "\"Beautiful\" so'zining antonimi qaysi?",
                options: ["Pretty", "Ugly", "Nice", "Good"],
                correct: 1
            },
            {
                question: "\"She ___ reading a book now\" gapida qaysi fe'l to'g'ri?",
                options: ["are", "is", "am", "were"],
                correct: 1
            },
            {
                question: "\"How many\" bilan qaysi so'z ishlatiladi?",
                options: ["Sanalmaydigan otlar", "Sanaladigan otlar", "Fe'llar", "Sifatlar"],
                correct: 1
            },
            {
                question: "\"If I ___ rich, I would travel the world\" gapida qaysi fe'l to'g'ri?",
                options: ["am", "was", "were", "will be"],
                correct: 2
            }
        ]
    }
};

// O'zgaruvchilar
let currentSubject = null;
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let testStarted = false;
let currentUser = null;
let selectedSubjects = [];
let currentRole = null;

// User management
const users = JSON.parse(localStorage.getItem('attestation_users')) || {};
const userResults = JSON.parse(localStorage.getItem('attestation_results')) || {};
const portfolios = JSON.parse(localStorage.getItem('attestation_portfolios')) || {};
const studentTeacherRelations = JSON.parse(localStorage.getItem('attestation_relations')) || {};
const userFiles = JSON.parse(localStorage.getItem('attestation_files')) || {};
const userArticles = JSON.parse(localStorage.getItem('attestation_articles')) || {};
const userPosts = JSON.parse(localStorage.getItem('attestation_posts')) || {};
const fileLikes = JSON.parse(localStorage.getItem('attestation_file_likes')) || {};
const fileComments = JSON.parse(localStorage.getItem('attestation_file_comments')) || {};

// DOM elementlar
const homeSection = document.getElementById('home-section');
const ratingsSection = document.getElementById('ratings-section');
const myPageSection = document.getElementById('my-page-section');
const filesDatabaseSection = document.getElementById('files-database-section');

let activeMainView = 'home';
let returnAfterTeacherView = 'ratings';

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', function() {
    checkUserSession();
    loadMentorSubjects();
    setupFileUpload();
    showHome();
});

function setMainView(view) {
    activeMainView = view;
    if (homeSection) homeSection.style.display = view === 'home' ? 'block' : 'none';
    if (ratingsSection) ratingsSection.style.display = view === 'ratings' ? 'block' : 'none';
    if (myPageSection) myPageSection.style.display = view === 'my-page' ? 'block' : 'none';
    if (filesDatabaseSection) filesDatabaseSection.style.display = view === 'files-database' ? 'block' : 'none';
}

function showHome() {
    setMainView('home');
}

function showRatings() {
    setMainView('ratings');
    renderRatings();
}

function showFilesDatabase() {
    setMainView('files-database');
    renderFilesDatabase();
}

function showMyPage() {
    if (!currentUser) {
        alert('Avval tizimga kiring!');
        openModal('login');
        return;
    }

    setMainView('my-page');
    openMyPage();
}

function openMyPage() {
    currentRole = 'mentor';
    viewingUsername = currentUser.username;

    // Subject grid doim bo'lsin
    loadMentorSubjects();

    const mentorData = (portfolios[currentUser.username] && portfolios[currentUser.username].mentor) || null;
    const mentorSubjectsSection = document.getElementById('mentor-subjects-section');
    const portfolioSection = document.getElementById('portfolio-section');
    const portfolioViewSection = document.getElementById('portfolio-view-section');

    if (mentorData) {
        selectedSubjects = Array.isArray(mentorData.subjects) ? [...mentorData.subjects] : [];
        syncMentorSubjectCheckboxes();

        if (mentorSubjectsSection) mentorSubjectsSection.style.display = 'none';
        if (portfolioSection) portfolioSection.style.display = 'none';
        if (portfolioViewSection) portfolioViewSection.style.display = 'block';
        loadPortfolioDisplay();
    } else {
        selectedSubjects = [];
        syncMentorSubjectCheckboxes();

        if (mentorSubjectsSection) mentorSubjectsSection.style.display = 'block';
        if (portfolioSection) portfolioSection.style.display = 'none';
        if (portfolioViewSection) portfolioViewSection.style.display = 'none';
    }
}

function goBackToMyPage() {
    if (!currentUser) {
        showHome();
        return;
    }

    currentRole = 'mentor';
    viewingUsername = currentUser.username;

    const mentorData = (portfolios[currentUser.username] && portfolios[currentUser.username].mentor) || null;
    const mentorSubjectsSection = document.getElementById('mentor-subjects-section');
    const portfolioSection = document.getElementById('portfolio-section');
    const portfolioViewSection = document.getElementById('portfolio-view-section');

    if (mentorData) {
        if (mentorSubjectsSection) mentorSubjectsSection.style.display = 'none';
        if (portfolioSection) portfolioSection.style.display = 'none';
        if (portfolioViewSection) portfolioViewSection.style.display = 'block';
        loadPortfolioDisplay();
    } else {
        if (mentorSubjectsSection) mentorSubjectsSection.style.display = 'block';
        if (portfolioSection) portfolioSection.style.display = 'none';
        if (portfolioViewSection) portfolioViewSection.style.display = 'none';
    }
}

function syncMentorSubjectCheckboxes() {
    Object.keys(subjects).forEach(subjectKey => {
        const checkbox = document.getElementById(`mentor-${subjectKey}`);
        if (checkbox) checkbox.checked = selectedSubjects.includes(subjectKey);
    });

    const continueBtn = document.getElementById('continue-btn');
    if (continueBtn) continueBtn.disabled = selectedSubjects.length === 0;
}

// Fanlarni yuklash
function loadSubjects() {
    subjectsGrid.innerHTML = '';
    
    Object.keys(subjects).forEach(subjectKey => {
        const subject = subjects[subjectKey];
        const subjectCard = document.createElement('button');
        subjectCard.className = 'subject-card';
        subjectCard.innerHTML = `
            <h3>📚 ${subject.name}</h3>
            <p>${subject.description}</p>
            <p><strong>${subject.questions.length} ta savol</strong></p>
        `;
        
        subjectCard.addEventListener('click', () => startTest(subjectKey));
        subjectsGrid.appendChild(subjectCard);
    });
}

// Test HTML qismini yaratish
function createTestSection() {
    const main = document.querySelector('main');
    
    const testSection = document.createElement('section');
    testSection.className = 'test-section';
    testSection.innerHTML = `
        <div class="test-header">
            <div class="test-info">
                <div class="test-counter">Savol: <span id="question-counter">1</span>/<span id="total-questions">5</span></div>
                <div class="test-score">To'g'ri: <span id="current-score">0</span></div>
            </div>
            <button class="back-button" onclick="goBack()">⬅ Orqaga</button>
        </div>
        
        <div class="question">
            <h3 id="question-text"></h3>
            <div class="answers" id="answers-container"></div>
        </div>
        
        <div class="test-navigation">
            <button class="nav-button" id="prev-button" onclick="previousQuestion()" disabled>⬅ Oldingi</button>
            <button class="nav-button" id="next-button" onclick="nextQuestion()" disabled>Keyingi ➡</button>
        </div>
        
        <div class="results" id="results-section">
            <h2>Test yakunlandi!</h2>
            <div class="score-display" id="final-score"></div>
            <p id="score-message"></p>
            <div class="results-actions">
                <button class="nav-button" onclick="restartTest()">🔄 Qayta boshlash</button>
                <button class="nav-button" onclick="goBack()">📚 Fanlar ro'yxati</button>
            </div>
        </div>
    `;
    
    main.appendChild(testSection);
}

// Testni boshlash
function startTest(subjectKey) {
    // Foydalanuvchi kirganligini tekshirish
    if (!currentUser) {
        alert('Test ishlash uchun avval tizimga kiring!');
        openModal('login');
        return;
    }

    currentSubject = subjectKey;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    testStarted = true;
    
    // Bo'limlarni yashirish/ko'rsatish
    welcomeSection.style.display = 'none';
    subjectsSection.style.display = 'none';
    document.querySelector('.test-section').style.display = 'block';
    
    // Test ma'lumotlarini yangilash
    document.getElementById('total-questions').textContent = subjects[currentSubject].questions.length;
    
    // Birinchi savolni yuklash
    loadQuestion();
}

// Savolni yuklash
function loadQuestion() {
    const question = subjects[currentSubject].questions[currentQuestionIndex];
    const questionCounter = document.getElementById('question-counter');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    // Savol raqamini yangilash
    questionCounter.textContent = currentQuestionIndex + 1;
    
    // Savolni ko'rsatish
    questionText.textContent = question.question;
    
    // Javoblarni tozalash va yangilarini qo'shish
    answersContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.textContent = option;
        answerDiv.addEventListener('click', () => selectAnswer(index));
        
        // Oldin tanlangan javobni belgilash
        if (userAnswers[currentQuestionIndex] === index) {
            answerDiv.classList.add('selected');
        }
        
        answersContainer.appendChild(answerDiv);
    });
    
    // Navigatsiya tugmalarini yangilash
    prevButton.disabled = currentQuestionIndex === 0;
    
    // Keyingi tugma holatini tekshirish
    if (currentQuestionIndex === subjects[currentSubject].questions.length - 1) {
        nextButton.textContent = 'Yakunlash ✅';
        nextButton.disabled = userAnswers[currentQuestionIndex] === undefined;
    } else {
        nextButton.textContent = 'Keyingi ➡';
        nextButton.disabled = userAnswers[currentQuestionIndex] === undefined;
    }
}

// Javobni tanlash
function selectAnswer(answerIndex) {
    const answersContainer = document.getElementById('answers-container');
    const answerOptions = answersContainer.querySelectorAll('.answer-option');
    
    // Barcha javoblardan tanlangan klassni olib tashlash
    answerOptions.forEach(option => {
        option.classList.remove('selected');
    });
    
    // Tanlangan javobni belgilash
    answerOptions[answerIndex].classList.add('selected');
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Keyingi tugmani yoqish
    document.getElementById('next-button').disabled = false;
    
    // Ballarni yangilash
    updateScore();
}

// Ballarni yangilash
function updateScore() {
    let currentScore = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === subjects[currentSubject].questions[index].correct) {
            currentScore++;
        }
    });
    
    score = currentScore;
    document.getElementById('current-score').textContent = score;
}

// Keyingi savol
function nextQuestion() {
    if (currentQuestionIndex === subjects[currentSubject].questions.length - 1) {
        // Test tugadi
        showResults();
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Oldingi savol
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Natijalarni ko'rsatish
function showResults() {
    updateScore();
    
    // Natijani saqlash
    saveTestResult();
    
    const resultsSection = document.getElementById('results-section');
    const finalScore = document.getElementById('final-score');
    const scoreMessage = document.getElementById('score-message');
    
    const totalQuestions = subjects[currentSubject].questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    finalScore.textContent = `${score}/${totalQuestions} (${percentage}%)`;
    
    // Ball bo'yicha rang va xabar
    if (percentage >= 80) {
        finalScore.className = 'score-display score-excellent';
        scoreMessage.textContent = 'Ajoyib! Siz ustozlik darajasiga tayyor ekansiz! 🎉';
    } else if (percentage >= 60) {
        finalScore.className = 'score-display score-good';
        scoreMessage.textContent = 'Yaxshi natija! Yana biroz mashq qilsangiz zo\'r bo\'ladi. 👍';
    } else {
        finalScore.className = 'score-display score-poor';
        scoreMessage.textContent = 'Ko\'proq o\'rganish kerak. Qayta urinib ko\'ring! 📚';
    }
    
    // Natijalarni ko'rsatish
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.test-navigation').style.display = 'none';
    resultsSection.style.display = 'block';
}

// Testni qayta boshlash
function restartTest() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Elementlarni ko'rsatish
    document.querySelector('.question').style.display = 'block';
    document.querySelector('.test-navigation').style.display = 'flex';
    document.getElementById('results-section').style.display = 'none';
    
    // Birinchi savolni yuklash
    loadQuestion();
}

// Orqaga qaytish
function goBack() {
    currentSubject = null;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    testStarted = false;
    
    // Bo'limlarni ko'rsatish/yashirish
    welcomeSection.style.display = 'block';
    subjectsSection.style.display = 'block';
    document.querySelector('.test-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'none';
}

// Klaviatura tugmalari uchun
document.addEventListener('keydown', function(e) {
    if (!testStarted) return;
    
    // 1-4 raqamlar bilan javob tanlash
    if (e.key >= '1' && e.key <= '4') {
        const answerIndex = parseInt(e.key) - 1;
        const answers = document.querySelectorAll('.answer-option');
        if (answers[answerIndex]) {
            selectAnswer(answerIndex);
        }
    }
    
    // Enter bilan keyingi savol
    if (e.key === 'Enter') {
        const nextButton = document.getElementById('next-button');
        if (!nextButton.disabled) {
            nextQuestion();
        }
    }
    
    // Escape bilan orqaga
    if (e.key === 'Escape') {
        goBack();
    }
});

// Animatsiyalarni qo'shish
function addFadeInAnimation(element) {
    element.classList.add('fade-in');
}

// ===== USER MANAGEMENT FUNCTIONS =====

// User session tekshirish
function checkUserSession() {
    const savedUser = localStorage.getItem('current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserInterface();
    }
}

// User interfeys yangilash
function updateUserInterface() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const userInfo = document.getElementById('user-info');
    const usernameDisplay = document.getElementById('username-display');

    if (currentUser) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        userInfo.style.display = 'flex';
        const points = currentUser.points || 0;
        usernameDisplay.textContent = `${currentUser.fullname || currentUser.username} (⭐ ${points} ball)`;
    } else {
        loginBtn.style.display = 'inline-block';
        registerBtn.style.display = 'inline-block';
        userInfo.style.display = 'none';
    }
}

// Modal oynalarni boshqarish
function openModal(modalType) {
    const modal = document.getElementById(modalType + '-modal');
    if (modal) {
        modal.style.display = 'block';
        clearFormAlerts();
    }
}

function closeModal(modalType) {
    const modal = document.getElementById(modalType + '-modal');
    if (modal) {
        modal.style.display = 'none';
        clearForms();
        
        // Agar file detail modal yopilsa, fayllar bazasini yangilash
        if (modalType === 'file-detail' && activeMainView === 'files-database') {
            renderFilesDatabase();
        }
    }
}

function switchModal(targetModal) {
    closeModal(targetModal === 'login' ? 'register' : 'login');
    openModal(targetModal);
}

// Formlarni tozalash
function clearForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (loginForm) loginForm.reset();
    if (registerForm) registerForm.reset();
    clearFormAlerts();
}

// Alert xabarlarini tozalash
function clearFormAlerts() {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => alert.remove());
}

// Modal oynani tashqariga bosganida yopish
window.addEventListener('click', function(event) {
    if (!event.target || !(event.target instanceof HTMLElement)) return;

    // Results modal
    if (event.target.id === 'results-modal') {
        closeResultsModal();
        return;
    }

    // Login/Register modal
    if (event.target.id === 'login-modal') {
        closeModal('login');
        return;
    }
    if (event.target.id === 'register-modal') {
        closeModal('register');
        return;
    }
    if (event.target.id === 'create-file-modal') {
        closeModal('create-file');
        return;
    }
    if (event.target.id === 'article-modal') {
        closeModal('article');
        return;
    }
    if (event.target.id === 'post-modal') {
        closeModal('post');
        return;
    }
    if (event.target.id === 'file-detail-modal') {
        closeModal('file-detail');
        return;
    }

    // Any other modal backdrop
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        clearForms();
    }
});

// Alert ko'rsatish
function showAlert(form, message, type) {
    clearFormAlerts();
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    form.insertBefore(alert, form.firstChild);
}

// Ro'yxatdan o'tish
function registerUser(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const userData = {
        fullname: formData.get('fullname').trim(),
        username: formData.get('username').trim().toLowerCase(),
        email: formData.get('email').trim().toLowerCase(),
        password: formData.get('password'),
        confirmPassword: formData.get('confirm-password'),
        registeredAt: new Date().toISOString()
    };

    // Validatsiya
    if (!validateRegistration(userData, form)) {
        return false;
    }

    // Foydalanuvchini saqlash
    users[userData.username] = {
        fullname: userData.fullname,
        email: userData.email,
        password: userData.password, // Real loyihada hash qilish kerak
        registeredAt: userData.registeredAt,
        points: 0,
        students: [],
        teachers: []
    };

    localStorage.setItem('attestation_users', JSON.stringify(users));
    
    showAlert(form, 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz! Endi kirish mumkin.', 'success');
    
    setTimeout(() => {
        switchModal('login');
    }, 1500);

    return false;
}

// Ro'yxatdan o'tish validatsiyasi
function validateRegistration(userData, form) {
    // Bo'sh maydonlar tekshirish
    if (!userData.fullname || !userData.username || !userData.email || !userData.password) {
        showAlert(form, 'Barcha maydonlarni to\'ldiring!', 'error');
        return false;
    }

    // Username uzunligi
    if (userData.username.length < 3) {
        showAlert(form, 'Foydalanuvchi nomi kamida 3 ta belgidan iborat bo\'lishi kerak!', 'error');
        return false;
    }

    // Email validatsiya
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
        showAlert(form, 'Email manzilini to\'g\'ri kiriting!', 'error');
        return false;
    }

    // Parol uzunligi
    if (userData.password.length < 6) {
        showAlert(form, 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak!', 'error');
        return false;
    }

    // Parol tasdiqlash
    if (userData.password !== userData.confirmPassword) {
        showAlert(form, 'Parollar mos kelmaydi!', 'error');
        return false;
    }

    // Mavjud username tekshirish
    if (users[userData.username]) {
        showAlert(form, 'Bu foydalanuvchi nomi allaqachon mavjud!', 'error');
        return false;
    }

    // Mavjud email tekshirish
    const existingEmail = Object.values(users).find(user => user.email === userData.email);
    if (existingEmail) {
        showAlert(form, 'Bu email allaqachon ro\'yxatdan o\'tgan!', 'error');
        return false;
    }

    return true;
}

// Kirish
function loginUser(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const username = formData.get('username').trim().toLowerCase();
    const password = formData.get('password');

    // Validatsiya
    if (!username || !password) {
        showAlert(form, 'Foydalanuvchi nomi va parolni kiriting!', 'error');
        return false;
    }

    // User mavjudligini tekshirish
    const user = users[username];
    if (!user) {
        showAlert(form, 'Foydalanuvchi topilmadi!', 'error');
        return false;
    }

    // Parol tekshirish
    if (user.password !== password) {
        showAlert(form, 'Noto\'g\'ri parol!', 'error');
        return false;
    }

    // Muvaffaqiyatli kirish
    currentUser = {
        username: username,
        fullname: user.fullname,
        email: user.email,
        points: user.points || 0,
        students: user.students || [],
        teachers: user.teachers || []
    };

    localStorage.setItem('current_user', JSON.stringify(currentUser));
    updateUserInterface();
    
    showAlert(form, 'Muvaffaqiyatli kirdingiz!', 'success');
    
    setTimeout(() => {
        closeModal('login');
    }, 1000);

    return false;
}

// Chiqish
function logout() {
    currentUser = null;
    localStorage.removeItem('current_user');
    updateUserInterface();
    
    // Agar test davom etayotgan bo'lsa, to'xtatish
    if (testStarted) {
        goBack();
    }
}

// Test natijasini saqlash
function saveTestResult() {
    if (!currentUser) return;
    
    const username = currentUser.username;
    const totalQuestions = subjects[currentSubject].questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    const result = {
        subject: subjects[currentSubject].name,
        subjectKey: currentSubject,
        score: score,
        totalQuestions: totalQuestions,
        percentage: percentage,
        date: new Date().toISOString(),
        answers: userAnswers
    };
    
    // Foydalanuvchi natijalar ro'yxatini yaratish
    if (!userResults[username]) {
        userResults[username] = [];
    }
    
    userResults[username].push(result);
    localStorage.setItem('attestation_results', JSON.stringify(userResults));
}

// Foydalanuvchi natijalarini ko'rsatish
function showUserResults() {
    if (!currentUser) {
        alert('Natijalarni ko\'rish uchun tizimga kiring!');
        return;
    }
    
    const username = currentUser.username;
    const results = userResults[username] || [];
    
    if (results.length === 0) {
        alert('Hali test ishlamagansiz!');
        return;
    }
    
    // Natijalar jadvalini yaratish
    let resultsHTML = `
        <div class="results-modal">
            <div class="results-content">
                <h2>${currentUser.fullname} ning natijalari</h2>
                <table class="results-table">
                    <thead>
                        <tr>
                            <th>Fan</th>
                            <th>Ball</th>
                            <th>Foiz</th>
                            <th>Sana</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    results.forEach(result => {
        const date = new Date(result.date).toLocaleDateString('uz-UZ');
        resultsHTML += `
            <tr>
                <td>${result.subject}</td>
                <td>${result.score}/${result.totalQuestions}</td>
                <td>${result.percentage}%</td>
                <td>${date}</td>
            </tr>
        `;
    });
    
    resultsHTML += `
                    </tbody>
                </table>
                <button onclick="closeResultsModal()" class="form-btn">Yopish</button>
            </div>
        </div>
    `;
    
    // Modal yaratish va ko'rsatish
    const modal = document.createElement('div');
    modal.id = 'results-modal';
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = resultsHTML;
    document.body.appendChild(modal);
}

// Natijalar modalini yopish
function closeResultsModal() {
    const modal = document.getElementById('results-modal');
    if (modal) {
        modal.remove();
    }
}

// (window.onclick ishlatilmaydi)

// ===== MENTOR-STUDENT SYSTEM =====

// Ustoz-shogird uchun fanlarni yuklash
function loadMentorSubjects() {
    const mentorSubjectsGrid = document.getElementById('mentor-subjects-grid');
    if (!mentorSubjectsGrid) return;
    
    mentorSubjectsGrid.innerHTML = '';
    
    Object.keys(subjects).forEach(subjectKey => {
        const subject = subjects[subjectKey];
        const subjectCard = document.createElement('button');
        subjectCard.className = 'subject-card mentor-subject-card';
        subjectCard.innerHTML = `
            <h3>📚 ${subject.name}</h3>
            <p>${subject.description}</p>
            <div class="subject-selection">
                <input type="checkbox" id="mentor-${subjectKey}" value="${subjectKey}" onchange="toggleSubjectSelection('${subjectKey}')">
                <label for="mentor-${subjectKey}">Tanlash</label>
            </div>
        `;
        
        mentorSubjectsGrid.appendChild(subjectCard);
    });
    
    const mentorSubjectsSection = document.getElementById('mentor-subjects-section');
    if (!mentorSubjectsSection) return;

    const existingContinue = document.getElementById('continue-btn');
    if (existingContinue) existingContinue.remove();

    // Davom ettirish tugmasi
    const continueBtn = document.createElement('button');
    continueBtn.className = 'nav-button';
    continueBtn.textContent = 'Davom ettirish ➡';
    continueBtn.onclick = showMyProfileForm;
    continueBtn.style.marginTop = '2rem';
    continueBtn.disabled = selectedSubjects.length === 0;
    continueBtn.id = 'continue-btn';

    mentorSubjectsSection.appendChild(continueBtn);
}

// Fan tanlashni boshqarish
function toggleSubjectSelection(subjectKey) {
    const checkbox = document.getElementById(`mentor-${subjectKey}`);
    const continueBtn = document.getElementById('continue-btn');
    
    if (checkbox.checked) {
        if (!selectedSubjects.includes(subjectKey)) {
            selectedSubjects.push(subjectKey);
        }
    } else {
        selectedSubjects = selectedSubjects.filter(sub => sub !== subjectKey);
    }
    
    // Davom ettirish tugmasini faollashtirish/o'chirish
    if (continueBtn) continueBtn.disabled = selectedSubjects.length === 0;
}

// Mening sahifam: fan tanlashdan keyin forma
function showMyProfileForm() {
    if (!currentUser) {
        alert('Avval tizimga kiring!');
        openModal('login');
        return;
    }

    if (selectedSubjects.length === 0) {
        alert('Kamida bitta fan tanlang!');
        return;
    }

    currentRole = 'mentor';
    viewingUsername = currentUser.username;

    const mentorSubjectsSection = document.getElementById('mentor-subjects-section');
    const portfolioSection = document.getElementById('portfolio-section');
    const portfolioViewSection = document.getElementById('portfolio-view-section');

    if (mentorSubjectsSection) mentorSubjectsSection.style.display = 'none';
    if (portfolioViewSection) portfolioViewSection.style.display = 'none';
    if (portfolioSection) portfolioSection.style.display = 'block';

    const portfolioTitle = document.getElementById('portfolio-title');
    if (portfolioTitle) portfolioTitle.textContent = '👨‍🏫 Ustoz Portfoliosi';

    loadPortfolioData();
}

// Rol tanlash
function selectRole(role) {
    if (role === 'mentor') {
        showMyProfileForm();
    } else {
        showRatings();
    }
}

// Ustozlar ro'yxatini yuklash
function loadTeachersList() {
    const teachersGrid = document.getElementById('teachers-grid');
    teachersGrid.innerHTML = '';
    
    // Mentor portfoliosi bo'lgan foydalanuvchilarni topish
    const teachers = [];
    Object.keys(portfolios).forEach(username => {
        if (portfolios[username]['mentor']) {
            const mentorData = portfolios[username]['mentor'];
            const userData = users[username];
            
            // Faqat tanlangan fanlarga mos keladigan ustozlarni ko'rsatish
            const hasMatchingSubject = mentorData.subjects && 
                mentorData.subjects.some(sub => selectedSubjects.includes(sub));
            
            if (hasMatchingSubject || selectedSubjects.length === 0) {
                teachers.push({
                    username: username,
                    data: mentorData,
                    user: userData
                });
            }
        }
    });
    
    if (teachers.length === 0) {
        teachersGrid.innerHTML = '<p style="text-align: center; padding: 2rem; color: #718096;">Hozircha ustozlar yo\'q. Keyinroq qayta urinib ko\'ring.</p>';
        return;
    }
    
    teachers.forEach(teacher => {
        const teacherCard = document.createElement('div');
        teacherCard.className = 'teacher-card';
        
        const points = teacher.user.points || 0;
        const studentsCount = teacher.user.students ? teacher.user.students.length : 0;
        
        // Fanlari
        let subjectsHTML = '';
        if (teacher.data.subjects && teacher.data.subjects.length > 0) {
            subjectsHTML = teacher.data.subjects.map(sub => 
                `<span class="subject-tag-small">${subjects[sub].name}</span>`
            ).join('');
        }
        
        teacherCard.innerHTML = `
            <div class="teacher-info">
                <h3>👨‍🏫 ${teacher.data.fullname || teacher.username}</h3>
                <p class="teacher-speciality">${teacher.data.speciality || 'Pedagog'}</p>
                <p class="teacher-workplace">📍 ${teacher.data.workplace || 'Maktab'}</p>
                <div class="teacher-subjects">${subjectsHTML}</div>
                <div class="teacher-stats">
                    <span>⭐ ${points} ball</span>
                    <span>👥 ${studentsCount} shogird</span>
                </div>
            </div>
            <button class="view-portfolio-btn" onclick="viewTeacherPortfolio('${teacher.username}')">
                Portfolio ko'rish
            </button>
        `;
        
        teachersGrid.appendChild(teacherCard);
    });
}

// Ustoz-shogird bo'limiga qaytish
function goBackToMentorHome() {
    showHome();
    
    // Tanlovlarni tozalash
    selectedSubjects = [];
    currentRole = null;
    viewingUsername = null;
    
    // Checkboxlarni tozalash
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    const continueBtn = document.getElementById('continue-btn');
    if (continueBtn) continueBtn.disabled = true;
}

// ===== PORTFOLIO MANAGEMENT =====

// Portfolio ma'lumotlarini yuklash
function loadPortfolioData() {
    if (!currentUser) return;
    
    const userPortfolio = portfolios[currentUser.username] || {};
    const roleData = userPortfolio[currentRole] || {};
    
    // Shaxsiy ma'lumotlar
    document.getElementById('portfolio-fullname').value = roleData.fullname || currentUser.fullname || '';
    document.getElementById('portfolio-speciality').value = roleData.speciality || '';
    document.getElementById('portfolio-workplace').value = roleData.workplace || '';
    document.getElementById('portfolio-experience').value = roleData.experience || '';
    document.getElementById('portfolio-bio').value = roleData.bio || '';
    
    // Yutuqlarni yuklash
    loadAchievements();
    
    // Fayllarni yuklash
    loadUploadedFiles();
}

// Shaxsiy ma'lumotlarni saqlash
function savePersonalInfo() {
    if (!currentUser || !currentRole) return;
    
    const personalData = {
        fullname: document.getElementById('portfolio-fullname').value,
        speciality: document.getElementById('portfolio-speciality').value,
        workplace: document.getElementById('portfolio-workplace').value,
        experience: document.getElementById('portfolio-experience').value,
        bio: document.getElementById('portfolio-bio').value,
        subjects: selectedSubjects,
        lastUpdated: new Date().toISOString()
    };
    
    // Agar birinchi marta saqlayotgan bo'lsa, yaratilgan sanani qo'shish
    if (!portfolios[currentUser.username] || !portfolios[currentUser.username][currentRole]) {
        personalData.createdAt = new Date().toISOString();
    }
    
    // Portfolio ma'lumotlarini saqlash
    if (!portfolios[currentUser.username]) {
        portfolios[currentUser.username] = {};
    }
    
    if (!portfolios[currentUser.username][currentRole]) {
        portfolios[currentUser.username][currentRole] = {};
    }
    
    // Eski yaratilgan sanani saqlash
    if (portfolios[currentUser.username][currentRole].createdAt) {
        personalData.createdAt = portfolios[currentUser.username][currentRole].createdAt;
    }
    
    Object.assign(portfolios[currentUser.username][currentRole], personalData);
    
    localStorage.setItem('attestation_portfolios', JSON.stringify(portfolios));
    
    // Portfolio ko'rish sahifasini ko'rsatish
    showPortfolioView();
}

// Yutuq qo'shish
function addAchievement() {
    const input = document.getElementById('new-achievement');
    const achievement = input.value.trim();
    
    if (!achievement) return;
    
    if (!portfolios[currentUser.username]) {
        portfolios[currentUser.username] = {};
    }
    
    if (!portfolios[currentUser.username][currentRole]) {
        portfolios[currentUser.username][currentRole] = {};
    }
    
    if (!portfolios[currentUser.username][currentRole].achievements) {
        portfolios[currentUser.username][currentRole].achievements = [];
    }
    
    portfolios[currentUser.username][currentRole].achievements.push({
        id: Date.now(),
        text: achievement,
        date: new Date().toISOString()
    });
    
    localStorage.setItem('attestation_portfolios', JSON.stringify(portfolios));
    
    input.value = '';
    loadAchievements();
}

// Yutuqlarni yuklash
function loadAchievements() {
    const achievementsList = document.getElementById('achievements-list');
    const userPortfolio = portfolios[currentUser.username] || {};
    const roleData = userPortfolio[currentRole] || {};
    const achievements = roleData.achievements || [];
    
    achievementsList.innerHTML = '';
    
    achievements.forEach(achievement => {
        const achievementDiv = document.createElement('div');
        achievementDiv.className = 'achievement-item';
        achievementDiv.innerHTML = `
            <span>🏆 ${achievement.text}</span>
            <button class="delete-achievement" onclick="deleteAchievement(${achievement.id})">
                🗑️ O'chirish
            </button>
        `;
        achievementsList.appendChild(achievementDiv);
    });
}

// Yutuqni o'chirish
function deleteAchievement(achievementId) {
    const userPortfolio = portfolios[currentUser.username] || {};
    const roleData = userPortfolio[currentRole] || {};
    
    if (roleData.achievements) {
        roleData.achievements = roleData.achievements.filter(ach => ach.id !== achievementId);
        localStorage.setItem('attestation_portfolios', JSON.stringify(portfolios));
        loadAchievements();
    }
}

// Fayl yuklash sozlash
function setupFileUpload() {
    const fileInput = document.getElementById('pdf-upload');
    if (!fileInput) return;
    
    fileInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        
        files.forEach(file => {
            const fileData = {
                id: Date.now() + Math.random(),
                name: file.name,
                size: file.size,
                type: file.type,
                uploadDate: new Date().toISOString()
            };
            
            // FileReader dan foydalanib faylni Base64 formatda saqlash
            const reader = new FileReader();
            reader.onload = function(e) {
                fileData.content = e.target.result;
                saveUploadedFile(fileData);
            };
            reader.readAsDataURL(file);
        });
    });
}

// Yuklangan faylni saqlash
function saveUploadedFile(fileData) {
    if (!portfolios[currentUser.username]) {
        portfolios[currentUser.username] = {};
    }
    
    if (!portfolios[currentUser.username][currentRole]) {
        portfolios[currentUser.username][currentRole] = {};
    }
    
    if (!portfolios[currentUser.username][currentRole].files) {
        portfolios[currentUser.username][currentRole].files = [];
    }
    
    portfolios[currentUser.username][currentRole].files.push(fileData);
    localStorage.setItem('attestation_portfolios', JSON.stringify(portfolios));
    
    loadUploadedFiles();
}

// Yuklangan fayllarni yuklash
function loadUploadedFiles() {
    const uploadedFiles = document.getElementById('uploaded-files');
    const userPortfolio = portfolios[currentUser.username] || {};
    const roleData = userPortfolio[currentRole] || {};
    const files = roleData.files || [];
    
    uploadedFiles.innerHTML = '';
    
    files.forEach(file => {
        const fileDiv = document.createElement('div');
        fileDiv.className = 'uploaded-file';
        
        const fileSizeKB = Math.round(file.size / 1024);
        
        fileDiv.innerHTML = `
            <div class="file-info">
                <span>📄 ${file.name}</span>
                <span class="file-size">${fileSizeKB} KB</span>
            </div>
            <button class="delete-file" onclick="deleteFile(${file.id})">
                🗑️ O'chirish
            </button>
        `;
        uploadedFiles.appendChild(fileDiv);
    });
}

// Faylni o'chirish
function deleteFile(fileId) {
    const userPortfolio = portfolios[currentUser.username] || {};
    const roleData = userPortfolio[currentRole] || {};
    
    if (roleData.files) {
        roleData.files = roleData.files.filter(file => file.id !== fileId);
        localStorage.setItem('attestation_portfolios', JSON.stringify(portfolios));
        loadUploadedFiles();
    }
}

// Portfolio ko'rish sahifasini ko'rsatish
function showPortfolioView() {
    // Tahrirlash sahifasini yashirish
    document.getElementById('portfolio-section').style.display = 'none';
    
    // Ko'rish sahifasini ko'rsatish
    document.getElementById('portfolio-view-section').style.display = 'block';
    
    // Ma'lumotlarni yuklash
    loadPortfolioDisplay();
    
    alert('Portfolio saqlandi va ko\'rsatilmoqda!');
}

// Portfolio ma'lumotlarini ko'rish uchun yuklash
function loadPortfolioDisplay() {
    if (!currentUser || !currentRole) return;
    
    // viewingUsername o'rnatish (o'z portfoliongizni ko'ryapsiz)
    viewingUsername = currentUser.username;
    
    const userPortfolio = portfolios[currentUser.username] || {};
    const roleData = userPortfolio[currentRole] || {};
    
    // Sarlavhani yangilash
    const viewTitle = document.getElementById('portfolio-view-title');
    viewTitle.textContent = `${currentRole === 'mentor' ? '👨‍🏫 Ustoz' : '🎓 Shogird'} Portfolio Ko'rinishi`;
    
    // "Shogird bo'lish" tugmasini yashirish (o'z portfoliongiz)
    const becomeStudentBtn = document.getElementById('become-student-btn');
    if (becomeStudentBtn) {
        becomeStudentBtn.style.display = 'none';
    }
    
    // Tahrirlash va action tugmalarini ko'rsatish (o'z portfoliongiz)
    const editBtn = document.querySelector('.edit-button');
    if (editBtn) {
        editBtn.style.display = 'inline-block';
    }
    
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(btn => {
        btn.style.display = 'inline-block';
    });
    
    // Shaxsiy ma'lumotlar
    document.getElementById('display-fullname').textContent = roleData.fullname || '-';
    document.getElementById('display-speciality').textContent = roleData.speciality || '-';
    document.getElementById('display-workplace').textContent = roleData.workplace || '-';
    document.getElementById('display-experience').textContent = roleData.experience || '-';
    document.getElementById('display-bio').textContent = roleData.bio || 'Ma\'lumot kiritilmagan';
    
    // Tanlangan fanlar
    const subjectsDisplay = document.getElementById('display-subjects');
    const storedSubjects = Array.isArray(roleData.subjects) ? roleData.subjects : [];
    selectedSubjects = [...storedSubjects];
    if (storedSubjects.length > 0) {
        subjectsDisplay.innerHTML = '';
        storedSubjects.forEach(subjectKey => {
            const subjectTag = document.createElement('span');
            subjectTag.className = 'subject-tag';
            subjectTag.textContent = subjects[subjectKey].name;
            subjectsDisplay.appendChild(subjectTag);
        });
    } else {
        subjectsDisplay.innerHTML = '<span style="color: #718096; font-style: italic;">Fanlar tanlanmagan</span>';
    }

    syncMentorSubjectCheckboxes();
    
    // Yutuqlar
    const achievementsDisplay = document.getElementById('display-achievements');
    const achievements = roleData.achievements || [];
    
    if (achievements.length > 0) {
        achievementsDisplay.innerHTML = '';
        achievements.forEach(achievement => {
            const achievementDiv = document.createElement('div');
            achievementDiv.className = 'achievement-display-item';
            achievementDiv.innerHTML = `
                <span class="icon">🏆</span>
                <span class="text">${achievement.text}</span>
                <small style="color: #718096;">${new Date(achievement.date).toLocaleDateString('uz-UZ')}</small>
            `;
            achievementsDisplay.appendChild(achievementDiv);
        });
    } else {
        achievementsDisplay.innerHTML = '<p class="no-data">Yutuqlar kiritilmagan</p>';
    }
    
    // Fayllar
    const filesDisplay = document.getElementById('display-files');
    const files = roleData.files || [];
    
    if (files.length > 0) {
        filesDisplay.innerHTML = '';
        files.forEach(file => {
            const fileDiv = document.createElement('div');
            fileDiv.className = 'file-display-item';
            
            const fileSizeKB = Math.round(file.size / 1024);
            let fileIcon = '📄';
            
            if (file.type.includes('pdf')) fileIcon = '📕';
            else if (file.type.includes('word') || file.type.includes('doc')) fileIcon = '📘';
            else if (file.type.includes('image')) fileIcon = '🖼️';
            
            fileDiv.innerHTML = `
                <span class="file-display-icon">${fileIcon}</span>
                <div class="file-display-info">
                    <div class="file-display-name">${file.name}</div>
                    <div class="file-display-size">${fileSizeKB} KB • ${new Date(file.uploadDate).toLocaleDateString('uz-UZ')}</div>
                </div>
            `;
            filesDisplay.appendChild(fileDiv);
        });
    } else {
        filesDisplay.innerHTML = '<p class="no-data">Hujjatlar yuklanmagan</p>';
    }
    
    // Sana ma'lumotlari
    if (roleData.createdAt) {
        document.getElementById('display-created-date').textContent = new Date(roleData.createdAt).toLocaleDateString('uz-UZ');
    } else {
        document.getElementById('display-created-date').textContent = '-';
    }
    
    if (roleData.lastUpdated) {
        document.getElementById('display-updated-date').textContent = new Date(roleData.lastUpdated).toLocaleDateString('uz-UZ');
    } else {
        document.getElementById('display-updated-date').textContent = '-';
    }

    // Maqolalar
    const articlesCard = document.getElementById('articles-display-card');
    const articlesDisplay = document.getElementById('display-articles');
    const articles = userArticles[viewingUsername] || [];

    if (articles.length > 0) {
        articlesCard.style.display = 'block';
        articlesDisplay.innerHTML = articles.map(article => `
            <div class="article-card">
                <div class="article-header">
                    <h4>${article.title}</h4>
                    <span class="article-category">${getCategoryName(article.category)}</span>
                </div>
                <p class="article-content">${article.content.substring(0, 200)}${article.content.length > 200 ? '...' : ''}</p>
                <div class="article-footer">
                    <span>📅 ${new Date(article.createdAt).toLocaleDateString('uz-UZ')}</span>
                    <button class="view-article-btn" onclick="viewFullArticle(${article.id}, '${viewingUsername}')">To'liq o'qish</button>
                </div>
            </div>
        `).join('');
    } else {
        articlesCard.style.display = 'none';
    }

    // Postlar
    const postsCard = document.getElementById('posts-display-card');
    const postsDisplay = document.getElementById('display-posts');
    const posts = userPosts[viewingUsername] || [];

    if (posts.length > 0) {
        postsCard.style.display = 'block';
        postsDisplay.innerHTML = posts.map(post => `
            <div class="post-card">
                <h4>${post.title}</h4>
                <p class="post-content">${post.content}</p>
                <div class="post-footer">
                    <span>📅 ${new Date(post.createdAt).toLocaleDateString('uz-UZ')}</span>
                </div>
            </div>
        `).join('');
    } else {
        postsCard.style.display = 'none';
    }
}

function getCategoryName(category) {
    const categories = {
        'methodology': 'Metodika',
        'experience': 'Tajriba',
        'innovation': 'Innovatsiya',
        'research': 'Tadqiqot',
        'other': 'Boshqa'
    };
    return categories[category] || category;
}

function viewFullArticle(articleId, username) {
    const articles = userArticles[username] || [];
    const article = articles.find(a => a.id === articleId);
    
    if (!article) {
        alert('Maqola topilmadi!');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content modal-large">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>${article.title}</h2>
            <div style="margin-bottom: 1rem;">
                <span class="article-category">${getCategoryName(article.category)}</span>
                <span style="margin-left: 1rem; color: #718096;">👤 ${article.authorName}</span>
                <span style="margin-left: 1rem; color: #718096;">📅 ${new Date(article.createdAt).toLocaleDateString('uz-UZ')}</span>
            </div>
            <div class="article-full-content" style="line-height: 1.8; white-space: pre-wrap;">${article.content}</div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Portfolio tahrirlash sahifasiga qaytish
function goBackToPortfolioEdit() {
    // Agar boshqa birovning portfoliosini ko'rayotgan bo'lsak
    if (viewingUsername && viewingUsername !== currentUser.username) {
        const portfolioViewSection = document.getElementById('portfolio-view-section');
        if (portfolioViewSection) portfolioViewSection.style.display = 'none';

        const backTo = returnAfterTeacherView;
        viewingUsername = null;

        if (backTo === 'ratings') showRatings();
        else if (backTo === 'home') showHome();
        else showMyPage();
    } else {
        // O'z portfoliongizni tahrirlashga qaytish
        const portfolioViewSection = document.getElementById('portfolio-view-section');
        const portfolioSection = document.getElementById('portfolio-section');
        if (portfolioViewSection) portfolioViewSection.style.display = 'none';
        if (portfolioSection) portfolioSection.style.display = 'block';
        syncMentorSubjectCheckboxes();
    }
}

// Portfolio tahrirlash
function editPortfolio() {
    goBackToPortfolioEdit();
}

// Shogird bo'lish funksiyasi
function becomeStudent() {
    if (!currentUser) {
        alert('Avval tizimga kiring!');
        openModal('login');
        return;
    }

    // O'z portfoliongizga shogird bo'lolmaysiz
    if (viewingUsername === currentUser.username) {
        alert('O\'z portfoliongizga shogird bo\'lolmaysiz!');
        return;
    }

    // Allaqachon shogird ekanligini tekshirish
    const relationKey = `${currentUser.username}_${viewingUsername}`;
    if (studentTeacherRelations[relationKey]) {
        alert('Siz allaqachon bu ustozning shogirdisiz!');
        return;
    }

    // Munosabatni saqlash
    studentTeacherRelations[relationKey] = {
        student: currentUser.username,
        teacher: viewingUsername,
        createdAt: new Date().toISOString()
    };

    // Ustozga ball qo'shish
    if (users[viewingUsername]) {
        if (!users[viewingUsername].points) {
            users[viewingUsername].points = 0;
        }
        users[viewingUsername].points += 5;

        if (!users[viewingUsername].students) {
            users[viewingUsername].students = [];
        }
        users[viewingUsername].students.push(currentUser.username);
    }

    // Shogirdga ustoz qo'shish
    if (!users[currentUser.username].teachers) {
        users[currentUser.username].teachers = [];
    }
    users[currentUser.username].teachers.push(viewingUsername);

    // LocalStorage'ga saqlash
    localStorage.setItem('attestation_relations', JSON.stringify(studentTeacherRelations));
    localStorage.setItem('attestation_users', JSON.stringify(users));

    // CurrentUser'ni yangilash
    currentUser.teachers = users[currentUser.username].teachers;
    localStorage.setItem('current_user', JSON.stringify(currentUser));

    alert(`Tabriklaymiz! Siz ${users[viewingUsername].fullname} ning shogirdi bo'ldingiz!\nUstoz 5 ball oldi! ⭐`);
    
    // Tugmani o'chirish
    document.getElementById('become-student-btn').style.display = 'none';
    
    // Interfeys yangilash
    updateUserInterface();
}

// Portfolio ko'rish uchun o'zgaruvchi
let viewingUsername = null;
// Ustoz portfoliosini ko'rish
function viewTeacherPortfolio(teacherUsername) {
    if (!currentUser) {
        alert('Avval tizimga kiring!');
        openModal('login');
        return;
    }
    
    viewingUsername = teacherUsername;
    const teacherPortfolio = portfolios[teacherUsername];
    
    if (!teacherPortfolio || !teacherPortfolio['mentor']) {
        alert('Portfolio topilmadi!');
        return;
    }
    
    const mentorData = teacherPortfolio['mentor'];
    const teacherUser = users[teacherUsername];
    
    // Qaysi ekrandan kelganini eslab qolish
    returnAfterTeacherView = activeMainView;

    // Teacher sahifasi: my-page ichidagi portfolio view
    setMainView('my-page');
    const mentorSubjectsSection = document.getElementById('mentor-subjects-section');
    const portfolioSection = document.getElementById('portfolio-section');
    if (mentorSubjectsSection) mentorSubjectsSection.style.display = 'none';
    if (portfolioSection) portfolioSection.style.display = 'none';
    
    // Portfolio view ni ko'rsatish
    const portfolioViewSection = document.getElementById('portfolio-view-section');
    if (portfolioViewSection) portfolioViewSection.style.display = 'block';
    
    // Sarlavhani yangilash
    const viewTitle = document.getElementById('portfolio-view-title');
    viewTitle.textContent = `👨‍🏫 ${mentorData.fullname || teacherUsername} - Ustoz Portfoliosi`;
    
    // Shaxsiy ma'lumotlar
    document.getElementById('display-fullname').textContent = mentorData.fullname || '-';
    document.getElementById('display-speciality').textContent = mentorData.speciality || '-';
    document.getElementById('display-workplace').textContent = mentorData.workplace || '-';
    document.getElementById('display-experience').textContent = mentorData.experience || '-';
    document.getElementById('display-bio').textContent = mentorData.bio || 'Ma\'lumot kiritilmagan';
    
    // Tanlangan fanlar
    const subjectsDisplay = document.getElementById('display-subjects');
    if (mentorData.subjects && mentorData.subjects.length > 0) {
        subjectsDisplay.innerHTML = '';
        mentorData.subjects.forEach(subjectKey => {
            const subjectTag = document.createElement('span');
            subjectTag.className = 'subject-tag';
            subjectTag.textContent = subjects[subjectKey].name;
            subjectsDisplay.appendChild(subjectTag);
        });
    } else {
        subjectsDisplay.innerHTML = '<span style=\"color: #718096; font-style: italic;\">Fanlar tanlanmagan</span>';
    }
    
    // Yutuqlar
    const achievementsDisplay = document.getElementById('display-achievements');
    const achievements = mentorData.achievements || [];
    
    if (achievements.length > 0) {
        achievementsDisplay.innerHTML = '';
        achievements.forEach(achievement => {
            const achievementDiv = document.createElement('div');
            achievementDiv.className = 'achievement-display-item';
            achievementDiv.innerHTML = `
                <span class=\"icon\">🏆</span>
                <span class=\"text\">${achievement.text}</span>
                <small style=\"color: #718096;\">${new Date(achievement.date).toLocaleDateString('uz-UZ')}</small>
            `;
            achievementsDisplay.appendChild(achievementDiv);
        });
    } else {
        achievementsDisplay.innerHTML = '<p class=\"no-data\">Yutuqlar kiritilmagan</p>';
    }
    
    // Fayllar
    const filesDisplay = document.getElementById('display-files');
    const files = mentorData.files || [];
    
    if (files.length > 0) {
        filesDisplay.innerHTML = '';
        files.forEach(file => {
            const fileDiv = document.createElement('div');
            fileDiv.className = 'file-display-item';
            
            const fileSizeKB = Math.round(file.size / 1024);
            let fileIcon = '📄';
            
            if (file.type.includes('pdf')) fileIcon = '📕';
            else if (file.type.includes('word') || file.type.includes('doc')) fileIcon = '📘';
            else if (file.type.includes('image')) fileIcon = '🖼️';
            
            fileDiv.innerHTML = `
                <span class=\"file-display-icon\">${fileIcon}</span>
                <div class=\"file-display-info\">
                    <div class=\"file-display-name\">${file.name}</div>
                    <div class=\"file-display-size\">${fileSizeKB} KB • ${new Date(file.uploadDate).toLocaleDateString('uz-UZ')}</div>
                </div>
            `;
            filesDisplay.appendChild(fileDiv);
        });
    } else {
        filesDisplay.innerHTML = '<p class=\"no-data\">Hujjatlar yuklanmagan</p>';
    }
    
    // Sana ma'lumotlari
    if (mentorData.createdAt) {
        document.getElementById('display-created-date').textContent = new Date(mentorData.createdAt).toLocaleDateString('uz-UZ');
    } else {
        document.getElementById('display-created-date').textContent = '-';
    }
    
    if (mentorData.lastUpdated) {
        document.getElementById('display-updated-date').textContent = new Date(mentorData.lastUpdated).toLocaleDateString('uz-UZ');
    } else {
        document.getElementById('display-updated-date').textContent = '-';
    }

    // Maqolalar
    const articlesCard = document.getElementById('articles-display-card');
    const articlesDisplay = document.getElementById('display-articles');
    const articles = userArticles[teacherUsername] || [];

    if (articles.length > 0) {
        articlesCard.style.display = 'block';
        articlesDisplay.innerHTML = articles.map(article => `
            <div class="article-card">
                <div class="article-header">
                    <h4>${article.title}</h4>
                    <span class="article-category">${getCategoryName(article.category)}</span>
                </div>
                <p class="article-content">${article.content.substring(0, 200)}${article.content.length > 200 ? '...' : ''}</p>
                <div class="article-footer">
                    <span>📅 ${new Date(article.createdAt).toLocaleDateString('uz-UZ')}</span>
                    <button class="view-article-btn" onclick="viewFullArticle(${article.id}, '${teacherUsername}')">To'liq o'qish</button>
                </div>
            </div>
        `).join('');
    } else {
        articlesCard.style.display = 'none';
    }

    // Postlar
    const postsCard = document.getElementById('posts-display-card');
    const postsDisplay = document.getElementById('display-posts');
    const posts = userPosts[teacherUsername] || [];

    if (posts.length > 0) {
        postsCard.style.display = 'block';
        postsDisplay.innerHTML = posts.map(post => `
            <div class="post-card">
                <h4>${post.title}</h4>
                <p class="post-content">${post.content}</p>
                <div class="post-footer">
                    <span>📅 ${new Date(post.createdAt).toLocaleDateString('uz-UZ')}</span>
                </div>
            </div>
        `).join('');
    } else {
        postsCard.style.display = 'none';
    }
    
    // Tugmalarni sozlash
    const becomeStudentBtn = document.getElementById('become-student-btn');
    const editBtn = document.querySelector('.edit-button');
    const actionButtons = document.querySelectorAll('.action-btn');
    
    // Action tugmalarini yashirish (bu boshqaning portfoliosi)
    actionButtons.forEach(btn => {
        btn.style.display = 'none';
    });
    
    // Tahrirlash tugmasini yashirish (bu boshqaning portfoliosi)
    if (editBtn) {
        editBtn.style.display = 'none';
    }
    
    // Shogird bo'lish tugmasini ko'rsatish/yashirish
    if (becomeStudentBtn) {
        // O'z portfoliongiz yoki allaqachon shogird bo'lgan ustozning
        const relationKey = `${currentUser.username}_${teacherUsername}`;
        if (teacherUsername === currentUser.username || studentTeacherRelations[relationKey]) {
            becomeStudentBtn.style.display = 'none';
        } else {
            becomeStudentBtn.style.display = 'inline-block';
        }
    }
}

function renderRatings() {
    const overallEl = document.getElementById('ratings-overall');
    const bySubjectEl = document.getElementById('ratings-by-subject');
    if (!overallEl || !bySubjectEl) return;

    // Ustozlar: mentor portfolio bor bo'lsa
    const teacherUsernames = Object.keys(portfolios).filter(u => portfolios[u] && portfolios[u].mentor);

    const overall = teacherUsernames
        .map(username => {
            const points = (users[username] && typeof users[username].points === 'number') ? users[username].points : 0;
            const mentor = portfolios[username].mentor || {};
            const fullName = mentor.fullname || (users[username] && users[username].fullname) || username;
            const subjectsList = Array.isArray(mentor.subjects) ? mentor.subjects : [];
            const studentsCount = (users[username] && Array.isArray(users[username].students)) ? users[username].students.length : 0;
            return { username, points, fullName, subjectsList, studentsCount };
        })
        .sort((a, b) => b.points - a.points);

    if (overall.length === 0) {
        overallEl.innerHTML = '<p style="color:#718096; padding: 1rem;">Hozircha reyting yo\'q. Ustozlar ma\'lumot kiritgandan keyin ko\'rinadi.</p>';
    } else {
        overallEl.innerHTML = overall
            .map((t, idx) => {
                const tags = t.subjectsList
                    .filter(sk => subjects[sk])
                    .map(sk => `<span class="subject-tag-small">${subjects[sk].name}</span>`)
                    .join('');
                return `
                <div class="rating-item">
                    <div class="rating-rank">${idx + 1}</div>
                    <div class="rating-main">
                        <div class="rating-name">${t.fullName}</div>
                        <div class="rating-meta">⭐ ${t.points} ball • 👥 ${t.studentsCount} shogird</div>
                        <div class="rating-tags">${tags}</div>
                    </div>
                    <div class="rating-actions">
                        <button class="view-portfolio-btn" onclick="viewTeacherPortfolio('${t.username}')">Sahifasi</button>
                    </div>
                </div>`;
            })
            .join('');
    }

    // Fanlar bo'yicha
    const subjectBlocks = Object.keys(subjects).map(subjectKey => {
        const list = overall
            .filter(t => t.subjectsList.includes(subjectKey))
            .sort((a, b) => b.points - a.points)
            .slice(0, 10);

        if (list.length === 0) {
            return `
            <div class="ratings-subject-block">
                <h4>📚 ${subjects[subjectKey].name}</h4>
                <p style="color:#718096;">Hozircha ustozlar yo\'q</p>
            </div>`;
        }

        const rows = list
            .map((t, idx) => `
                <div class="rating-row">
                    <span class="rating-row-rank">${idx + 1}</span>
                    <span class="rating-row-name">${t.fullName}</span>
                    <span class="rating-row-points">⭐ ${t.points}</span>
                    <button class="rating-row-btn" onclick="viewTeacherPortfolio('${t.username}')">Sahifa</button>
                </div>`)
            .join('');

        return `
        <div class="ratings-subject-block">
            <h4>📚 ${subjects[subjectKey].name}</h4>
            <div class="rating-rows">${rows}</div>
        </div>`;
    });

    bySubjectEl.innerHTML = subjectBlocks.join('');
}

// ==================== FILE MANAGEMENT ====================

function openCreateFileModal() {
    if (!currentUser) {
        alert('Avval tizimga kiring!');
        return;
    }
    openModal('create-file');
}

function uploadFile(event) {
    event.preventDefault();

    const fileType = document.getElementById('file-type').value;
    const fileTitle = document.getElementById('file-title').value;
    const fileDescription = document.getElementById('file-description').value;
    const fileInput = document.getElementById('file-upload-input');

    if (!fileInput.files || fileInput.files.length === 0) {
        alert('Iltimos, fayl tanlang!');
        return false;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const fileData = {
            id: Date.now(),
            username: currentUser.username,
            authorName: currentUser.fullname || currentUser.username,
            type: fileType,
            title: fileTitle,
            description: fileDescription,
            fileName: file.name,
            fileSize: file.size,
            fileType: file.type,
            fileData: e.target.result,
            createdAt: new Date().toISOString()
        };

        if (!userFiles[currentUser.username]) {
            userFiles[currentUser.username] = [];
        }
        userFiles[currentUser.username].push(fileData);
        localStorage.setItem('attestation_files', JSON.stringify(userFiles));

        alert('Fayl muvaffaqiyatli yuklandi!');
        closeModal('create-file');
        document.getElementById('create-file-form').reset();
        
        // Agar files database ochiq bo'lsa, yangilash
        if (activeMainView === 'files-database') {
            renderFilesDatabase();
        }
    };

    reader.readAsDataURL(file);
    return false;
}

function renderFilesDatabase() {
    const showcaseList = document.getElementById('showcase-files-list');
    const regulatoryList = document.getElementById('regulatory-files-list');

    if (!showcaseList || !regulatoryList) return;

    const allFiles = [];
    Object.keys(userFiles).forEach(username => {
        userFiles[username].forEach(file => {
            // Calculate engagement score
            const likes = getFileLikes(file.id, file.username);
            const comments = getFileComments(file.id, file.username).length;
            file.engagementScore = likes + comments;
            allFiles.push(file);
        });
    });

    // Sort by engagement score (higher first), then randomly if equal
    const sortByEngagement = (files) => {
        return files.sort((a, b) => {
            if (b.engagementScore === a.engagementScore) {
                return Math.random() - 0.5; // Random order for equal scores
            }
            return b.engagementScore - a.engagementScore;
        });
    };

    const showcaseFiles = sortByEngagement(allFiles.filter(f => f.type === 'showcase'));
    const regulatoryFiles = sortByEngagement(allFiles.filter(f => f.type === 'regulatory'));

    showcaseList.innerHTML = showcaseFiles.length > 0 
        ? showcaseFiles.map(file => {
            const likes = getFileLikes(file.id, file.username);
            const comments = getFileComments(file.id, file.username).length;
            return `
                <div class="file-card" onclick="openFileDetail(${file.id}, '${file.username}')">
                    <div class="file-icon">📄</div>
                    <h4>${file.title}</h4>
                    <p class="file-author">👤 ${file.authorName}</p>
                    <p class="file-description">${file.description || 'Tavsif mavjud emas'}</p>
                    <div class="file-engagement">
                        <span>❤️ ${likes}</span>
                        <span>💬 ${comments}</span>
                    </div>
                    <div class="file-meta">
                        <span>📁 ${file.fileName}</span>
                        <span>📅 ${new Date(file.createdAt).toLocaleDateString('uz-UZ')}</span>
                    </div>
                    <button class="file-view-btn" onclick="event.stopPropagation(); openFileDetail(${file.id}, '${file.username}')">👁️ Ko'rish</button>
                </div>
            `;
        }).join('')
        : '<p class="no-data">Ko\'rgazmalar mavjud emas</p>';

    regulatoryList.innerHTML = regulatoryFiles.length > 0 
        ? regulatoryFiles.map(file => {
            const likes = getFileLikes(file.id, file.username);
            const comments = getFileComments(file.id, file.username).length;
            return `
                <div class="file-card" onclick="openFileDetail(${file.id}, '${file.username}')">
                    <div class="file-icon">📜</div>
                    <h4>${file.title}</h4>
                    <p class="file-author">👤 ${file.authorName}</p>
                    <p class="file-description">${file.description || 'Tavsif mavjud emas'}</p>
                    <div class="file-engagement">
                        <span>❤️ ${likes}</span>
                        <span>💬 ${comments}</span>
                    </div>
                    <div class="file-meta">
                        <span>📁 ${file.fileName}</span>
                        <span>📅 ${new Date(file.createdAt).toLocaleDateString('uz-UZ')}</span>
                    </div>
                    <button class="file-view-btn" onclick="event.stopPropagation(); openFileDetail(${file.id}, '${file.username}')">👁️ Ko'rish</button>
                </div>
            `;
        }).join('')
        : '<p class="no-data">Me\'yoriy hujjatlar mavjud emas</p>';
}

function getFileLikes(fileId, username) {
    // localStorage dan fresh ma'lumotni olish
    const freshLikes = JSON.parse(localStorage.getItem('attestation_file_likes')) || {};
    const key = `${username}_${fileId}`;
    return freshLikes[key] || 0;
}

function getFileComments(fileId, username) {
    // localStorage dan fresh ma'lumotni olish
    const freshComments = JSON.parse(localStorage.getItem('attestation_file_comments')) || {};
    const key = `${username}_${fileId}`;
    return freshComments[key] || [];
}

function openFileDetail(fileId, username) {
    if (!currentUser) {
        alert('Avval tizimga kiring!');
        openModal('login');
        return;
    }

    const files = userFiles[username] || [];
    const file = files.find(f => f.id === fileId);

    if (!file) {
        alert('Fayl topilmadi!');
        return;
    }

    const likes = getFileLikes(fileId, username);
    const comments = getFileComments(fileId, username);
    const key = `${username}_${fileId}`;
    const hasLiked = fileLikes[`${key}_users`] && fileLikes[`${key}_users`].includes(currentUser.username);

    const detailContent = document.getElementById('file-detail-content');
    detailContent.innerHTML = `
        <div class="file-detail-header">
            <div class="file-detail-icon">${file.type === 'showcase' ? '🎭' : '📜'}</div>
            <div class="file-detail-info">
                <h2>${file.title}</h2>
                <p class="file-detail-author">👤 ${file.authorName}</p>
                <p class="file-detail-type">${file.type === 'showcase' ? 'Ko\'rgazma' : 'Me\'yoriy hujjat'}</p>
            </div>
        </div>

        <div class="file-detail-description">
            <h3>📋 Tavsif</h3>
            <p>${file.description || 'Tavsif kiritilmagan'}</p>
        </div>

        <div class="file-detail-meta">
            <span>📁 ${file.fileName}</span>
            <span>📦 ${Math.round(file.fileSize / 1024)} KB</span>
            <span>📅 ${new Date(file.createdAt).toLocaleDateString('uz-UZ')}</span>
        </div>

        <div class="file-detail-actions">
            <button class="file-like-btn ${hasLiked ? 'liked' : ''}" onclick="toggleFileLike(${fileId}, '${username}')">
                ${hasLiked ? '❤️' : '🤍'} ${likes} Like
            </button>
            <button class="file-download-btn-detail" onclick="downloadFile(${fileId}, '${username}')">
                ⬇️ Yuklab olish
            </button>
        </div>

        <div class="file-comments-section">
            <h3>💬 Fikrlar (${comments.length})</h3>
            
            <div class="add-comment">
                <textarea id="new-comment-${fileId}" placeholder="Fikringizni bildiring..." rows="3"></textarea>
                <button class="add-comment-btn" onclick="addFileComment(${fileId}, '${username}')">📤 Yuborish</button>
            </div>

            <div class="comments-list" id="comments-list-${fileId}">
                ${comments.length > 0 ? comments.map(comment => `
                    <div class="comment-item">
                        <div class="comment-header">
                            <span class="comment-author">👤 ${comment.authorName}</span>
                            <span class="comment-date">${new Date(comment.createdAt).toLocaleDateString('uz-UZ')}</span>
                        </div>
                        <p class="comment-text">${comment.text}</p>
                    </div>
                `).join('') : '<p class="no-comments">Hali fikrlar yo\'q. Birinchi bo\'lib fikr bildiring!</p>'}
            </div>
        </div>
    `;

    openModal('file-detail');
}

function toggleFileLike(fileId, username) {
    if (!currentUser) {
        alert('Avval tizimga kiring!');
        return;
    }

    // localStorage dan fresh ma'lumotni olish
    const freshLikes = JSON.parse(localStorage.getItem('attestation_file_likes')) || {};
    
    const key = `${username}_${fileId}`;
    const usersKey = `${key}_users`;

    if (!freshLikes[key]) freshLikes[key] = 0;
    if (!freshLikes[usersKey]) freshLikes[usersKey] = [];

    const hasLiked = freshLikes[usersKey].includes(currentUser.username);

    if (hasLiked) {
        // Unlike
        freshLikes[key]--;
        freshLikes[usersKey] = freshLikes[usersKey].filter(u => u !== currentUser.username);
    } else {
        // Like
        freshLikes[key]++;
        freshLikes[usersKey].push(currentUser.username);
    }

    // Global o'zgaruvchini yangilash
    Object.assign(fileLikes, freshLikes);
    localStorage.setItem('attestation_file_likes', JSON.stringify(freshLikes));
    
    // Refresh the modal and update the files database
    openFileDetail(fileId, username);
    
    // Update files database in background if it's the active view
    if (activeMainView === 'files-database') {
        setTimeout(() => renderFilesDatabase(), 100);
    }
}

function addFileComment(fileId, username) {
    if (!currentUser) {
        alert('Avval tizimga kiring!');
        return;
    }

    const textarea = document.getElementById(`new-comment-${fileId}`);
    const commentText = textarea.value.trim();

    if (!commentText) {
        alert('Iltimos, fikringizni kiriting!');
        return;
    }

    // localStorage dan fresh ma'lumotni olish
    const freshComments = JSON.parse(localStorage.getItem('attestation_file_comments')) || {};
    
    const key = `${username}_${fileId}`;
    if (!freshComments[key]) freshComments[key] = [];

    const comment = {
        id: Date.now(),
        authorUsername: currentUser.username,
        authorName: currentUser.fullname || currentUser.username,
        text: commentText,
        createdAt: new Date().toISOString()
    };

    freshComments[key].push(comment);
    
    // Global o'zgaruvchini yangilash
    Object.assign(fileComments, freshComments);
    localStorage.setItem('attestation_file_comments', JSON.stringify(freshComments));

    // Refresh the modal and update the files database
    openFileDetail(fileId, username);
    
    // Update files database in background if it's the active view
    if (activeMainView === 'files-database') {
        setTimeout(() => renderFilesDatabase(), 100);
    }
}

function downloadFile(fileId, username) {
    const files = userFiles[username] || [];
    const file = files.find(f => f.id === fileId);

    if (!file) {
        alert('Fayl topilmadi!');
        return;
    }

    const link = document.createElement('a');
    link.href = file.fileData;
    link.download = file.fileName;
    link.click();
}

// ==================== ARTICLE MANAGEMENT ====================

function openArticleModal() {
    if (!currentUser) {
        alert('Avval tizimga kiring!');
        return;
    }
    openModal('article');
}

function saveArticle(event) {
    event.preventDefault();

    const title = document.getElementById('article-title').value;
    const category = document.getElementById('article-category').value;
    const content = document.getElementById('article-content').value;

    const articleData = {
        id: Date.now(),
        username: currentUser.username,
        authorName: currentUser.fullname || currentUser.username,
        title: title,
        category: category,
        content: content,
        createdAt: new Date().toISOString()
    };

    if (!userArticles[currentUser.username]) {
        userArticles[currentUser.username] = [];
    }
    userArticles[currentUser.username].push(articleData);
    localStorage.setItem('attestation_articles', JSON.stringify(userArticles));

    alert('Maqola muvaffaqiyatli saqlandi!');
    closeModal('article');
    document.getElementById('article-form').reset();
    
    // Portfolio ko'rinishini yangilash
    if (viewingUsername === currentUser.username) {
        loadPortfolioDisplay();
    }

    return false;
}

// ==================== POST MANAGEMENT ====================

function openPostModal() {
    if (!currentUser) {
        alert('Avval tizimga kiring!');
        return;
    }
    openModal('post');
}

function savePost(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    const postData = {
        id: Date.now(),
        username: currentUser.username,
        authorName: currentUser.fullname || currentUser.username,
        title: title,
        content: content,
        createdAt: new Date().toISOString()
    };

    if (!userPosts[currentUser.username]) {
        userPosts[currentUser.username] = [];
    }
    userPosts[currentUser.username].push(postData);
    localStorage.setItem('attestation_posts', JSON.stringify(userPosts));

    alert('Post muvaffaqiyatli nashr qilindi!');
    closeModal('post');
    document.getElementById('post-form').reset();
    
    // Portfolio ko'rinishini yangilash
    if (viewingUsername === currentUser.username) {
        loadPortfolioDisplay();
    }

    return false;
}