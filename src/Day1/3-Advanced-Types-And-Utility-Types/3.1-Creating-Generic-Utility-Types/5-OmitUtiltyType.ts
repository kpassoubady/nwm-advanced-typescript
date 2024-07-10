export { };

interface Person {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
}

type PersonWithoutAddress = Omit<Person, "address">;

let personWithoutAddress: PersonWithoutAddress = { name: "Kangs", age: 30 };
console.log(personWithoutAddress);


let personWithAddress : Person = { name: "Kangs", age: 40, address: { street: "First Street", city: "New York" } };
console.log(personWithAddress);
