export {};

interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;

let user1: PartialUser = { name: "John" };
let user2: PartialUser = { age: 30, email: "john@example.com" };
console.log(user1);
console.log(user2);
