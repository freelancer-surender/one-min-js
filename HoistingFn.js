console.log(add(10, 20)); // 30
console.log(subtract(25, 10)); // subtract is not a function
// console.log(multiply(3, 5));// multiply is not a function
console.log(multiply(3, 5));// cannot access multiply before initialization

function add(a, b) {
    return a + b;
}

var subtract = (a, b) => (a - b);

// var multiply = function(a, b) {
//     return a * b;
// }

let multiply = function(a, b) {
    return a * b;
}













