export {}

function greet(name: string): string;
function greet(name: string, greeting: string): string;
function greet(name: string, greeting: string, age?: number): string;
function greet(name: string, greeting?: string, age?: number, isMale?: boolean): string;

// The below function is not supported
// function greet(name: string, greeting?: string, isMale?: boolean): string;

function greet(name: string, greeting?: string, age?: number | undefined, isMale?: boolean): string {
	if (greeting && age !== undefined && isMale !== undefined) {
		const gender = isMale ? "male" : "female";
		return `${greeting}, ${name}! You are ${age} years old and ${gender}.`;
	} else if (greeting && age !== undefined) {
		return `${greeting}, ${name}! You are ${age} years old.`;
	} else if (greeting && isMale !== undefined) {
		const gender = isMale ? "male" : "female";
		return `${greeting}, ${name}! You are ${gender}.`;
	} else if (age !== undefined && isMale !== undefined) {
		const gender = isMale ? "male" : "female";
		return `Hello, ${name}! You are ${age} years old and ${gender}.`;
	} else if (greeting) {
		return `${greeting}, ${name}!`;
	} else if (age !== undefined) {
		return `Hello, ${name}! You are ${age} years old.`;
	} else if (isMale !== undefined) {
		const gender = isMale ? "male" : "female";
		return `Hello, ${name}! You are ${gender}.`;
	} else {
		return `Hello, ${name}!`;
	}
}

const result1 = greet("Alice");
const result2 = greet("Bob", "Hi");
const result3 = greet("Charlie", undefined, 25);
const result4 = greet("David", "Hey", 30);
const result5 = greet("Eve", undefined, undefined, true);
const result6 = greet("Frank", "Hello", undefined, false);

console.log(result1); // Outputs: "Hello, Alice!"
console.log(result2); // Outputs: "Hi, Bob!"
console.log(result3); // Outputs: "Hello, Charlie! You are 25 years old."
console.log(result4); // Outputs: "Hey, David! You are 30 years old."
console.log(result5); // Outputs: "Hello, Eve! You are male."
console.log(result6); // Outputs: "Hello, Frank! You are female."
