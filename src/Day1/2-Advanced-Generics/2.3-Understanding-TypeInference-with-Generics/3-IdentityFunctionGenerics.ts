export {};

function identity<T>(arg: T): T {
    return arg;
}

let num = identity(42);
let str = identity("hello");
let bool = identity(true);

console.log(typeof num); // Output: "number"
console.log(typeof str); // Output: "string"
console.log(typeof bool); // Output: "boolean"
