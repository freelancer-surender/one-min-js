

let a = [1, 2, 3, 4, 5];

let b = a;

// a = [];

// a.length = 0;

// a.splice(0, a.length);

while (a.length > 0) {
    a.pop();
}

console.log(a);
console.log(b);