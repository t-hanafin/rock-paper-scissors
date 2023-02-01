

// This function chooses rock, paper, or scissors at random and assigns that choice to the computer.

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


// This function plays a single round of rock, paper, scissors.

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    result = playerSelection + computerSelection;

    winner = undefined;

    switch (result) {
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            winner = 0;
//            return(`It's a tie because we both chose ${playerSelection}.`);
            break;
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            winner = 1;
//            return(`You win because ${playerSelection} beats ${computerSelection}!`);
            break;
        default:
            winner = 2;
//            return(`I win because ${computerSelection} beats ${playerSelection}!`);
            break;
    }
}

//

function getPlayerChoice() {

    var playerChoice = prompt("rock paper scissors MATCH! ", "rock");
    
    return playerChoice.toLowerCase();
    
}

// This function plays a first-to-five round of rock, paper, scissors.

function game() {

    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {

        var computerSelection = getComputerChoice();
    
        var playerSelection = getPlayerChoice();

        playRound(playerSelection, computerSelection);
        
        if (winner == 1) {
            playerWins += 1;
            alert(`Your ${playerSelection} beats my ${computerSelection}! The score is now ${playerWins} for you and ${computerWins} for me.`);
        } else if (winner == 2) {
            computerWins += 1;
            alert(`My ${computerSelection} beats your ${playerSelection}! The score is now ${playerWins} for you and ${computerWins} for me.`);
        } else if (winner == 0) {
            alert(`We both chose ${playerSelection}. The score is still ${playerWins} for you and ${computerWins} for me.`);
        }

    }

    if (computerWins > playerWins) {
        alert(`Final result: I won, ${computerWins} games to ${playerWins}.`);
    } else if (computerWins < playerWins) {
        alert(`Final result: you won, ${playerWins} games to ${computerWins}.`);
    }

}


game();