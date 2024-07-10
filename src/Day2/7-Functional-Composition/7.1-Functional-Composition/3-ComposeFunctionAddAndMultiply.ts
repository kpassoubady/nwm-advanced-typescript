export {}

function add(a: number, b: number): number {
  return a + b;
}

function multiply(c: number, d: number): number {
  return c * d;
}

// Function composition example
function compose(f: (x: number, y: number) => number, g: (z: number, w: number) => number): (a: number, b: number) => number {
  return (a: number, b: number) => f(g(a, b), g(a, b));
}

const addAndMultiply = compose(multiply, add);
console.log(addAndMultiply(2, 3)); // Output: (2 + 3) * (2 + 3) = 25
