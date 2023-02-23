//grabbing values from the broswer (DOM)
const userChoiceDisplay = document.getElementById("player-choice");
const browserChoiceDisplay = document.getElementById("browser-choice");
const endResult = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let browserChoice;
let result;

function generateBrowserChoice () {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        browserChoice = "ROCK";
    }
    if (randomNum === 2) {
        browserChoice = "PAPER";
    }
    if (randomNum === 3) {
        browserChoice = "SCISSORS";
    }

    browserChoiceDisplay.innerHTML = browserChoice;
}

function getResult () {
    if (userChoice == browserChoice) {
        result = "It's A Draw!";
    } else if (userChoice === "ROCK" && browserChoice === "SCISSORS") {
        result = "You Won! :D"
    } else if (userChoice === "ROCK" && browserChoice === "PAPER") {
        result = "You Lost! :("
    } else if (userChoice === "PAPER" && browserChoice === "SCISSORS") {
        result = "You Lost! :("
    } else if (userChoice === "PAPER" && browserChoice === "ROCK") {
        result = "You Won! :D"
    } else if (userChoice === "SCISSORS" && browserChoice === "PAPER") {
        result = "You Won! :D"
    } else if (userChoice === "SCISSORS" && browserChoice === "ROCK") {
        result = "You Lost! :("
    }

    endResult.innerHTML = result;
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateBrowserChoice();
    getResult();
}))