"strict";
//global variables for keeping track game progress

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// generate a random choice from computer

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
  
    const item = choice[Math.floor(Math.random() * choice.length)];
    return item;
}

// Game logic

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === computerSelection) {
      return "Its a draw 🤝";
    }
  
    if (playerSelection == "rock" && computerSelection === "paper") {
      computerScore++;
      return "You lose mate 🤡";
    }
  
    if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "You win 🏆";
    }
  
    if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      return "You win 🏆";
    }
  
    if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "You win 🏆";
    }
  
    if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      return "You lose mate 🤡";
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      return "You lose mate 🤡";
    }