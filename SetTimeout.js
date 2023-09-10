console.log(1); // 1
setTimeout(() => {
    console.log(2); // 2
}, 2000);
console.log(3); // 3
setTimeout(() => {
    console.log(4); // 4
}, 0);
console.log(5); // 5
setTimeout(() => {
    console.log(6); // 6
});
console.log(7); // 7
setTimeout(() => {
    console.log(8); // 8
}, 1000);
console.log(9); // 9


