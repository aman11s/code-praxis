/*Write a function that accepts a number as input and inserts hyphens between every two even numbers.

If your input is: 24345687

Your output should be: 2-43456-87
*/

const num = 24345687;
const isEven = str => Number(str) % 2 === 0;
const numberReducer = (str, currNum, index, arr) => str += isEven(currNum) && isEven(arr[index + 1]) ? `${currNum}-` : currNum;

const result = [...String(num)].reduce(numberReducer, "");
console.log(result);
