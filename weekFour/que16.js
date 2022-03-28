/* Create a function which takes your name and returns a function which would add your name to anything that function says.

Example: 
const giveyourname()
const tanaySays = giveyourname('Tanay')
tanaySays('Hello')      //"Tanay says, Hello"
*/

const giveyourname = name => msg => `${name} says, ${msg}`;

const result = giveyourname('Aman')('Hello Guys!!');

console.log(result);
