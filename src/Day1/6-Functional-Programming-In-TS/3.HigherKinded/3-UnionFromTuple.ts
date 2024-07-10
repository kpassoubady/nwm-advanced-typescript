export {};

// Real-life situation: 
// Transforming and manipulating types to create more expressive and type-safe code, 
// such as extracting the return type of a function or transforming a tuple into a union type.

// Advanced type manipulations for functional programming
type TupleToUnion<T extends any[]> = T[number];
type FunctionReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

type NumbersTuple = [1, 2, 3, 4];
type UnionFromTuple = TupleToUnion<NumbersTuple>; // UnionFromTuple is: 1 | 2 | 3 | 4

function add(a: number, b: number): number {
    return a + b;
}

type AddReturnType = FunctionReturnType<typeof add>; // AddReturnType is: number
console.log(add(5,4))

// Additional usages for type UnionFromTuple and type AddReturnType

// Additional usage for UnionFromTuple: Defining a variable with the type UnionFromTuple
const numberValue: UnionFromTuple = 3; // Valid, as 3 is one of the union members (1 | 2 | 3 | 4)

// Additional usage for AddReturnType: Defining a variable with the type AddReturnType
const result: AddReturnType = add(5, 7); // Valid, as add function returns a number

// Defining a function that takes a callback and returns its return type
function getCallbackReturnType<T extends (...args: any[]) => any>(callback: T): AddReturnType {
    return callback();
}

// Usage: Get the return type of a callback function
const callbackResult: AddReturnType = getCallbackReturnType(() => add(10, 20)); // callbackResult is of type: number

// Defining a type-safe reducer function using AddReturnType
function reducer<T>(array: T[], callback: (accumulator: AddReturnType, currentValue: T) => AddReturnType, initialValue: AddReturnType): AddReturnType {
    let accumulator = initialValue;
    for (const currentValue of array) {
        accumulator = callback(accumulator, currentValue);
    }
    return accumulator;
}

// Usage: Calculate the sum of numbers in an array using the reducer function
const numbersArray: number[] = [1, 2, 3, 4];
const sum: AddReturnType = reducer(numbersArray, add, 0); // sum is of type: number, equivalent to the return type of add function
console.log(sum)
