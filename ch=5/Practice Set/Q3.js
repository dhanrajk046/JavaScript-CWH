let arr = [ 10, 23, 40, 55, 70, 81, 90, 100];

let result = arr.filter((value) =>
{
     return value % 10 === 0;
});
console.log(result);