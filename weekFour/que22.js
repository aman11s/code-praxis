/*Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

const arr = ['eat', 'sleep', 'repeat', 'code'];

Your output should be: ['repeat']

*/

const arr = ['eat', 'sleep', 'repeat', 'code'];

const lessThanFiveChar = (word, currWord) => (currWord.length > 5) ? [...word, currWord] : [...word];

const result = arr.reduce(lessThanFiveChar, []);

console.log(result)
