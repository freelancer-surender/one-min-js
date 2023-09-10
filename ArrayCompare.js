let a = [1, 2, 3];
let b = [1, 2, 3];

// console.log(a === b);
// console.log(a.join() === b.join());
// console.log(JSON.stringify(a) === JSON.stringify(b));
// console.log(a.toString() === b.toString());

// let isSame = true;
// for (let i = 0; i < a.length; i++) {
//     if (a.length !== b.length || a[i] !== b[i]) {
//         isSame = false;
//         break;
//     }
// }
// console.log(isSame);


if (a.length === b.length && a.every((el, index) => el === b[index])) {
    console.log(true);
} else {
    console.log(false);
}

















