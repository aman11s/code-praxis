// Given an array of integers. Return an array of numbers where odd numbers are incremented by 1 and even numbers are decremented by 1.

const numbers = [1, 2, 33, 4, 31, 56, 4, 67];

const newOddAndEvenArray = num => num % 2 === 0 ? ++num : --num;

const result = numbers.map(newOddAndEvenArray);

console.log(result);
