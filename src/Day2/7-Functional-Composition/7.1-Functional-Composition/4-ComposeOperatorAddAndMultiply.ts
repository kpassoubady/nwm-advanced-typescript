export {}

/*
compose is a higher-order function that takes two functions f and g.
It returns a new function that applies g to its input, and then applies f to the result of g.
This allows you to chain or compose functions together in a succinct manner.
*/

// Function composition operator implementation
const compose = <T, U, V>(f: (x: U) => V, g: (y: T) => U) => (x: T): V => f(g(x));

// Example functions
const add = (a: number): number => a + 1;
const multiply = (b: number): number => b * 2;

// Using the compose operator
const addAndMultiply = compose(multiply, add);

// Example usage
const result = addAndMultiply(3); // Result: (3 + 1) * 2 = 8
console.log(result);



