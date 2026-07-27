// let correctNumber = 7;
// let guess = prompt("Enter the correct number: ");

// while(guess != correctNumber) {
//     console.log("Try Again");
//     guess = prompt("Enter the correct number: ");
// }

// console.log("Correct Number!");



// const readline = require("readline");
const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// const correctNumber = 10;
const correctNumber = 10;

// function ask() {
//   rl.question("Enter the correct number: ", function (guess) {
//     if (Number(guess) === correctNumber) {
//       console.log("Correct Number!");
//       rl.close();
//     } else {
//       console.log("Try Again");
//       ask();
//     }
//   });
// }

function ask() {
    rl.question("Enter the correct number: ", function (guess) {
        if(Number(guess) === correctNumber) {
            console.log("Correct Number!");
            rl.close();
        } else {
            console.log("Try Again");
            ask();
        }
    });
}

// ask();
ask();