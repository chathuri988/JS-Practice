// Object destructuring
const person = { name: "Madu", age: 22 };
const { name, age } = person;
console.log(name, age); // Madu 22

// Array destructuring
const nums = [10, 20, 30];
const [first, second] = nums;
console.log(first, second); // 10 20

// Function parameter destructuring
const greet = ({ name, age }) => `Hello ${name}, you are ${age}`;
console.log(greet(person)); // Hello Madu, you are 22
