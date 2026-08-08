// Generate a random number between 1 and 100
const readline = require("readline");

const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdiout
});

const randomNumber = Math.floor(Math.random() * 100) + 1;

let numberOfGuesses = 0;

function guessNumber() {
    r1.question("Guess the number between 1 and 100: ", (input) => {
        const guess = Number(input);
        numberOfGuesses++;

    if (guess === randomNumber) {
        console.log("Congratulations! You guessed the correct number.");
        console.log("Your score is:", numberOfGuesses);
        r1.close();
    }
    else if (guess > randomNumber)
    {
        console.log("Your guess is greater than the original number.");
        guessNumber();
    }
    else {
        console.log("Your guess is less than the original number.");
        guessNumber();
    }

    });
}

guessNumber();

// How it Works - 5 points

// 1. Generate a random number: Math.floor(Math.random() * 100) + 1 generate a number between 1 and 100.

// 2. Takes user input: Node.js readline is used to ask the user to enter their guess.

// 3. Counts the guesses: The numberofGuesses variable increases by 1 every time the user makes a guess.

// 4. Checks the guess: The program tells the user whether their guess is greater than, less than. or equal to the random number.

// 5. Ends when correct: When the user guesses correcly, the program displays their score and r1.close() terminates the input interfaces. 
