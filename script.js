function getComputerChoice(){
    let choice = Math.random();
    
    if(choice < 0.34){
        return "rock";
    }
    else if(choice <= 0.67){
        return "paper";
    }
    else{
        return "scissor";
    }
}

let compScore = 0, humanScore = 0;

let rounds = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

const humanScoreText = document.getElementById("human-score");
const computerScoreText = document.getElementById("computer-score");

const result = document.getElementById("result");

rockBtn.addEventListener("click", function () {
    playRound("rock");
});

paperBtn.addEventListener("click", function () {
    playRound("paper");
});

scissorBtn.addEventListener("click", function () {
    playRound("scissor");
});

function playRound(humanChoice) {

    if (rounds === 5) {
        return;
    }

    rounds++;

    const computerChoice = getComputerChoice();

    if (computerChoice === humanChoice) {

        result.textContent =
            `Computer chose: ${computerChoice}\n
            You chose: ${humanChoice}\n
            It's a tie!`;

    }
    else if (
        (computerChoice === "rock" && humanChoice === "scissor") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissor" && humanChoice === "paper")
    ) {

        compScore++;

        result.textContent =
            `Computer chose: ${computerChoice}\n
            You chose: ${humanChoice}\n
            Computer wins this round!`;

    }
    else {

        humanScore++;

        result.textContent =
            `Computer chose: ${computerChoice}\n
            You chose: ${humanChoice}\n
            You win this round!`;

    }

    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = compScore;

    if (rounds === 5) {

        if (compScore > humanScore) {

            result.textContent += "\n\nComputer wins the game!";

        }
        else if (humanScore > compScore) {

            result.textContent += "\n\nYou win the game!";

        }
        else {

            result.textContent += "\n\nIt's a tie game!";

        }

    }
}