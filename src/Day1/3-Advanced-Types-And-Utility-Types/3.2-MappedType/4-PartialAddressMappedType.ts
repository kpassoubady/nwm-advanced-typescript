export {};

interface Person {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
        state: string;
    };
}

// Create a mapped type with all properties optional
// To make address.city and address.state optional as well, 
// we need to use a conditional type in our mapped type definition. 
// We can use the extends keyword to check if the current property being iterated over is the "address" property. 
// If it is, we use Partial<Person["address"]> to make all the properties of Person["address"] optional. 
// If it's not, we use Person[K] as before to preserve the existing types of the other properties.
type PartialPerson = { [K in keyof Person]?: K extends "address" ? Partial<Person["address"]> : Person[K] };

// Usage:
const partialPerson: PartialPerson = {
    name: "John",
    address: {
        street: "123 Main St",
    },
};

console.log(partialPerson);
