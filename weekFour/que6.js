// Given an array of numbers calculate the sum.

const numbers = [12, 2, 4, 22, 3, 4];

const sumOfNumbers = (sum, num) => sum += num;

const result = numbers.reduce(sumOfNumbers, 0);

console.log(result);
