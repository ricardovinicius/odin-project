function getComputerChoice() {
    let random =  Math.floor(Math.random() * 3);

    if (random == 0) { return 'rock'; }
    else if (random == 1) { return 'paper'; }
    else { return 'scissors'; }
}

// 1: win 0: tie -1: lose
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log("You win");
        return 1;
    }
    else if (playerSelection == computerSelection) {
        console.log("You tie");
        return 0;
    }
    else {
        console.log("You lose");
        return -1;
    }
}

function playGame() {
    let score = 0;
    let playerSelection = "";

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper or scissors?");
        computerSelection = getComputerChoice();
        score += playRound(playerSelection, computerSelection);

        console.log(`Debug: 
        playerSelection: ${playerSelection}
        computerSelection: ${computerSelection}`);
    }

    score > 0 ? console.log("You won the game") : console.log("Computer won the game");
}


playGame();

