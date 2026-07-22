// Q3. Create a const object in javascript. Can you change it to hold a number later? 

// Create a const object
const student = {
    name: "Dhanraj",
    marks: 90
};

console.log(student);

// You can change object properties
student.marks = 95;
console.log(student);

// But you cannot assign a number to the const object
// student = 100;
// Error: Assignment to constant variable

// Answer: No, you cannot change a const object to hold a number later because a const variable cannot be reassigned.

// You can modify the object's properties.
// You cannot reassign the object itself to a number or anyother value.

