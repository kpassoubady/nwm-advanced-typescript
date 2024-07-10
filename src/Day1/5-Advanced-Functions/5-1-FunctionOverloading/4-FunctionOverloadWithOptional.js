"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The below function is not supported
// function greet(name: string, greeting?: string, isMale?: boolean): string;
function greet(name, greeting, age, isMale) {
    if (greeting && age !== undefined && isMale !== undefined) {
        var gender = isMale ? "male" : "female";
        return "".concat(greeting, ", ").concat(name, "! You are ").concat(age, " years old and ").concat(gender, ".");
    }
    else if (greeting && age !== undefined) {
        return "".concat(greeting, ", ").concat(name, "! You are ").concat(age, " years old.");
    }
    else if (greeting && isMale !== undefined) {
        var gender = isMale ? "male" : "female";
        return "".concat(greeting, ", ").concat(name, "! You are ").concat(gender, ".");
    }
    else if (age !== undefined && isMale !== undefined) {
        var gender = isMale ? "male" : "female";
        return "Hello, ".concat(name, "! You are ").concat(age, " years old and ").concat(gender, ".");
    }
    else if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else if (age !== undefined) {
        return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    }
    else if (isMale !== undefined) {
        var gender = isMale ? "male" : "female";
        return "Hello, ".concat(name, "! You are ").concat(gender, ".");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
var result1 = greet("Alice");
var result2 = greet("Bob", "Hi");
var result3 = greet("Charlie", undefined, 25);
var result4 = greet("David", "Hey", 30);
var result5 = greet("Eve", undefined, undefined, true);
var result6 = greet("Frank", "Hello", undefined, false);
console.log(result1); // Outputs: "Hello, Alice!"
console.log(result2); // Outputs: "Hi, Bob!"
console.log(result3); // Outputs: "Hello, Charlie! You are 25 years old."
console.log(result4); // Outputs: "Hey, David! You are 30 years old."
console.log(result5); // Outputs: "Hello, Eve! You are male."
console.log(result6); // Outputs: "Hello, Frank! You are female."
