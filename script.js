"strict";
// generate a random choice from computer
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
  
    const item = choice[Math.floor(Math.random() * choice.length)];
    return item;
  }