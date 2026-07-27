const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = [10,20,30];

rl.question("Enter a number: ",
    function(num){
        arr.push(Number(num));
        console.log(arr);
        rl.close();
    }
);