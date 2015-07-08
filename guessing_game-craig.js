
var Game = function() {
  this.score = 0;
  this.scientists = ["b", "d"];
  this.guess = function(){
  for (var i = 0; i < this.scientists.length; i++) {
  this.scientists[i] = prompt("Who is scientist #" + (i+1) + "?").toUpperCase();
    }
  }
}


var craig = new Game();
craig.guess()
  if (craig.scientists[0] == "FEYNMAN" || craig.scientists[0] == "RICHARD FEYNMAN") {
  craig.score+=1;
  }
  if (craig.scientists[1] == "EINSTEIN" || craig.scientists[1] == "ALBERT EINSTEIN") {
  craig.score += 1;
  }
alert("You got " + craig.score + "points out of 2!!!  Scientist #1 was Richard Feynman.  Scientist #2 was Albert Einstein.");

Game();

// Alex's stuff above.
//var scientists = ["scientist_1", "scientist_2"];







