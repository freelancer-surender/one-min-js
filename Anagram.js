let str1 = "Listen";
let str2 = "Silenc";

if (str1.length !== str2.length) {
    console.log("Not anagrams");
    return false;
}

let processedStr1 = str1.toLowerCase().split("").sort().join("");
let processedStr2 = str2.toLowerCase().split("").sort().join("");

// console.log(processedStr1);
// console.log(processedStr2);

if (processedStr1 == processedStr2) {
    console.log("Anagrams");
} else {
    console.log("Not Anagrams");
}