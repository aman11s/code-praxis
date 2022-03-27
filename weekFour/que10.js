// Given an array of integers. Find the numbers divisible by 10.

const numbers = [1, 2, 20, 4, 10, 56, 40, 67];

const divisibleBy10 = num => num % 10 === 0;

const result = numbers.filter(divisibleBy10);

console.log(result);
