export {};

// Transforming a function into a curried form
function add(a: number, b: number): number {
  return a + b;
}

// Curried version of the add function
const curriedAdd = (a: number) => (b: number) => a + b;

// Usage: Curried add function
const addTwo = curriedAdd(2); // Partial application
console.log(addTwo(3)); // Output: 5 (2 + 3)
