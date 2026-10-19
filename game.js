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





const rock = document.querySelector('.rock')
rock.addEventListener('click', (e) => {
    playRound('rock', getComputerChoice())
})


const paper = document.querySelector('.paper')
paper.addEventListener("click", (e) => {
    playRound('paper', getComputerChoice())
})

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', (e) => {
    playRound('scissors', getComputerChoice())
})



const result = document.querySelector('.result')
const user = document.querySelector('.user')
const computer = document.querySelector('.computer')

let humanScore = 0;
let computerScore = 0
function playRound(humanChoice, computerChoice){
    if(humanScore <5 && computerScore <5){

    
        if(humanChoice === computerChoice){
            result.textContent = "This is a draw no one wins!"
        }else if(humanChoice == 'rock' && humanChoice != computerChoice){
            if(computerChoice == 'scissors'){
                result.textContent = `You win Rock beats Scissors`
                checkScore(humanScore, computerScore)
            }else if(computerChoice == 'paper'){
                result.textContent = "You lose Paper beats Rock"
                computerScore += 1;
                checkScore(humanScore, computerScore)
            }
        }else if(humanChoice == 'paper' && humanChoice != computerChoice){
            if(computerChoice == 'rock'){
                result.textContent = "You win Paper beats Rock"
                humanScore += 1
                checkScore(humanScore, computerScore)
            }else if(computerChoice == 'scissors'){
                result.textContent = "You lose Scissors beats Paper";
                computerScore += 1;
                checkScore(humanScore, computerScore)
            }
        }else if(humanChoice == 'scissors' && humanChoice != computerChoice){
            if(computerChoice == 'paper'){
                result.textContent = `You win Scissors beats Paper`
                humanScore += 1
                checkScore(humanScore, computerScore)
            }else if(computerChoice == 'rock'){
                result.textContent = "You lose Rock beats Scissors"
                computerScore += 1
                checkScore(humanScore, computerScore)
            }
        }
        user.textContent = `Your score: ${humanScore}`
        computer.textContent = `Computer score: ${computerScore}`
    }
}

function checkScore(userScore, aiScore){
    if(userScore == 5){
        result.textContent = "You win!!!!!"
    }else if(aiScore == 5){
        result.textContent = "GAME OVER!! You lose"
    }
}





