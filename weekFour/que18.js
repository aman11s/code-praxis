/* Write a function compose() which can take any number of functions and return a function which will run the given functions in order when called with an argument 

Example:
const increment = num => num + 1;
const square = num => num * num;
const incrementThenSquare = compose(increment, square);
incrementThenSquare(2);     //9
*/

const increment = num => num + 1;
const square = num => num * num;
const compose = (...fns) => num => fns.reduce((accNum, currFn) => {
    return currFn(accNum);
}, num)

const result = compose(increment, square)(2);
console.log(result);
