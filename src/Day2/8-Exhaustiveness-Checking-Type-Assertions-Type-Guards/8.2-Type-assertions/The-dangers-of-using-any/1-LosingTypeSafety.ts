export {};

function add(a: any, b: any):any {
    return a + b;
}

const result1 = add("Hello, ", 47);
console.log(result1); // output: "Hello, 47"

const result3 = add("Hello", "World");
console.log(result3.toUpperCase()); 

const result2 = add(50, 40);
console.log(result2.toUpperCase()); 
// Runtime error: toUpperCase is not a property of number