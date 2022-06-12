// 

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

    switch (playerSelection) {
        case 'Rock':
            if (computerSelection = 'Rock') {
                return console.log("It's A Tie!");
            } else if (computerSelection = 'Paper') {
                return console.log("You Lose!");
            } else if (computerSelection = 'Scissors') {
                return console.log("You Win!");
            }
            console.log("Case Rock")
            break;

        case 'Paper':
            if (computerSelection = 'Rock') {
                return console.log("You Win");
            } else if (computerSelection = 'Paper') {
                return console.log("It's A Tie!");
            } else if (computerSelection = 'Scissors') {
                return console.log("You Lose!");
            }
            console.log("Case Paper")
            break;


        case 'Scissors':
            if (computerSelection = 'Rock') {
                return console.log("You Lose!");
            } else if (computerSelection = 'Paper') {
                return console.log("You Win!");
            } else if (computerSelection = 'Scissors') {
                return console.log("It's A Tie!");
            }
            console.log("Case Scissors")
            break;

    }
}

playRound()

