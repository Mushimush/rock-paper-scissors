const choice = ["ROCK", "PAPER", "SCISSORS"];
let player=0;
let computer=0;




function computerPlay() {
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    }
    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        player ++;
    }
    if (
        (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK")
    ){
        computer ++;
    }
}
function game(){
    for (let i=0; i<5; i++){
        let playerSelection = prompt("Rock Paper or Scissors!");
        const computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    }
    if (player > computer){
        console.log("PLAYER WINS");
    }else {
        console.log("COMPUTER WINS");
    }
    
}



