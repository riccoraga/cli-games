// guessNumber.js
// A JS game created to guess a number in the CLI
const readline = require("readline"); // Read the CLI line

// Create an interface to perform inputs and outputs on the CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
console.log(randomNumber); // Just for debugging, you might want to remove this later

console.log('Guess the number Game. Insert a number or "Q/q" to Quit');
console.log("I am thinking of a number now...");

const cliQuestion = () => {
  rl.question("What number from 1 to 100 am I thinking? ", (answer) => {
    if (answer.toLowerCase() === "q") {
      console.log('Thank you for playing, Arrivederci Bevan');
      rl.close();
    } else {
      const guessNumber = parseInt(answer); // Parse the answer into an Integer number
      if (isNaN(guessNumber)) {
        console.log("Only numbers accepted.");
        cliQuestion();
      } else if (guessNumber < 1 || guessNumber > 100) {
        console.log("Only numbers between 1 and 100.");
        cliQuestion();
      } else {
        if (guessNumber === randomNumber) {
          console.log("That was INCREDIBLE!!!");
          console.log("WELL DONE");
          console.log('Arrivederci!!!');
          rl.close();
        } else {
          console.log(guessNumber < randomNumber ? 'Too low, try again!' : 'Too high, try again!');
          cliQuestion();
        }
      }
    }
  });
};

cliQuestion();



// Path : test-assignment-week2/cli-games/guess-number/
//C:/Users/ragaz/OneDrive/Documents/LaFossePrepWork/test-assignment-week2/cli-games/guess-number/guessNumber.js