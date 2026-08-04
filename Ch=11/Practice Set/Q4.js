// Parent class 
class Human {
    constructor(name) {
        this.name = name;
    }
}

// Child class 
class Student extends Human {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
} 

// Creating a Student object
const student = new Student("Dhanraj", "Computer Science");

// Checking instances
console.log(student instanceof Student); // true
console.log(student instanceof Human); // true

// Explanation
// student instanceof Student - true because student is created from the  student class.
// student instanceof Human - true because Student inherits from human, so every Student object is also an instance of Human.