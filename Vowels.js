
let sentence = "Education is wealth"; 

let vowels = ['a', 'e', 'i', 'o', 'u'];

let final = {};

for (let vowel of vowels) {
    let count = 0;
    for (let char of sentence) {
        if (char.toLowerCase() === vowel) {
            count++;
        }
    }
    final[vowel] = count;
}

console.log(final);



