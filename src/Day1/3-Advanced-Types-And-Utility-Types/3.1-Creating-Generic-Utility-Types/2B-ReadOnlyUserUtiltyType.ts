export {};

interface User {
  name: string;
  age: number;
  email: string;
}

type ReadonlyUser = Readonly<User>;

let user: ReadonlyUser = { name: "John", age: 30, email: "john@example.com" };
// user.age = 40; // Error: Cannot assign to 'age' because it is a read-only property.

console.log(user.age);
