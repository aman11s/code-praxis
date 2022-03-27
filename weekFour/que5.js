// Given an array of numbers return an object for each item.

const numbers = [2, 5, 33, 21, 5, 66, 34, 9];

const arrOfObj = num => ({digit: num});

const result = numbers.map(arrOfObj);

console.log(result);
