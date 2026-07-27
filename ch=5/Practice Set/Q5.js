let n =5;

let arr = [];

for( let i =1; i<=n; i++) {
    arr.push(i);
}

let factorial = arr.reduce((acc, value) =>{
    return acc * value;
});

console.log(arr);
console.log("Factorial =",
    factorial);