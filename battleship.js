// define variables
let randomLocation = Math.floor(Math.random() * 5);
let location1 = randomLocation;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let lastGuess = null;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
  // ask user for imput
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

  // convert the input to number
  guess = Number(guess);

  // check if the input is valid
  if (isNaN(guess) || guess < 0 || guess > 6) {
    alert("Please enter a valid cell number");
  } else if (guess === lastGuess) {
    alert("You already guessed that number! Try a different one.");
  } else {
    guesses++;
    lastGuess = guess;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits++;

      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}

let stats =
  "You took " +
  guesses +
  " guesses to sink the battleship which means your shooting accuracy was " +
  3 / guesses;
alert(stats);
