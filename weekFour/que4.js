// Wriet a function which can tell whether a number is less than 10 or not. Supply this function to Array.filter() to get an array with no 10s in it.

const arr = [2, 5, 33, 21, 5, 66, 34, 9];
const numLessThanTenOrNot = num => num < 10;

const lessThanTen = arr.filter(numLessThanTenOrNot);

console.log(lessThanTen);
