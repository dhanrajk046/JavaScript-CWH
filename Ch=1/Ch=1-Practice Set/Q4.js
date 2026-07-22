// Q4. Try to add a new key to the const object in Problem 3. Werre you able to do it?

// Create a const object 
const student = {
    name: "Dhanraj",
    marks: 95
};

//Add a new key
student.phone = "9876543210";

console.log(student);

// Yes, you can add a new key to a const object. The const keyword prevents reassignment of theobject itself, but its properties can still be added, modified, or deleted.