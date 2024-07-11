export { };

// Define a type UnaryFunction that represents a function that takes a number and returns a number.
type UnaryFunction = (x: number) => number;

// The applyOperation function is type-safe, ensuring that only functions of type UnaryFunction are accepted.
// The applyOperation function calls the fn function with the value and returns the result.
// The applyOperation that takes a function fn of type UnaryFunction and a value of type number.
const applyOperation = (fn: UnaryFunction, value: number): number => {
  return fn(value);
};

// Function square that takes a number and returns its square.
const square: UnaryFunction = (x) => x * x;
// The applyOperation function with the square function and the value 5, which returns 25.
const result = applyOperation(square, 5); 
console.log(result);
