

let characters = [
    {id: 1, name: "Harry", age: 23},
    {id: 2, name: "Ron", age: 21},
    {id: 3, name: "Hermione", age: 22},
    {id: 4, name: "Dumbledore", age: 62},
    {id: 5, name: "Sirius", age: 45},
    {id: 6, name: "Snape", age: 44},
];

console.log(characters.filter(character => character.name.startsWith('H')));