const numbers = [1, 2, 3, 4, 5];

// map → double each number
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled); // [2,4,6,8,10]

// filter → get even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens); // [2,4]

// reduce → sum all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum); // 15