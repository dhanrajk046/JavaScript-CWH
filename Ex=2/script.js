const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const choices = ["S","W","G"];

r1.question("Enter S for Snake, W for Water, or G for Gun: ",(userInput) => {
    let user = userInput.toUpperCase();

    if (!choices.includes(user)) {
        console.log("Invalid choice! please enter S, W, or G.");
        r1.close();
        return;
    }

    // Generate random choice for computer
    let computer = choices[Math.floor(Math.random() * choices.length)];

    console.log("Computer choose:", computer);

    // Game logic
    if(user === computer) {
        console.log("Draw!");
    } 
    else if(
        (user === "S" && computer === "W") || (user === "W" && computer === "G") || (user === "G" && computer === "S")
    ) {
        console.log("You win!");
    }
    else {
        console.log("You Lose!");
    }
    r1.close();
});

// How the Snake-Water-Gun Game works - 5 Points

// 1. Takes user input: The program uses Node.js readlines to ask the user to enter S, W, or G.

// 2. Generate computer choice: The computer randomly selects S, W, or G using Math.random().

// 3. Validates the input: The program checks whether the user entered a valid choice. If not, it displays an error message.

// 4. Compares the choices: The program applies the game rules: Snake beats Water, Water beats Gun, and gun beats Snake. If both choices are the same, it is a draw.

// 5. Displays the result: Finally, the program prints "You Win!", "You Lose!", or "Draw!" in the Node.js terminal and closes the input interface.