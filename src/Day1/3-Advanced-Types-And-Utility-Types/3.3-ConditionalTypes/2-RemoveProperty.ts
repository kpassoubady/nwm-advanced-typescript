export {};

interface User {
    name: string;
    age: number;
    email: string;
  }
  
  type RemoveProperty<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
  };
  
  type NewUser = RemoveProperty<User, "email">;
  
  let user: NewUser = { name: "John", age: 30 };
  console.log(user);
  