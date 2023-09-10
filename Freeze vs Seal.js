
let originalBox = {
    shape: "Cube",
    capacity: 3
};

// let frozenBox = Object.freeze(originalBox);

// frozenBox.shape = "Cuboid";
// frozenBox.color = "Red";
// delete frozenBox.capacity;

// let sealedBox = Object.seal(originalBox);

// sealedBox.color = "Red";
// delete sealedBox.capacity;
// sealedBox.shape = "Cuboid";

// console.log(Object.isFrozen(sealedBox));





let student = {
    grade: 7,
    subjects: [
        {name: "Maths", mark: 90},
        {name: "Science", mark: 85}
    ]
};

let frozenStudent = Object.freeze(student);
frozenStudent.grade = 8;
frozenStudent.subjects[1].mark = 88;

console.log(frozenStudent);