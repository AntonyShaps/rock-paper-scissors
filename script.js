const listOfChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return listOfChoices[Math.floor(Math.random()*listOfChoices.length)];
}



function playRound(playerSelection){
    var computerSelection = getComputerChoice();
    var draw = `buddy, it's a draw! ${playerSelection} can't beat ${computerSelection}`;
    var win = `buddy, you have won! ${playerSelection} beats ${computerSelection}`;
    var lose = `buddy, you have lost! ${playerSelection} is beaten by ${computerSelection}`;
    if (playerSelection === computerSelection) {
        return draw;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return win;
    } else if (playerSelection === "paper" && computerSelection ==="rock" ) {
        return win;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return win;
    } else {
        return lose;
    }
}


const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')


rock.addEventListener('click', () => {
    console.log(playRound('rock'));  // Logs result to console
});

paper.addEventListener('click', () => {
    console.log(playRound('paper'));  // Logs result to console
});

scissors.addEventListener('click', () => {
    console.log(playRound('scissors'));  // Logs result to console
});
