var a = 10; // global

function myFn() {
    var a = 20; // local
    // a = 20; 
    console.log(a); // 20
}

myFn();

console.log(a); // 10













