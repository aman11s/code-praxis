// Given an array of integers. Find the sum of all numbers at odd indices.

const numbers = [1, 2, 33, 4, 31, 56, 4, 67];

const sumOfNumbersInOddIndices = (sum, num, index) => index % 2 !== 0 ? sum += num : sum;

const result = numbers.reduce(sumOfNumbersInOddIndices, 0);
console.log(result);
