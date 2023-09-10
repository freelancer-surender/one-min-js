let sentence = "Please subscribe to webtechtalk";

let words = sentence.split(" ");

let lastWord = words.pop();

// console.log(lastWord);
// console.log(words);

lastWord = lastWord.toUpperCase();

let finalSentence = words.join(" ") + " " + lastWord;

console.log(finalSentence);