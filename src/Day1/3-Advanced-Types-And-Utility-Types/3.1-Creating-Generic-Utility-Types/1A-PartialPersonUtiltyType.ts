export { };

interface Person {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
}

type PartialPerson = Partial<Person>;

// PartialPerson has the same shape as Person,
// but all properties are optional
let p: PartialPerson = {};
p.name = "Kangs";
p.address = { street: "First Street", city: "New York" };

console.log(p);

// let person : Person = {name:"Sam"};
// console.log(person);
