export { };

// Assertion of a string value:
const value1: unknown = "Hello, World!";
const strLength = (value1 as string).length;
console.log(strLength); // output: 13

// Assertion of a type with multiple possible types:

const value2: string | number = "123";
const parsedValue = parseInt(value2 as string, 10);
console.log(parsedValue); // output: 123


//Assertion of a third-party library without type information:

// import * as thirdPartyLibrary from "third-party-library";
// const value = thirdPartyLibrary.getValue() as string;
// console.log(value.length); 
//output: the length of the string value returned by the third-party library
