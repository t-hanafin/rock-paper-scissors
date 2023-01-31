// alert("This is working")

// This function chooses rock, paper, or scissors at random.
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (3 - 0) ) + 0;

    if (computerChoice == 0) {
        return "R";
    } else if (computerChoice == 1) {
        return "P";
    } else {
        return "S";
    }

}

