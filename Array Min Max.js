

let arr = [23, 12, 43, 13, 54, 32];

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// let maxVal = arr[0];
// let minVal = arr[0];

// for (let item of arr) {
//     if (item > maxVal) {
//         maxVal = item;
//     }
//     if (item < minVal) {
//         minVal = item;
//     }
// }

// console.log(minVal);
// console.log(maxVal);


let subjects = [
    {name: "Science", mark: 89},
    {name: "Maths", mark: 96},
    {name: "Language", mark: 78},
    {name: "Art", mark: 94},
];

let maxMark = subjects[0].mark;
let minMark = subjects[0].mark;

// for (let subject of subjects) {
//     if (subject.mark > maxMark) {
//         maxMark = subject.mark;
//     }
//     if (subject.mark < minMark) {
//         minMark = subject.mark;
//     }
// }

// subjects.forEach((subject) => {
//     if (subject.mark > maxMark) {
//         maxMark = subject.mark;
//     }
//     if (subject.mark < minMark) {
//         minMark = subject.mark;
//     }
// })

// console.log(minMark);
// console.log(maxMark);

// let marks = subjects.map((subject) => subject.mark);
// console.log(marks);
// console.log(Math.max(...marks));
// console.log(Math.min(...marks));

let maximumMark = subjects.reduce((acc, curr) => {
    return acc.mark > curr.mark ? acc : curr;
});
console.log(maximumMark.mark);