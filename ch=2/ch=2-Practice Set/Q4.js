// Q4. Write a JavaScript program to find whether a number is divisible by either 2 or 3.

// JavaScript program to check if a number is divisible by either 2 or 3
let num = 9;

if (num %2 ===0 || num %3 ===0){
    console.log(num + " is divisible by 2 or 3.")
} else {
     console.log(num + " is not divisible by 2 or 3.")
}

// num % 2 === 0 checks if the numberis divisibe by 2
// num % 3 === 0 checks if the numberis divisibe by 3
// The logical OR(||) operator returns true if either conditions are true.