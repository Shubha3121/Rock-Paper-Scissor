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

function getHumanChoice(){

    let choice = prompt("Enter your choice: ");
    choice = choice.toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissor"){
        return choice;
    } else {
        console.log("Invalid choice. Please enter rock, paper, scissor.");
        return getHumanChoice();
    }
}

let compScore = 0, humanScore = 0;

function playRound(){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`You chose: ${humanChoice}`);

    if(computerChoice === humanChoice){
        console.log("It's a tie\n");
        compScore++;
        humanScore++;
    }else if(computerChoice === "rock" && humanChoice === "scissor" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissor" && humanChoice === "paper"){
        console.log("Computer wins this round!\n");
        compScore++;
    }else{
        console.log("You win this round!\n");
        humanScore++;
    }
}

function playGame() {
    let rounds = 5;
    while(rounds--){
        playRound();
    }
    console.log("Game over!");
    console.log(`Final Score - Computer: ${compScore}, You: ${humanScore}`);

    if(compScore > humanScore){
        console.log("Computer wins the game!");
    } else if(humanScore > compScore){
        console.log("You win the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();