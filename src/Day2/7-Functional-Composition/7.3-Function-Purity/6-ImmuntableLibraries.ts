export {}


import { List } from 'immutable';

const numbers = List([1, 2, 3, 4, 5]);
const doubledNumbers = numbers.map(x => x * 2);
console.log(doubledNumbers.toArray()); // Output: [2, 4, 6, 8, 10]
