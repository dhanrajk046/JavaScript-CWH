let str = "Harry is a good boy";

console.log(str.includes("good"));
//true
console.log(str.includes("bad"));
// //false

console.log(str.startsWith("Harry")
 ); //true
console.log(str.startsWith("is"));
//false

console.log(str.endsWith("boy"));
//true
console.log(str.endsWith("good"));
//false