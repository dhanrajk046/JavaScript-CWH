function average(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }
    return sum/numbers.length;
}

let arr = [10,20,30,40,50];

console.log("Average =", average(...arr));

// Explanation

// ...numbers collects all arguments into an array.
// average(...arr) uses spread syntax to pass each array element as a seperate arguments.
// The function adds all numbers and divides by the total number of elements to calculate the average.