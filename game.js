let humanScore = 0;
let computerScore = 0;

const result = document.querySelector(".results");
const rockButton = document.querySelector("ul .rock-button");
const paperButton = document.querySelector("ul .paper-button");
const scissorsButton = document.querySelector("ul .scissors-button");

rockButton.addEventListener("click", () => {
    playRound("rock");
});

paperButton.addEventListener("click", () => {
    playRound("paper");
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors");
});

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice === 1){
        return "rock";
    } else if(choice === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    let roundResultString = "";

    if(computerChoice === humanChoice){
        roundResultString = "You both chose " + computerChoice + "! Round tied.";
    } else if(humanChoice === "rock" && computerChoice === "scissors" || 
              humanChoice === "scissors" && computerChoice === "paper" ||
              humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        roundResultString = "You win the round! " + 
        humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        roundResultString = "You lose the round! " + 
        computerChoice + " beats " + humanChoice;
    }
    
    if(computerScore < 3 && humanScore < 3){
        result.textContent = roundResultString + "\nYour Score: " +
        humanScore + " Computer Score: " + computerScore;
    } else if(computerScore === 3){
        result.textContent = "You lose the game! " + computerScore + " to " +
        humanScore;
        resetScores();
    } else {
        result.textContent = "You win the game! " + humanScore  + " to " +
        computerScore;
        resetScores();
    }
} 

function resetScores(){
    humanScore = 0;
    computerScore = 0;
}


