let playerScore = 0;
let computerScore = 0;
let playerSelection;

let computerSelection;
function getComputerChoice() {
    values = ['rock', 'paper', 'scissors'];
    return values[Math.floor(Math.random() * values.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = ''
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'papper')) {

        playerScore += 1;
        result = "You won! " + playerSelection + " beats " + computerSelection + "<br>Player score: " + playerScore + " Computer score: " + computerScore;
        
        if (playerScore == 5) {
            result = "Congratulations! You won!"
        }

    } else if (playerSelection == computerSelection) {
        result = "Tie! Both player choice " + playerSelection + "<br>Player score: " + playerScore + " Computer score: " + computerScore;
    } else {
        computerScore += 1;
        result = "Computer won! " + computerSelection + " beats " + playerSelection + "<br>Player score: " + playerScore + " Computer score: " + computerScore;

        if (computerScore == 5) {
            result = "Computer won! Better luck next time!"
        }
    }

    document.getElementById('result').innerHTML = result
    return
}
const btn = document.querySelectorAll("button");
btn.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value)
    })
})