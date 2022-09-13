// Create functions 
const startButton = document.getElementById('start-btn');
let timerCountdown = document.querySelector('timer');
const timerContainer = document.querySelector('#timer-placement');
const questionsContainer = document.querySelector('#questions-container');
const restartButton = document.querySelector('#restart');
const timerCount = document.querySelector('.countdown');
const questionsText = document.querySelector('.questions');
const answerButton = document.querySelector('.btn');

//let timedScore = [];
let shuffledQuestions, currentQuestion


startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started!')
    startButton.classList.add('hide');
    timerContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0;
    timerCountdown = '60';
    questionsContainer.classList.remove('hide');
    startTimer();
    setNextQuestion()
}

// Used example from mini project
function startTimer() {
    timer = setInterval(function () {
        document.querySelector('.countdown').innerHTML = '60';
        timerCountdown--;
        timerCount.textContent = timerCountdown;
        if (timerCount === 0) {
            clearInterval()
          } endGame();
        
    }, 1000);
}

function userAnswer() {
    const userButton = e.target
    const correct = userButton.dataset.correct
    lookingForAnswer(document.body, correct)
    Array.from(answerButton.children).forEach(button => {
        lookingForAnswer(button, button.dataset.correct)
    })
    
    }
    
    function lookingForAnswer(element, correct) {
        clearAnswers(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('incorrect')
        }
    }
    
    function clearAnswers(element) {
        element.classList.remove('correct')
        element.classList.remove('incorrect')
    }

function setNextQuestion() {
    showQuestions(shuffledQuestions[currentQuestion])
}

function showQuestions(question) {
    questionsText.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', userAnswer)
        answerButton.appendChild(button)
    })
}
function resetToStart () {
while(answerButton.firstChild) {
    answerButton.removeChild
    (answerButton.firstChild)
}
}


var questions = [
    {
        question: 'Which planet is the largest?',
        answers: [
            { text: 'Jupiter', correct: true },
            { text: 'Neptune', correct: false },
            { text: 'Saturn', correct: false },
            { text: 'Earth', correct: false }
        ]
    },
    {
        question: 'How many planets are there in the solar system?',
        answers: [
            { text: '4', correct: false },
            { text: '8', correct: true },
            { text: '15', correct: false },
            { text: '23', correct: false }
        ]
    },
    {
        question: 'What planet has the most moons?',
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Neptune', correct: false },
            { text: 'Saturn', correct: true },
            { text: 'Earth', correct: false }
        ]
    },
    {
        question: 'Which planet is closest to the Sun?',
        answers: [
            { text: 'Star', correct: false },
            { text: 'Uranus', correct: false },
            { text: 'Mercury', correct: true },
            { text: 'Venus', correct: false }
        ]
    }
];

function endGame() {
    console.log('game ended!')
    if (timer == 0) {
        
    }
}



