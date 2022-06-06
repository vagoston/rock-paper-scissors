let resultField = document.querySelector(".result");
let statsField = document.querySelector(".stats");
let historyField = document.querySelector(".history");
let firstGamePlayed = false;
let timeStamp;

let stats = { 'draw': 0, 'player': 0, 'computer': 0 };

const options = ["Rock", "Paper", "Scissors"];
let computerPlay = () => options[Math.floor(Math.random() * options.length)];

function playRound(playerSelection, computerSelection) {
    let capitalize = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()

    playerSelection = capitalize(playerSelection);
    let playerWins = () => {
        if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) {
            return true;
        }
        return false;
    }


    if (playerSelection === computerSelection) {
        stats['draw'] += 1;
        return `It's a draw! Both played ${playerSelection}`;
    }
    else if (playerWins()) {
        stats['player'] += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        stats['computer'] += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        playerSelection = prompt("Rock, Paper, Scissors, shoot!")
        console.log(playRound(playerSelection, computerPlay()))
    }
}


function clikListener(option) {
    if (firstGamePlayed) {
        let oldRecord = document.createElement('div');
        oldRecord.innerText = `${timeStamp.toLocaleTimeString()}: ${resultField.innerText}`;
        historyField.prepend(oldRecord);
    }
    firstGamePlayed = true;
    timeStamp = new Date();
    resultField.innerText = playRound(option, computerPlay());
    statsField.innerText = `Player: ${stats['player']}  Draw: ${stats['draw']} Computer: ${stats['computer']}`
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", e => clikListener(e.target.textContent));
});