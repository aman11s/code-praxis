// Given an array of integers. Find the sum of all odd numbers.

const numbers = [1, 2, 33, 4, 31, 56, 4, 67];

const sumOfOddNumbers = (sum, num) => num % 2 !== 0 ? sum += num : sum;

const result = numbers.reduce(sumOfOddNumbers, 0);

console.log(result);
