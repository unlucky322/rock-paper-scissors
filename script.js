let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function getComputerChoice() {
    values = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return values[Math.floor(Math.random() * values.length)];
}


function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = ''
    if ((playerSelection == 'rock' && (computerSelection == 'scissors' || computerSelection == 'lizard')) || 
        (playerSelection == 'paper' && (computerSelection == 'rock' || computerSelection == 'spock')) || 
        (playerSelection == 'scissors' && (computerSelection == 'paper' || computerSelection == 'lizard')) || 
        (playerSelection == 'lizard' && (computerSelection == 'spock' ||    computerSelection == 'paper')) || 
        (playerSelection == 'spock' && (computerSelection == 'rock' || computerSelection == 'scissors'))) {

        playerScore += 1;
        result = ("You won! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) + "<br>Player score: " + playerScore + " Computer score: " + computerScore);
        
        if (playerScore == 5) {
            result = "<br><br>Congratulations! You won!"
            restartMessage()
        }

    } else if (playerSelection == computerSelection) {
        result = "Tie! Both player choice " + capitalizeFirstLetter(playerSelection) + "<br>Player score: " + playerScore + " Computer score: " + computerScore;
        
    } else {
        computerScore += 1;
        result = ("Computer won! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(playerSelection) + "<br>Player score: " + playerScore + " Computer score: " + computerScore);

        if (computerScore == 5) {
            result += "<br><br>Computer won! Better luck next time!"
            restartMessage()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}
let restartMessage = () => {
    const restart = document.getElementById('restartMsg')
    restart.textContent = 'Press F5 if you want to play again'
    return
}

function capitalizeFirstLetter (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

// const btn = document.querySelectorAll("button");
// btn.forEach(button => {
//     button.addEventListener('click', () => {
//         playRound(button.value)
//     })
// })

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const lizardBtn = document.getElementById('lizard')
const spockBtn = document.getElementById('spock')
const disableButtons = document.getElementsByClassName('disable')

rockBtn.addEventListener('click', () => playRound('rock'))
paperBtn.addEventListener('click', () => playRound('paper'))
scissorsBtn.addEventListener('click', () => playRound('scissors'))
lizardBtn.addEventListener('click', () => playRound('lizard'))
spockBtn.addEventListener('click', () => playRound('spock'))

// Modal window did not do it 
// just find this code
// just want a modal window
const modalTrigger = document.getElementsByClassName("trigger")[0]

const windowInnerWidth = document.documentElement.clientWidth
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth)

const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalActive = document.getElementsByClassName("modalActive")[0]
const modalClose = document.getElementsByClassName('modalClose')[0]

function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}
bodyMargin()

modalTrigger.addEventListener('click', () => {
    modalBackground.style.display = 'block'

    if (windowInnerWidth >= 1366) {
        bodyMargin()
    }
    modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)"
})

modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none"
    if (windowInnerWidth >= 1366) {
        bodyMargin()
    }
})

modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none"
        if (windowInnerWidth >= 1366) {
            bodyMargin()
        }
    }
})