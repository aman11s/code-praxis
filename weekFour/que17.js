// Write a function which can log any text with your username. Another function which can write any text with your userID. Now compose both functions to give one function which can log any text with both username & userID.

const amanLogger = msg => `Aman says, ${msg}`;

// console.log(amanLogger('aman', 'Hello'))
const amanIDLogger = msg => `aman11s : ${msg}`;

const logWithNameAndId = msg => amanIDLogger(amanLogger(msg));

console.log(logWithNameAndId('Hello'));
