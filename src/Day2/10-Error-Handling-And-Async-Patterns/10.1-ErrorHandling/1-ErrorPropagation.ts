export {}

// Example: Error Propagation and Handling
function divide(a: number, b: number): number {
  // Propagate the error by throwing an exception
  // === is used to check if the value is exactly 0
  // ==  is used to check if the value is 0 or falsy
  // =  is used to assign a value

  if (b === 0) {
      throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

const result1 = divide(10, 2);
console.log("Result1:", result1);

try {
  const result2 = divide(10, 0);
  console.log("Result2:", result2);
} catch (error) {
  // Handle the error
  console.error("Error:", (error as Error).message);
}
