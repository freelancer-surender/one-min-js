


// let fruits = ["Apple", "Orange", "Apple", "Mango", "Grapes", "Orange", "Cherry"];
let fruits = ["Apple", "Orange", "Mango", "Grapes", "Cherry"];

let uniqueFruits = [];

// for (let i = 0; i < fruits.length; i++) {
//     if (uniqueFruits.indexOf(fruits[i]) === -1) {
//         uniqueFruits.push(fruits[i]);
//     }
// }

// for (let fruit of fruits) {
//     if (!uniqueFruits.includes(fruit)) {
//         uniqueFruits.push(fruit);
//     }
// }

// uniqueFruits = [...new Set(fruits)];

uniqueFruits = fruits.filter((fruit, index) => fruits.indexOf(fruit) === index);

console.log(uniqueFruits);

console.log(fruits.length === uniqueFruits.length);