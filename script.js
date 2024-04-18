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

function playGame() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    let finalScore = playerScore + " : " + computerScore;
    if (playerScore > computerScore) {
        computerScore = 0;
        playerScore = 0;
        return "Congratulations, you won! Final score: " + finalScore;
    }
    else {
        computerScore = 0;
        playerScore = 0;
        return "Better luck next time. Final score: " + finalScore
    }
    
}