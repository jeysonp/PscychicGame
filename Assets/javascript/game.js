var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [];
var computerChoices = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z"];

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var yourGuesses = document.getElementById("yourGuesses");

document.onkeyup = function(event) {
  var userGuess = event.key;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if (userGuess === computerGuess) {
    wins++;
  } else if 


  
};