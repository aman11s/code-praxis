// Write a function birthday() to take a person's name and age in an object and increase age.

const birthday = user => ({ ...user, age: user.age + 1 });

aman = {motherName: 'usha', age: 22};
console.log(birthday(aman));
