export {};

// Define an interface with readonly properties
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

// Create a person object
const person: ReadonlyPerson = {
  name: 'John',
  age: 30
};

// Try to modify the person object
// This will cause a compile-time error because the properties are readonly
// person.name = 'Jane'; // Error: Cannot assign to 'name' because it is a read-only property.

// Define a const array
const numbers: ReadonlyArray<number> = [1, 2, 3];

// Try to modify the array
// This will cause a compile-time error because the array is const
// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
// numbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading.
