const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = [];

function takeInput() {
    rl.question("Enter a number: ",
        (input) =>{
            let num = Number(input);

            arr.push(num);

            if(num === 0) {
                console.log(arr);
                rl.close();
            } else {
                takeInput();
            }
        });
}

takeInput();