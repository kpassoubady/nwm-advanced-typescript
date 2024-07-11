export { };

// Generic function with conditional types
// The ReturnType<T> type is a conditional type that extracts the return type of a function.

/* The ReturnType<T> type is a conditional type that extracts the return type of a function. 
It uses TypeScript's conditional types feature, which allows types to be selected conditionally based on other types. 
In this case, ReturnType<T> checks if T is a function type that takes any number of arguments (...args: any[]) and returns a value. 
If T is such a function type, ReturnType<T> becomes the return type of that function, represented by infer R. 
If T is not a function type, ReturnType<T> becomes never. */

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

//The testFunction is a simple function that takes a string and a number as arguments and returns a boolean. 
//It checks if the length of the string is greater than the number.
const testFunction = (x: string, y: number): boolean => {
    return x.length > y;
};

type TestReturnType = ReturnType<typeof testFunction>; // inferred as boolean
let isGreater:TestReturnType = testFunction("Hello", 3);

console.log("isGreater: " + isGreater); // true
isGreater = testFunction("Hello", 10);
console.log("isGreater: " + isGreater); // false
