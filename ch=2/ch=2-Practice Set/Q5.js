// Q5. Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator.


// let Age = 20;
// console.log((Age>18)?'You can Drive':'You cannot drive');

let age = 20;

let result = (age >= 18) ? "You can drive.": "You cannot drive.";

console.log(result);

// The ternary operator (? :) s a shorthand fr an if...else statement.
// Syntax: condition ? expression_if_true: expression_if_false;

// In this example:
// If age >= 18, it prints "You can drive."
// Otherwise, it prints "You cannot drive."