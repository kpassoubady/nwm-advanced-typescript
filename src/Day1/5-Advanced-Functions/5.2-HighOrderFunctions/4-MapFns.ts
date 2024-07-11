export {};

// Higher-order function - map
// map is a higher-order function that applies a callback function to each element of an array 
// and returns a new array containing the results
function map<T, U>(array: T[], callback: (item: T) => U): U[] {
  const result: U[] = [];
  for (const item of array) {
      result.push(callback(item));
  }
  return result;
}

// Example usage of map
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = map(numbers, (num) => num * 2);
console.log("Doubled numbers:", doubledNumbers); // Output: Doubled numbers: [2, 4, 6, 8, 10]
