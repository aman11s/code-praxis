// Given an array of integers. Find the biggest number in the array.

const numbers = [1, 2, 33, 4, 31, 56, 4, 67];

const biggestNumber = (bigNum, num) => bigNum < num ? bigNum = num : num;

const result = numbers.reduce(biggestNumber, 0);

console.log(result)
