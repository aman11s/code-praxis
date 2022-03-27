// Given an array of integers. Return an object with sum of all odd numbers and even numbers seperatly.

const numbers = [1, 2, 33, 4, 31, 56, 4, 67];

const sumOfOddAndEvenObj = (obj, num) => num % 2 === 0 ? {...obj, even: obj.even += num} : {...obj, odd: obj.odd += num};

const randomObj = {even: 0, odd: 0};

const result = numbers.reduce(sumOfOddAndEvenObj, randomObj);

console.log(result);
