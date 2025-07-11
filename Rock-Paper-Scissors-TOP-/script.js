// Global Variables for keeping track of score 
let playerScore;
let computerScore;
let message;

// Function to get the player's choice after a button click
function playerSel() {
  // Create a Promise that resolves when a button is clicked
  return new Promise((resolve, reject) => {
    // Get references to the buttons
    const rockBtn = document.getElementById('rockBtn');
    const paperBtn = document.getElementById('paperBtn');
    const scissorsBtn = document.getElementById('scissorsBtn');

    // Function to handle button click
    function handleClick(choice) {
      // Remove event listeners after a choice is made
      rockBtn.removeEventListener('click', handleRockClick);
      paperBtn.removeEventListener('click', handlePaperClick);
      scissorsBtn.removeEventListener('click', handleScissorsClick);
      // Resolve the Promise with the chosen option
      resolve(choice);
    }

    // Event listeners for each button
    function handleRockClick() {
      handleClick('rock');
    }

    function handlePaperClick() {
      handleClick('paper');
    }

    function handleScissorsClick() {
      handleClick('scissors');
    }

    // Attach event listeners to the buttons
    rockBtn.addEventListener('click', handleRockClick);
    paperBtn.addEventListener('click', handlePaperClick);
    scissorsBtn.addEventListener('click', handleScissorsClick);
  });
}

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  const items = choice[Math.floor(Math.random() * choice.length)];
  return items;
}

function logic(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a draw 🤝";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose mate 🤡";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win 🏆";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win 🏆";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win 🏆";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose mate 🤡";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose mate 🤡";
  }
}

async function gameplay() {
  let playerChoice = await playerSel();
  let computerChoice = getComputerChoice()
  let output = logic(playerChoice, computerChoice)
  console.log(output);
  let msg = output;
  let list = document.getElementById('list');
  // Create a new list item element
  let newItem = document.createElement('li');
  // Set the content of the new list item to the contents of the msg variable
  newItem.textContent = msg;
  // Append the new list item to the existing numbered list
  list.appendChild(newItem);
  }

async function gameplayLoop() {
  // Keep running the game loop indefinitely
  while (true) {
    await gameplay(); // Wait for player input
  }
}

// Start the game loop
gameplayLoop();
