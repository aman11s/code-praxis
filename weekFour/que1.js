// Take an object with your mother's name and your age. Now , create an object for your sibling by age difference.

const aman = { mother: 'Usha', age: 23 };
const ankita = {...aman, age: aman.age - 2};

console.log(ankita);
