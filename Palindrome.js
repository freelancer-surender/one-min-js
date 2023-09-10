let word = "Madam";

// word = word.toString();

// let letters = word.split("");

// let reversedLetters = letters.reverse();

// let reversedWord = reversedLetters.join("");

// console.log(reversedWord == word);

// let reversedWord = word.reverse();

// if (word.toLowerCase() == reversedWord.toLowerCase()) {
//     console.log("It's a Palindrome");
// } else {
//     console.log("It's not a Palindrome");
// }

let num = 12345;

let rem = 0;
let reversedNum = 0;

while (num > 0) {
  rem = num % 10;
  reversedNum = reversedNum * 10 + rem;
  num = Math.floor(num / 10);
}

console.log(reversedNum);
