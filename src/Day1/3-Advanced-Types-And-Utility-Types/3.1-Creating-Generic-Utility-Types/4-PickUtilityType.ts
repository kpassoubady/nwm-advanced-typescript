export { };

interface Person {
    name: string;
    age: number;
    hasHobbies: boolean;
    address: {
        street: string;
        city: string;
    };
}

type PersonNameAndAge = Pick<Person, "name" | "age">;

let pickPerson2: PersonNameAndAge = { name: "Kavya", age: 30 };
console.log(pickPerson2);

// Compile time error
// Type '{ name: string; age: number; address: { street: string; city: string; }; }' is not assignable to type 'PersonNameAndAge'.
//  Object literal may only specify known properties, and 'address' does not exist in type 'PersonNameAndAge'

// let p2: PersonNameAndAge = { name: "Kangs", age: 40, address: { street: "First Street", city: "New York" } };
// console.log(greet(pickPerson2));


let person1 : Person = { name: "Kangs", age: 40, address: { street: "First Street", city: "New York" }, hasHobbies: true };

function greet(person: Person) {
    console.log(`Hello, ${person.name}!`);
    console.log(`Your age is, ${person.age}!`);
    if (person.hasHobbies) {
        console.log("You have many hobbies");
    }
}

console.log(greet(person1));
