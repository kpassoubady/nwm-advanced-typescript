export {};

// Pure function with immutability
function square(x: number): number {
  return x * x;
}

const number = 5;
const squaredNumber = square(number);

console.log(squaredNumber); // Output: 25
