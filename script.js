const listOfChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return listOfChoices[Math.floor(Math.random()*listOfChoices.length)]
}