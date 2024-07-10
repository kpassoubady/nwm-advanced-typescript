export {};

// Higher-order function that takes a callback function and a value
function applyCallback(callback: (value: number) => number, value: number) {
  console.log("Applying callback function");
  return callback(value);
}

// Callback function to double the value
function doubleValue(value: number) {
  return value * 2;
}

// Call the higher-order function with the callback function
const result = applyCallback(doubleValue, 5);
console.log("Result:", result); // Output: Result: 10
