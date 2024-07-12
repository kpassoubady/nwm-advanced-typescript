export {}
// Basic interface definition
interface Person {
  id: number;
  name: string;
  age: number;
  email?: string; // Optional property
  readonly ssn: string; // Readonly property

  // Method signature
  greet(): void;
}

// Interface inheritance
interface Employee extends Person {
  employeeId: number;
  department: string;
}

// Index signatures
interface StringArray {
  [index: number]: string;
}

// Function types
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// Hybrid types
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

// Declaration merging
interface Book {
  title: string;
  author: string;
}

interface Book {
  publishedYear: number;
}

// Implementing an interface
class Developer implements Employee {
  id: number;
  name: string;
  age: number;
  ssn: string;
  employeeId: number;
  department: string;

  constructor(id: number, name: string, age: number, ssn: string, employeeId: number, department: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.ssn = ssn;
    this.employeeId = employeeId;
    this.department = department;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I work in the ${this.department} department.`);
  }
}

// Using an index signature
const myArray: StringArray = ["Alice", "Bob", "Charlie"];
console.log(myArray[1]); // Output: Bob

// Using a function type
const mySearch: SearchFunc = function (source: string, subString: string): boolean {
  return source.includes(subString);
};

console.log(mySearch("Hello, world", "world")); // Output: true

// Using a hybrid type
function getCounter(): Counter {
  const counter = (function (start: number) {
    console.log(`Counter started at: ${start}`);
    return `Counter started at: ${start}`;
  }) as Counter;
  counter.interval = 123;
  counter.reset = function () {
    console.log("Counter reset");
  };
  return counter;
}

const counter = getCounter();
counter(10); // Output: Counter started at: 10
counter.reset(); // Output: Counter reset
console.log(counter.interval); // Output: 123

// Using declaration merging
const myBook: Book = {
  title: "TypeScript Handbook",
  author: "TypeScript Team",
  publishedYear: 2021
};

console.log(myBook);
