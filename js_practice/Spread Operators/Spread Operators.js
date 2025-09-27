// Arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1,2,3,4]

// Objects
const user = { name: "Madu", age: 22 };
const updated = { ...user, age: 23 };
console.log(updated); // { name: 'Madu', age: 23 }
