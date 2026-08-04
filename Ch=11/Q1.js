class User {
    // Constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
   }
   
   // Method to display user information
   displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
   }

   // Method to greet the user
   greet() {
    console.log(`Hello, ${this.name}! Welcome.`);
   }

   // Method to update the email 
   updateEmail(newEmail) {
    this.email = newEmail;
    console.log(`Email updated to: ${this.email}`);
   }
}

// Creating Objects
const user1 = new User("Dhanraj", 25, "dhanraj@gmail.com");
const user2 = new User("Rahul", 23, "rahul@example.com");

// Calling methods
user1.displayInfo();
user1.greet();
user1.updateEmail("dhanrajKumar@example.com");

console.log("----------------");

user2.displayInfo();
user2.greet();

// This example demonstrates:

// class User
// constructor()
// Instance properties (name, age, email)
// Instance methods (displayInfo(), greet(), and updateEmail())
// Creating objects using the new Keyword