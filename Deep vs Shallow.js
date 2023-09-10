let students = [
    {id: 1, name: "Harry", age: 25},
    {id: 2, name: "Ron", age: 24},
    {id: 3, name: "Hermione", age: 23}
];

// let studentsCopy = [...students];
// let studentsCopy = Object.assign([], students);

let studentsCopy = JSON.parse(JSON.stringify(students));

studentsCopy[1].age = 28;

console.log(students[1]);
console.log(studentsCopy[1]);















































