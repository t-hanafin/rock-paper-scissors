

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

function game() {

    let wins = 0;
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 3 && computerWins < 3) {

        var computerSelection = getComputerChoice();
    
        var playerSelection = prompt("rock paper scissors MATCH! ", "rock");
    
        playerSelection = playerSelection.toLowerCase();
    
        playRound(playerSelection, computerSelection);
    
        console.log(winner);
    
        if (winner == 1) {
            wins += 1;
            playerWins += 1;
            alert(`You win, ${playerSelection} beats ${computerSelection}! The score is now ${playerWins} for you and ${computerWins} for me.`);
        } else if (winner == 2) {
            wins += 1;
            computerWins += 1;
            alert(`I win, ${computerSelection} beats ${playerSelection}! The score is now ${playerWins} for you and ${computerWins} for me.`);
        } else if (winner == 0) {
            alert(`We both chose ${playerSelection}. The score is still ${playerWins} for you and ${computerWins} for me.`);
        }

    }

    if (computerWins > playerWins) {
        console.log(`Final result: I won, ${computerWins} games to ${playerWins}.`);
    } else if (computerWins < playerWins) {
        console.log(`Final result: you won, ${playerWins} games to ${computerWins}.`);
    }


}


console.log(game());