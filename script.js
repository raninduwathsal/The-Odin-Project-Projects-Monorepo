// Global Variables for keeping track of score 

let counter;
let computerSelection;
let playerSelection;
//initalize score counter for player and computer
let playerScore = 0;
let computerScore = 0;
// setup a variable for game result
let result;
//set variable to allow result of playGame function to be used to calculate score
let message;
// ask computer for a choice rock, paper or scissors

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
  
    const items = choice[Math.floor(Math.random() * choice.length)];
    return items;
  }

// get the player input convert it to lowercase

function playerSel() {
    let choice = prompt(" please enter rock, paper or scissors");
    playChoice = choice.toLowerCase();
    return playChoice;
}

function playFive() {
    
    for (counter = 0; counter <= 5; counter++){
      if (counter < 5) {
        playerSelection = playerSel();  
        computerSelection = getComputerChoice();
        console.log(logic(playerSelection, computerSelection));

      } else if (counter = 5) {
        
        if (computerScore < playerScore) {
          console.log("Player wins !");
        } else 
          console.log("Computer Wins");
      }      
    } 
  } 
  function logic(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
      return "Its a draw 🤝";
    }
  
    else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      return "You lose mate 🤡";
    }
  
    else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "You win 🏆";
    }
  
    else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      return "You win 🏆";
    }
  
    else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "You win 🏆";
    }
  
    else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      return "You lose mate 🤡";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      return "You lose mate 🤡";
    }
  }
  playFive()