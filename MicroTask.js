console.log(1); // 1
setTimeout(() => {
    console.log(2); // 2
}, 0);
console.log(3); // 3
let myPromise = new Promise((res, rej) => {
    res(4);
});
myPromise.then(res => {
    console.log(res); // 4
});
console.log(5); // 5











