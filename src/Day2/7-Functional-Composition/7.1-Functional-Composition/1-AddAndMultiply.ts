export {}

// Composing functions together
function add(a: number, b: number): number {
  return a + b;
}

function multiplyByTwo(x: number): number {
  return x * 2;
}

// Compose add and multiplyByTwo functions to create a new function
const addAndMultiplyByTwo = (a: number, b: number): number => multiplyByTwo(add(a, b));

// Usage: Composed function
console.log(addAndMultiplyByTwo(3, 4)); // Output: 14 (3 + 4 = 7, 7 * 2 = 14)
