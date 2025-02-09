const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')


}
const questions = [
    {
        question: 'Um sistema de informação é desenvolvido como resposta um problema, ou conjunto de problemas, que uma organização enfrenta. O processo de resolução de problemas relativo ao desenvolvimento de sistemas envolve quatro etapas, organize em ordem sequencial de acontecimentos as etapas \n1 - Implementar a solução.\n2 - Escolher a melhor solução.\n3 - Definir e compreender o problema\n4 - Desenvolver ações alternativas.',

        answers: [
            { text: 'A	2,1,4,3.', correct: false },
            { text: 'B	4,3,1,2.', correct: false },
            { text: 'C	4,3,2,1.', correct: false },
            { text: 'D	3,4,2,1.', correct: true }
        ]

    },
    {
        question: '',
        answers: [
            { text: '//', correct: true },
            { text: '<!---->', correct: false },
            { text: '/**/', correct: false },
            { text: '#', correct: false }
        ]

    },

  
   
]