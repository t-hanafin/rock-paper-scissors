let playerTotal = 0;
let computerTotal = 0;
let ties = 0;
let playerSelection = "";
let computerSelection = "";

// This accepts r, p, or s as player input. 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerTotal < 5 && computerTotal < 5) {
            playerSelection = button.id;
            playRound(button.id);
        } else {
            score.textContent += "The game is done. Reload the page to play again.";
        }
      });
    });

// Populates the player's score box.

const results = document.querySelector(".results");
const score = document.createElement('div');
score.classList.add('content');
score.setAttribute('style', 'white-space: pre;');
results.appendChild(score);

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
    switch(winner) {
        case "0":
            ties += 1;
            displayScore(playerTotal, computerTotal, ties);
            break;
        case "2":
            playerTotal += 1;
            displayScore(playerTotal, computerTotal, ties);    
            break;
        case "1":
            computerTotal += 1;
            displayScore(playerTotal, computerTotal, ties);
            break;
    }
}

// Displays the current score and the final score if the game is finished.

function displayScore(playerTotal, computerTotal, ties) {
    if (playerTotal < 5 && computerTotal < 5)
        switch(roundResult) {
            case 'rockrock':
            case 'scissorsscissors':
            case 'paperpaper':
                score.textContent = `we just played round #${playerTotal + computerTotal + ties}.\r\n`;
                score.textContent += `we both chose ${playerSelection}.\r\n`;
                score.textContent += "so it's a tie.\r\n";
                score.textContent += `you have ${playerTotal} wins, i have ${computerTotal} wins, and there have been ${ties} ties.\r\n`;
                break;
            case 'paperrock':
                score.textContent = `we just played round #${playerTotal + computerTotal + ties}.\r\n`;
                score.textContent += `you chose paper and i chose rock.\r\n`;
                score.textContent += `you win because paper covers rock.\r\n`;
                score.textContent += `you have ${playerTotal} wins, i have ${computerTotal} wins, and there have been ${ties} ties.`;
                break;
            case 'scissorspaper':
                score.textContent = `we just played round #${playerTotal + computerTotal + ties}.\r\n`;
                score.textContent += `you chose scissors and i chose paper.\r\n`;
                score.textContent += `you win because scissors cut paper.\r\n`;
                score.textContent += `you have ${playerTotal} wins, i have ${computerTotal} wins, and there have been ${ties} ties.`;
                break;
            case 'rockscissors':
                score.textContent = `we just played round #${playerTotal + computerTotal + ties}.\r\n`;
                score.textContent += `you chose rock and i chose scissors.\r\n`;
                score.textContent += `you win because rock smashes scissors.\r\n`;
                score.textContent += `you have ${playerTotal} wins, i have ${computerTotal} wins, and there have been ${ties} ties.`;
                break;
            case 'rockpaper':
                score.textContent = `we just played round #${playerTotal + computerTotal + ties}.\r\n`;
                score.textContent += `you chose rock and i chose paper.\r\n`;
                score.textContent += `i win because paper covers rock.\r\n`;
                score.textContent += `you have ${playerTotal} wins, i have ${computerTotal} wins, and there have been ${ties} ties.`;
                break;
            case 'paperscissors':
                score.textContent = `we just played round #${playerTotal + computerTotal + ties}.\r\n`;
                score.textContent += `you chose paper and i chose scissors.\r\n`;
                score.textContent += `i win because scissors cut paper.\r\n`;
                score.textContent += `you have ${playerTotal} wins, i have ${computerTotal} wins, and there have been ${ties} ties.`;
                break;
            case 'scissorsrock':
                score.textContent = `we just played round #${playerTotal + computerTotal + ties}.\r\n`;
                score.textContent += `you chose scissors and i chose rock.\r\n`;
                score.textContent += `i win because rock smashes scissors.\r\n`;
                score.textContent += `you have ${playerTotal} wins, i have ${computerTotal} wins, and there have been ${ties} ties.`;
                break;
        } else if (playerTotal > computerTotal) {
            score.textContent = `here's the final result: you won, ${playerTotal} games to ${computerTotal}.\r\n`;
            score.textContent += `there were ${ties} interminable ties.\r\n`;
            score.textContent += `we played ${playerTotal + computerTotal + ties} rounds.\r\n`;
            score.textContent += `reload the page to play again.`;
            const buttons = document.getElementsByTagName("button");
            for (const button of buttons) {
              button.disabled = true;
            }    
        } else if (computerTotal > playerTotal) {
            score.textContent = `here's the final result: i won, ${computerTotal} games to ${playerTotal}.\r\n`;
            score.textContent += `there were ${ties} interminable ties.\r\n`;
            score.textContent += `we played ${playerTotal + computerTotal + ties} rounds.\r\n`;
            score.textContent += `reload the page to play again.`;
            const buttons = document.getElementsByTagName("button");
            for (const button of buttons) {
              button.disabled = true;
            }
        }
}