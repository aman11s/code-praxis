/* Given an array. Write a function to get the sum of all elements which are greater than 50. 

const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

Your output should be: 190

*/

const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const sumOfNumAbove50 = (num, currNum) => currNum > 50 ? num += currNum : num;

const result = arr.reduce(sumOfNumAbove50, 0);

console.log(result);
