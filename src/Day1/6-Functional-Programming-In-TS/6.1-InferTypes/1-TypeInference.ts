export { };

// Type inference for function parameters
const add = (a: number, b: number) => a + b;
//TypeScript infers the types of a and b as number for both functions.

// Type inference for return types
const multiply = (a: number, b: number) => a * b;
//The return type is inferred based on the operation performed

let result = add(2, 3); // result inferred as number
console.log("Result of Add:" + result);
result = multiply(2, 3); // result inferred as number
console.log("Result of Multiply:" + result);
