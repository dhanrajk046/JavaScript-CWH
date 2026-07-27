const student = {
    name: "Alice",
    age: 20,
    course: "Computer Science"
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}