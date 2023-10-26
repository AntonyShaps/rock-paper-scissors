const listOfChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return listOfChoices[Math.floor(Math.random()*listOfChoices.length)];
}



function playRound(){
    var playerSelection = prompt("Make your choice!").toLowerCase();
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

function game() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
}