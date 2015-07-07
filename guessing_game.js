var scientists = ["scientist_1", "scientist_2"];
var score = 0;

for (var i = 0; i < scientists.length; i++) {
  scientists[i] = prompt("Who is scientist #" + (i+1) + "?").toUpperCase();
}
if (scientists[0] == "FEYNMAN" || scientists[0] == "RICHARD FEYNMAN") {
  score += 1
  console.log(score);
  }
if (scientists[1] == "EINSTEIN" || scientists[1] == "ALBERT EINSTEIN") {
  score += 1
  console.log(score);
  }

console.log(score);

alert("You got " + score + "points out of 2!!!  Scientist #1 was Richard Feynman.  Scientist #2 was Albert Einstein.");
