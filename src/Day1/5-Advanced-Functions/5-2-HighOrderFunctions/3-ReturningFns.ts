export {};

// Higher-order function that returns a function
function createMultiplier(factor: number): (value: number) => number {
  console.log("Factor:", factor);
  return function (value: number) {
    console.log("Value:", value);
    return value * factor;
  };
}

// Create a multiplier function with factor 3
const multiplier3 = createMultiplier(3);

// Use the multiplier function
console.log("Result:", multiplier3(5)); // Output: Result: 15
