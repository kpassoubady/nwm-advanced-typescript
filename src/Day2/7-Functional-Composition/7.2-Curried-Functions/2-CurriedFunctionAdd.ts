export {}

// Non-curried function
function add(a: number, b: number): number {
  return a + b;
}

// Curried version
function curriedAdd(a: number): (b: number) => number {
  return function(b: number): number {
      return a + b;
  };
}

// Usage
const add5 = curriedAdd(5);
console.log(add5(3)); // Output: 8
