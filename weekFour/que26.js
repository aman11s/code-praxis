/*
Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

const arr = ["You", "all", "are", "rockstars"];

Your output should be:
{'0': "You", '1': "all", '2': "are", '3': "rockstars"}

*/

const arr = ["You", "all", "are", "rockstars"];

const obj = (obj, currElem, index) => ({...obj, [index]: currElem});

const result = arr.reduce(obj, {})

console.log(result);
