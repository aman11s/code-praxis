/*
Count the occurrences of distinct elements in the given array.

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
*/

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

const arrFlat = input.reduce((acc, curr) => [...acc, ...curr], []);
console.log(arrFlat);
const elemOccurance = (acc, curr) => ({...acc, curr : arrFlat.find(elem => curr ===)})

