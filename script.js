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



// This function plays a round of RPS.

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    result = playerSelection + computerSelection;

    winner = undefined;

    switch (result) {
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            winner = 0;
            return(`It's a tie because we both chose ${playerSelection}.`);
            break;
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            winner = 1;
            return(`You win because ${playerSelection} beats ${computerSelection}!`);
            break;
        default:
            winner = 2;
            return(`I win because ${computerSelection} beats ${playerSelection}!`);
            break;
    }
}

function game() {

    playerWins = 0;
    computerWins = 0;
    ties = 0;

    for (let i = 0; i < 5; i++) {

        var computerSelection = getComputerChoice();

        var playerSelection = prompt("rock paper scissors MATCH! ");

        playRound(playerSelection, computerSelection);

        console.log(winner);

        if (winner == 1) {
            playerWins += 1;
            alert(`You win, ${playerSelection} beats ${computerSelection}! The score is now ${playerWins} for you and ${computerWins} for me.`);
        } else if (winner == 2) {
            computerWins += 1;
            alert(`I win, ${computerSelection} beats ${playerSelection}! The score is now ${playerWins} for you and ${computerWins} for me.`);
        } else if (winner == 0) {
            alert(`We both chose ${playerSelection}. The score is now ${playerWins} for you and ${computerWins} for me.`);
            ties += 1;
        }

        
    }

    if (computerWins > playerWins) {
        console.log(`Final result: I won, ${computerWins} games to ${playerWins}.`);
    } else if (computerWins < playerWins) {
        console.log(`Final result: you won, ${playerWins} games to ${computerWins}.`);
    } else {
        console.log(`Final result: it's a ${playerWins} - ${computerWins} tie.`);
    }


}


console.log(game());