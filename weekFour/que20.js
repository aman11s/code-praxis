/* Get the names in an array for only those who have a cycle.

Example: 
const family = [
  {
    name    : 'Tanay',
    haveCycle : true
  },
  {
    name     : 'Akanksha',
    haveCycle : false
  },
  {
    name     : 'Tanvi',
    haveCycle : true
  },
	{
    name     : 'Kanak',
    haveCycle : false
  }
];

Your output should be: ['Tanay', 'Tanvi']

*/

const family = [
    {
      name    : 'Tanay',
      haveCycle : true
    },
    {
      name     : 'Akanksha',
      haveCycle : false
    },
    {
      name     : 'Tanvi',
      haveCycle : true
    },
      {
      name     : 'Kanak',
      haveCycle : false
    }
]; 

const haveCyclePpl = (arrOfNames, currObj) => currObj.haveCycle ? [...arrOfNames, currObj.name] : [...arrOfNames];

const result = family.reduce(haveCyclePpl, []);

console.log(result);
