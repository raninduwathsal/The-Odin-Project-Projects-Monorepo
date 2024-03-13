// Global Variables for keeping track of score 

let counter;
let computerSelection;
//initalize score counter for player and computer
let playerScore = 0;
let computerScore = 0;
// setup a variable for game result
let result;
//set variable to allow result of playGame function to be used to calculate score
let message;
// ask computer for a choice rock, paper or scissors

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    if (choice === 1) {
      return "rock";
     } else if (choice === 2) {
      return  "paper"; 
     } else (choice === 3) 
       return "scissors";
    }
// get the player input convert it to lowercase

function playerSelection() {
    let choice = prompt(" please enter rock, paper or scissors");
    playChoice = choice.toLowerCase();
}

function playFive() {
    
    for (counter = 0; counter <= 5; counter++){
      if (counter < 5) {
        playerSelection();  
        getComputerChoice();
        playGame();
        
        score();
      } else if (counter = 5) {
        
        if (computerScore < playerScore) {
          console.log("Player wins !");
        } else 
          console.log("Computer Wins");
      }
    
    // console.log(counter);
  
    } 
  } 
  