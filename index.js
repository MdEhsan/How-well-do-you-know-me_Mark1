var readLineSync = require("readline-sync")

const chalk = require("chalk")

var score = 0

var userName = readLineSync.question("Hi! What's your name? ")

console.log("Welcome! " + userName + " Do you know Md Ehsan? ")

var highScore = [{
    name: "irfan",
    score: 4
}, {
    name: "Ashish",
    score: 3
}]


function play(question, answer) {

    var userAnswer = readLineSync.question(question)

    if (userAnswer == answer) {
        console.log(chalk.blue("right"))
        score = score + 1
    } else {
        console.log("wrong!")
    }

    console.log("Your score: " + score)
    console.log("---------")
}

var questions = [{
    question: "what is my nickname? ",
    answer: "vicky"
}, {
    question: "in which state do i live? ",
    answer: " bihar"
}, {
    question: "where do i live? ",
    answer: "patna"
}, {
    question: "which is my favourite web series? ",
    answer: "moneyheist"
} , {
    question : "which is my favourite food?",
    answer : "biryani"
}
]

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
}


function showScores(){
    console.log('YAY! Your final score is: ' + score)
    console.log("check out the highest score, If your socre is more than current achievers. Tell me to update it.")
    highScores.map(score => console.log(score.name, " : ", score.score))
}
showScores()