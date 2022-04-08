/*
Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.

If your input is: "neoG"
Your output should be: "nEOg"

*/

const str = 'neoG';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const isVowel = char => vowels.includes(char.toLowerCase());

const result = [...str].reduce((acc, curr) => {
    return acc += isVowel(curr) ?  curr.toUpperCase() : curr.toLowerCase();
}, "")

console.log(result);
