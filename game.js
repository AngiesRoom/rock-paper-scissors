function getComputerChoice(){
    const choice = Math.floor(Math.random() * (4 - 1) + 1);
    if(choice == 1){
        return 'rock';
    }else if(choice == 2){
        return 'paper';
    }else{
        return 'scissors'
    }
}

function getHumanChoice(){
    let choice = prompt("Pick your play:\n1.Rock\n2.Paper\n3.Scissors");
    return choice.toLowerCase();
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("The game is a draw no one wins");
    }else if(humanChoice == 'rock'){
        if(computerChoice == 'scissors'){
            console.log("You win Rock beats Scissors");
            humanScore += 1;
        }else{
            console.log("You lose Paper beats Rock");
            computerScore += 1;
        }
    }else if(humanChoice == 'paper'){
        if(computerChoice == 'scissors'){
            console.log("You lose Scissors beats Paper");
            computerScore += 1;
        }else{
            console.log("You win Paper beats Rock");
            humanScore += 1;
        }
    }else if(humanChoice == 'rock'){
        if(computerChoice == 'paper'){
            console.log("You lose Paper beats Rock");
            computerScore += 1;
        }else{
            console.log("You win Rock beats Scissors");
        }
    }
}




function playGame(){
    for(let i =1; i <=5; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(humanScore);
    console.log(computerScore);
}

playGame();
