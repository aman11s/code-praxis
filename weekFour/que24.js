/*
Given an array. Write a function to find the product of all elements which are even.

const arr = [1, 2, 3, 7, 5, 6, 8, 9];

Your output should be: 96

*/

const arr = [1, 2, 3, 7, 5, 6, 8, 9];

const productOfEvenElem = (num, currNum) => currNum % 2 === 0 ? num *= currNum : num;

const result = arr.reduce(productOfEvenElem, 1);

console.log(result);
