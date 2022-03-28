/* Given an array of strings. Find the number of strings with similar number of characters.

Example: const input = ['apple', 'orange', 'mango', 'papaya']; 
        output: {5:2 , 6:2}
*/

const fruits = ['apple', 'orange', 'mango', 'papaya']; 

const similarNoOfString = (acc, str) => acc.hasOwnProperty(str.length) ? {...acc, [str.length] : acc[str.length] + 1} : {...acc, [str.length] : 1};

const result = fruits.reduce(similarNoOfString, {});

console.log(result);

