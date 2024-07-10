export {};

//Creating an alias for a simple type

type UserId = string;
let id: UserId = "abc123";
console.log(id);

// Creating an alias for an object type:
type User = {
    id: string;
    name: string;
    age: number;
};

let user: User = {
    id: "abc123",
    name: "John",
    age: 30
};
console.log(user);

// Creating an alias for a union type:
type Result = string | number | boolean;
function printResult(result: Result) {
  console.log(result);
}
printResult("success"); // prints "success"
printResult(42); // prints 42
printResult(true); // prints true

// Creating an alias for a function type:
type Calculator = (x: number, y: number) => number;
let add: Calculator = (x, y) => x + y;
let multiply: Calculator = (x, y) => x * y;

console.log(add(5,6)); // prints 11
console.log(multiply(5,6)); // prints 30