var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];
var computerChoices = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z"];
var letterToGuess = null; 

  var letterChosen = function() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};
letterToGuess = letterChosen()
console.log(letterToGuess)

document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase(); 

  if (userGuess === letterToGuess) {
    wins++;
    
    guessesLeft = 9;
    userGuesses = [];
    letterToGuess = letterChosen(); 
  } else  {
    guessesLeft --;
    userGuesses.push(userGuess)
  }

  if (guessesLeft === 0) {
    guessesLeft = 9;
    losses ++;
    userGuesses = [];
  }

var html = "<p>Can you guess the letter I am thinking of?</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + guessesLeft + "</p>" +
"<p>Your Guesses so far: " + userGuesses.join() + "</p>";

  document.getElementById('game').innerHTML = html;
}


  


  