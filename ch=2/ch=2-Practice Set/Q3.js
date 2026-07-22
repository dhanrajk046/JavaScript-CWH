// Q3. Write a JavaScript program to find whether a number is divisible by 2 and 3.

// JavaScript program to check if a number is divisible by 2 and 3

let num = 12;

if (num%2=== 0 && num %3 ===0)
{
    console.log(num + " is divisible by both 2 and 3.");
} else {
    console.log(num + " is not divisible by both 2 and 3.")
}

// num % 2 === 0 checks divisiblity by 2
// num % 3 === 0 checks divisiblity by 3
// The logical AND (&&) operator ensures that both conditions are true.