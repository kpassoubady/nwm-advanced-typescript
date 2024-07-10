export {};

const user1: any = { name: "John", age: 30 };
console.log(user1.address.street);
// Runtime error: Cannot read property 'street' of undefined

let person: any = {
    name: "John",
    age: 30
};
const favoriteColor = person.favoriteColor;
console.log(favoriteColor);
// output: undefined
