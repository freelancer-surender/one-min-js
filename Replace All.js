
let sentence = "If you can dream it, you can do it";

// console.log(sentence.replaceAll('a', 'A'));

// let tempArr = [];
// for (let char of sentence.split("")) {
//     if (char === 'a') {
//         tempArr.push('A');
//     } else {
//         tempArr.push(char);
//     }
// }

// console.log(tempArr.join(""));

// console.log(sentence.replace(/a/g, 'A'));

// console.log(sentence.replace(new RegExp('a', 'g'), 'A'));

console.log(sentence.split("a").join("A"));