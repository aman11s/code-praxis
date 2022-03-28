// Given an array of strings. Return an array of objects with key as item and values as number of characters in the string.

const fruits = ['apple', 'orange', 'mango', 'papaya'];

const arrOfObjects = (acc, str) => [...acc, {[str] : str.length}]

const result = fruits.reduce(arrOfObjects, []);

console.log(result);
