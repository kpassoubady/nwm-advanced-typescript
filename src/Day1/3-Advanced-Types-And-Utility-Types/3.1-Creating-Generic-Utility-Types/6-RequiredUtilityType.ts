export { };

interface Person {
    name?: string;
    age?: number;
    address?: string;
}

type RequiredPerson = Required<Person>;

const requiredPerson: RequiredPerson = {
    name: 'Kangs',
    age: 30,
    address: '123 Main St.',
};

console.log(requiredPerson);

// Property 'address' is missing in type 
// '{ name: string; age: number; }' but required in type 'Required<Person>'.
// const missingAddress: RequiredPerson = {
//     name: 'Kangs',
//     age: 30
// };
// console.log(missingAddress);

let personWithAddress : Person = { name: "Kangs", age: 40, address: "First Street"};
let personWithoutAddress : Person = { name: "Kangs", age: 40};
console.log(personWithAddress);
console.log(personWithoutAddress);