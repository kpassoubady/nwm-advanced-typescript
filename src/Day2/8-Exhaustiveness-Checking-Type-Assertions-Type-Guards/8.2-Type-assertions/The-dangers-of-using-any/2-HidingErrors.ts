export {};
interface Address{ name: "John", age: 30, address: { street: "123 Main St", city: "New York" }};

let i: any = 10;
i = "hello";
i = true;

let j: unknown = 10;
j = "hello";
j = true;


const user1: any = { name: "John", age: 30 };
const user2: Address = { name: "John", age: 30, address: { street: "123 Main St", city: "New York" }};
console.log(user1.address.street);
// Runtime error: Cannot read property 'street' of undefined

let person: any = {
    name: "John",
    age: 30
};
const favoriteColor = person.favoriteColor;
console.log(favoriteColor);
// output: undefined
