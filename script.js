let leftSide = document.getElementById("leftSide");
let rightSide = document.getElementById("rightSide");
let score = document.getElementById("score");

function userChoice(choice){
    if(choice = "scissors"){
        
    }
    else if(choice = "rock"){

    }
    else{

    }
    handleWinner(choice);
}

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    if(rand == 2){
        return "rock";
    }
    else if(rand == 1){
        return "paper";
    }
    else{
        return "scissors"
    }
}

function handleWinner(choice){
    let computerChoice = getComputerChoice();
    let userChoice = choice;
}