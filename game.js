let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    let choice = null; 
    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("Rock, paper, or scissors?").toLowerCase();
    }

    return choice;
}

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if(computerChoice === humanChoice){
        return playRound();
    } else if(humanChoice === "rock" && computerChoice === "scissors" || 
              humanChoice === "scissors" && computerChoice === "paper" ||
              humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        let winString = "You win! " + humanChoice + " beats " + computerChoice;
        console.log(winString);
        return winString;
    } else {
        computerScore++;
        let lossString = "You lose! " + computerChoice + " beats " + humanChoice;
        console.log(lossString);
        return lossString;
    }
} 

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++){
        playRound();
    }

    if(humanScore > computerScore){
        return "You win! " + humanScore + " to " + computerScore;
    } else {
        return "You lose! " + computerScore + " to " + humanScore;
    }
    
}