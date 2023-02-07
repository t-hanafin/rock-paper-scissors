let playerTotal = 0;
let computerTotal = 0;

// This accepts r, p, or s as player input. 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerTotal < 5 && computerTotal < 5) {
            playRound(button.id);
        } else {
            playerScore.textContent = "The game is done, reload page to play again.";
            computerScore.textContent = "";
        }
      });
    });

// Populates the player's score box.

const results = document.querySelector(".results");
const playerScore = document.createElement('div');
playerScore.classList.add('content');
results.appendChild(playerScore);

// Populates the computer's score box. 

const computerScore = document.createElement('div');
computerScore.classList.add('content');
results.appendChild(computerScore);

// Populates the final result box.

const finalResult = document.createElement('div');
finalResult.classList.add('content');
results.appendChild(finalResult);

// Gets the computer's choice of r, p, or s.

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (3 - 0) ) + 0;

    if (computerChoice == 0) {
        computerChoice = "rock";
        return computerChoice;
    } else if (computerChoice == 1) {
        computerChoice = "paper";
        return computerChoice;
    } else {
        computerChoice = "scissors";
        return computerChoice;
    }
}

// Plays a single round of r, p, s.

function playRound(playerSelection) {
    var computerSelection = getComputerChoice();
    roundResult = playerSelection + computerSelection;
    console.log(roundResult);
    switch (roundResult) {
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            tallyResults("0"); // It's a tie. Change this and the two below to tallyResults(0)
            break;
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            tallyResults("1"); // Player wins.
            break;
        default:
            tallyResults("2"); // Computer wins. 
            break;
    }
}

// Keeps a tally of round-results. 

function tallyResults(winner) {
    console.log(winner);
    switch (winner) {
        case "0":
            displayScore(playerTotal, computerTotal);
            break;
        case "2":
            playerTotal += 1;
            displayScore(playerTotal, computerTotal);    
            break;
        case "1":
            computerTotal += 1;
            displayScore(playerTotal, computerTotal);
            break;
    }
}

// Displays the current score and the final score if the game is finished.

function displayScore(playerTotal, computerTotal) {
    if (playerTotal < 5 && computerTotal < 5) {
        playerScore.textContent = `You: ${playerTotal}`;
        computerScore.textContent = `Me: ${computerTotal}`;
    } else if (playerTotal > computerTotal) {
        finalResult.textContent = `You win, ${playerTotal} to ${computerTotal}.`
    } else if (computerTotal > playerTotal) {
        finalResult.textContent = `I win, ${computerTotal} to ${playerTotal}.`
    }
}



