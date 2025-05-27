var score = document.getElementById("score");
var playerScore = 0;
var computerScore = 0;
var computerTotal = 0;
var playerTotal = 0;

// Gets user choice 
function userChoice(choice){
    changeImage("leftSide",choice)
    handleWinner(choice);
}

// Get Computer choice
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

// Handles all combos of rock paper scissors
function handleWinner(choice){
    let computerChoice = getComputerChoice();
    let userChoice = choice;
    changeImage("rightSide",computerChoice);
    if(computerChoice == "rock"){
        if(userChoice == "scissors"){
            computerScore++;
        }
        else if(userChoice == "paper"){
            playerScore++;
        }
    }
    else if(computerChoice == "scissors"){
        if(userChoice == "paper"){
            computerScore++;
        }
        else if(userChoice == "rock"){
            playerScore++;
        }
    }
    else{
        if(userChoice == "rock"){
            computerScore++;
        }
        else if(userChoice == "scissors"){
            playerScore++;
        }
    }
    if(computerScore == 5 || playerScore == 5){
        
        if(computerScore == 5){
            document.getElementById("score").innerHTML = "The computer has won!";
            computerTotal++;
        }
        else{
            document.getElementById("score").innerHTML = "The player has won, nice!!";
            playerTotal++;
        }
        playerScore = 0;
        computerScore = 0;
        document.getElementById("gameTracker").innerHTML = "Player: " + playerTotal + " Computer: " + computerTotal;
    }
    else{
        document.getElementById("score").innerHTML = playerScore + " - " + computerScore;
    }
}

// function that changes image
function changeImage(side,type){
    document.getElementById(side).src = "images/" + type + ".png";
}