// 
let playerScore = 0
let computerScore = 0

function computerPlay() {
    // randomly return Rock Paper or Scissors
    random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0: return "Rock"

        case 1: return "Paper"

        case 2: return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    //prompt playerSelection
    //call computerPlay to get computerSelection
    //compare the two and determine the winner
    playerSelection = prompt("Enter 'Rock' 'Paper' or 'Scissors'");
    computerSelection = computerPlay();

    console.log("Your " + playerSelection + " Vs. Opponent's " + computerSelection)

    if (playerSelection == 'Rock' && (computerSelection == 'Scissors')
        || (playerSelection == 'Paper') && (computerSelection == 'Rock')
        || (playerSelection == 'Scissors') && (computerSelection == 'Paper')) {
        playerScore++;
        return console.log("You Win! Score: You " + playerScore + " Cpu " + computerScore);

    } else if (playerSelection == 'Rock' && (computerSelection == 'Paper')
        || (playerSelection == 'Paper') && (computerSelection == 'Scissors')
        || (playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
        computerScore++;
        return console.log("You Lose! Score: You " + playerScore + " Cpu " + computerScore);
    } else if (playerSelection == 'Rock' && (computerSelection == 'Rock')
        || (playerSelection == 'Paper') && (computerSelection == 'Paper')
        || (playerSelection == 'Scissors') && (computerSelection == 'Scissors')) {
        return console.log("You Tie! Score: You " + playerScore + " Cpu " + computerScore)
    } else {
        return console.log("Invalid Input!")
    }
}