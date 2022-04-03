/*
Given an array of objects.

const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
];

Question:
a. Get all the items in an array whose quantity is less than 2.
b. Get the total quantity of items present in the inventory.
c. Find the object which contains the item whose quantity is zero.

*/

const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}  
];

// a
const itemQtyLessThanTwo = inventory.reduce((acc, currObj) => {
    return currObj.quantity < 2 ? [...acc, currObj.name] : [...acc];
}, []);

console.log(itemQtyLessThanTwo);

// b
const totalItemPresent = inventory.reduce((acc, currObj) => {
    return acc += currObj.quantity;
}, 0)

console.log(totalItemPresent);

// c
const zeroQuantityItem = inventory.reduce((acc, currObj) => {
    return currObj.quantity === 0 ? [...acc, currObj.name] : [...acc];
}, [])

console.log(zeroQuantityItem);
