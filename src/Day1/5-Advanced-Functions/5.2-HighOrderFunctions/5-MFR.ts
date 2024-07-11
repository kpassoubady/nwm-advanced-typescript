export {};

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// map: multiply each number by 2
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter: get only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce: calculate the sum of all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
