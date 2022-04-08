/*
Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.

If your input is: "neoG"
Your output should be: "nEOg"

*/

const str = 'neoG';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const isVowel = char => {
    for(let i=0; i < char.length; i++) {
        return vowels[i].includes(char.toLowerCase());
    }
}
// console.log(isVowel('A'))
const vowelsToUpperCase = str => str.split('').map(letter => {
    console.log(isVowel(str))
    isVowel(letter) ? letter.toUpperCase() : letter.toLowerCase()
});
console.log(vowelsToUpperCase(str));



