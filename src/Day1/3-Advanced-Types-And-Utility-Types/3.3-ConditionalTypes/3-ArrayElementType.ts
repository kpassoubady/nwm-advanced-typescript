export {};

/*
we define a type ArrayElementType that takes a generic type parameter T. 
The extends keyword is used to check if T extends Array<infer U>, which means that 
T is an array and the type of its elements is U. If the condition is true, 
the type U is returned as the result of the conditional type. 
If the condition is false, the never type is returned
*/

type ArrayElementType<T> = T extends Array<infer U> ? U : never;

// Usage:
type StringArray = Array<string>;
type NumberArray = Array<number>;
type StringOrNumberArray = Array<string | number>;

type StringElementType = ArrayElementType<StringArray>; // string
type NumberElementType = ArrayElementType<NumberArray>; // number
type StringOrNumberElementType = ArrayElementType<StringOrNumberArray>; // string | number
