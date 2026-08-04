// Function to calculate Simple Interest
function calculateSimpleInterest(principal, rate, time){
    let simpleInterest = (principal*rate*time)/100;
    return simpleInterest;
}

// Example values
let principal = 10000;
let rate = 8; // Annual interest rate in %
let time = 3; // Time in years

let interest = calculateSimpleInterest(principal, rate, time);
let totalAmount = principal + interest;

console.log("Principal:", principal);
console.log("Rate:", rate + "%");
console.log("Time:", time, "years");
console.log("Simple Interest:",interest);
console.log("Total Amount:",totalAmount);

// The simple interest formula is:
// where
// p = Principal amount
// R = Rate of interest(per year)
// T = Time(in years)