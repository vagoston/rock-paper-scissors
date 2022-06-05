const options = ["Rock", "Paper", "Scissors"]
let computerPlay = () => options[Math.floor(Math.random() * options.length)];

function playRound(playerSelection, computerSelection) {
    let capitalize = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()

    playerSelection = capitalize(playerSelection);
    let playerWins = () => {
        if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")){
                return true;
            }
        return false;
    }


    if (playerSelection === computerSelection) return "It's a draw!";
    else if (playerWins()) return `You win! ${playerSelection} beats ${computerSelection}` 
    else return `You lose! ${computerSelection} beats ${playerSelection}.`
}
  
  function game() {
      for (let index = 0; index < 5; index++) {
          playerSelection = prompt("Rock, Paper, Scissors, shoot!")
          console.log(playRound(playerSelection, computerPlay()))
      }
  }
  game();