// EXAMPLE FOR FN OVERLOAD
function addition(a: string, b: string): string;
function addition(a: number, b: number): number;

function addition(a: any, b: any): any {
    return a + b;
}

console.log(addition(10, 20));
console.log(addition("10", "20"));
console.log(addition("John", "Doe"));

// Only accepts the definition of the method
// you have created for that method
// console.log(addition(10,"Doe"));
// console.log(addition(true,true));
// The above calls will throw error msg for type mis match

