let students = [
    {
        name: "Benny",
        age: 24
    },
    {
        name: "Charlie",
        age: 27
    },
    {
        name: "Alan",
        age: 25
    }
];

// console.log(students.sort((a, b) => a.age - b.age));
console.log(students.sort((a, b) => a.name == b.name ? 0 : a.name > b.name ? 1 : -1));

























