var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [];
var computerChoices = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z"];
var letterToGuess = null; 

  var letterChosen = function() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};
letterToGuess = letterChosen()
console.log(letterToGuess)

document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase(); 

console.log(userGuess);

  if (userGuess === letterToGuess) {
    wins++;
    guessesLeft = 9;
    userGuess = [];
  }

  else if (userGuess != letterToGuess) {
    guessesLeft --;
  }

  else if (guessesLeft === 0) {
    guessesLefts = 9;
    losses ++;
    userGuess = [];
  }
}