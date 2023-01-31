// alert("This is working")

// This function chooses rock, paper, or scissors at random.
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

// Sets the player's selection to a default choice.

var playerSelection = "scissORS";

// Calls the computer selection function, which returns r, p, or s in the variable computerChoice.

var computerSelection = getComputerChoice();

// This function plays a round of RPS.

function playRPS(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    console.log(`Player chose ${playerSelection} and computer chose ${computerSelection}.`);


    result = playerSelection + computerSelection;

    console.log(result);

    switch (result) {
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            console.log(`It's a tie because we both chose ${playerSelection}.`);
            break;
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            console.log(`You win because ${playerSelection} beats ${computerSelection}!`);
            break;
        default:
            console.log(`I win because ${computerSelection} beats ${playerSelection}!`);
            break;

    }

}

console.log(playRPS(playerSelection, computerSelection));