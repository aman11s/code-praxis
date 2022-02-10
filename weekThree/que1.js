/* Write a function strLength() which takes

1. Your name.
2. A function which it will call with the length of your name.

Now, call this function with the two parameters.

1. Your name. This is simple.
2. A function. This function will get the length of the string. Use that length to print a message: OMG! my name is X char long! */

const strLength = (name, callback) => callback(name.length);

strLength('Aman', (num) => console.log(`OMG! My name is ${num} char long.`));