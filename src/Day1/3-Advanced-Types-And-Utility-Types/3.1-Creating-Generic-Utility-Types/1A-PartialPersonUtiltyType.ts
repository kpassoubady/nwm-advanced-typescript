export { };

interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

//You can cast an object to a type using the as keyword
// let person: Person = {} as Person;
// let personWithoutAddress:Person = {
//   name: "Kangs",
//   age: 30
// } ;
// console.log(personWithoutAddress);
//Property 'address' is missing in type '{ name: string; age: number; }' but required in type 'Person'.ts(2741)

let houseOwner: Person = {
  name: "Kangs",
  age: 30,
  address: { street: "First Street", city: "New York" }
};
console.log(houseOwner);


type PartialPerson = Partial<Person>;

// PartialPerson has the same shape as Person,
// but all properties are optional
let p: PartialPerson = {};
p.name = "Kangs";
p.address = { street: "First Street", city: "New York" };

console.log(p);

// let person : Person = {name:"Sam"};
// console.log(person);
