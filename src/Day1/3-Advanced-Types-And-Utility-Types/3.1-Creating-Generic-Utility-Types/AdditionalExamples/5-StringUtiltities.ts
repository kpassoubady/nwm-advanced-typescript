export {}

type Upper = Uppercase<"hello">; // "HELLO"
type Lower = Lowercase<"HELLO">; // "hello"
type Uncapital = Uncapitalize<"Hello">; // "hello"
type Capital = Capitalize<"hello">; // "Hello"

let upper: Upper = "HELLO";
let lower: Lower = "hello";
let uncapital: Uncapital = "hello";
let capital: Capital = "Hello";
console.log(upper, lower, uncapital, capital);

