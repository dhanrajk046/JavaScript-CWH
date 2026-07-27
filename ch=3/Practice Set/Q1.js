const marks = {
    Harry: 98,
    Rohan: 70,
    Akash: 7
};

const students = Object.keys(marks);

for (let i=0; i<students.length; i++) {
    console.log(students[i] + " = " + marks[students[i]])
}