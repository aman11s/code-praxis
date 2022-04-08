/* Flatten an array without using flat(). 

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']

*/

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

const arrayFlat = input.reduce((acc, curr) => [...acc, ...curr], []);
console.log(arrayFlat);

