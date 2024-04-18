let computerSelection;
function getComputerChoice() {
    computerSelection = values[Math.floor(Math.random() * values.length)];
    return computerSelection
}

values = ['rock', 'paper', 'scissors'];
let playerSelection;
function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, scissors? What will you choice?")
    return playerSelection.toLowerCase()
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore++
            return "Computer won! " + "Score: " + playerScore + ":" + computerScore
        }
        else {
            playerScore++
            return "Player won! " + "Score: " + playerScore + ":" + computerScore
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++
            return "Computer won! " + "Score: " + playerScore + ":" + computerScore
        } else {
            playerScore++
            return "Player won! " + "Score: " + playerScore + ":" + computerScore
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            computerScore++
            return "Computer won! " + "Score: " + playerScore + ":" + computerScore
        } else {
            playerScore++
            return "Player won! " + "Score: " + playerScore + ":" + computerScore
        }
    }
}
