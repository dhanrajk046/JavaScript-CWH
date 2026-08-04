// Parent class
class Human {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hello, i am a ${this.name}.`);
    }
}

// Child class 
class Student extends Human {
    constructor(name, course) {
        super(name); // Calls the Human constructor
        this.course = course;
    }

    // Overriding the introduce() method
    introduce() {
        console.log(`Hello, I am ${this.name} and I am studying ${this.course}.`);
    }
}

// Creating objects 
const human = new Human("Rahul");
const student = new Student("Dhanraj", "Computer Science");

// Calling methods
human.introduce();
student.introduce();

// Student inherits from human using extends.
// super(name) calls the parent class constructor.
// The introduce() method is overridden in the Student class, so calling it on a Student object produces different output than the Human version.