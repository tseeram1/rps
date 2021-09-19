function computerPlay() {
    let roll = Math.floor(Math.random() * 3);
    if (roll == 0) {
        return "rock";
    } else if (roll == 1){
        return "paper";
    } else {
        return "scissors";
    }   
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return "You both picked " + playerSelection + "!" + " its a DRAW!"
        
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You Lose! Paper beats Rock!";
        
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You Lose! Scissors beats Paper!"
        
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You Lose! Rock beats Scissors!"
        
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You Win! Rock beats Scissors!"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You Win! Paper beats Rock!"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You Win! Scissors beats Paper!";
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let choice = window.prompt("rock/paper/scissors", "ROCK").toLowerCase();
        
        console.log("choice >>>>>" + choice);
        console.log(playRound(choice, computerPlay()));
    }

}
game();