
var ties = 0;
var wins = 0;
var losses = 0;

var computerChoices = ["r", "p", "s"];

var userChoice = document.getElementById("userSelection");
var computerChoice = document.getElementById("computerChoice");
var winsCount = document.getElementById("wins");
var lossesCount = document.getElementById("losses");
var tiesCount = document.getElementById("ties");
var reset = document.getElementById("reset");
var userInput = document.getElementById("userInput");


document.onkeyup = function (event) {
    var userGuess = (event.key).toLowerCase();
    var computerRandomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        if (((userGuess === "p") && (computerRandomChoice === "r")) || ((userGuess === "s") && (computerRandomChoice === "p")) || ((userGuess === "r") && (computerRandomChoice === "s"))) {
            wins++;
        } else if (userGuess === computerRandomChoice) {
            ties++;
        } else {
            losses++;
        }
        reset.textContent = "";
        userInput.textContent = "Please select from keys r,p,s ";
        userChoice.textContent = "You selected: " + userGuess;
        computerChoice.textContent = "Computer selected: " + computerRandomChoice;
        winsCount.textContent = "Wins: " + wins;
        lossesCount.textContent = "Losses: " + losses;
        tiesCount.textContent = "Ties: " + ties;
    } else {
        userInput.textContent = "";
        reset.textContent = "Please select from the keys r,p,s to play!!";
    }

}

