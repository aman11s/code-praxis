/*
Given an array of objects. Write a function to find the sum of ages of each person.

const arr = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]

Your output should be: 121  -> 60+36+16+9 

*/

const arr = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
];

const sumOfAge = (obj, currObj) => obj += currObj.age;

const result = arr.reduce(sumOfAge, 0)

console.log(result);

