export {};

interface User {
  type: "user";
  username: string;
}

interface Admin {
  type: "admin";
  username: string;
  isAdmin: true;
}

type UserType = User | Admin;

function greetUser(user: UserType): string {
  switch (user.type) {
      case "user":
          return `Hello, ${user.username}!`;
      case "admin":
          return `Welcome back, ${user.username}! You have admin privileges.`;
  }
}

const regularUser: User = { type: "user", username: "JohnDoe" };
const adminUser: Admin = { type: "admin", username: "Admin123", isAdmin: true };

console.log(greetUser(regularUser)); // Output: Hello, JohnDoe!
console.log(greetUser(adminUser)); // Output: Welcome back, Admin123! You have admin privileges.
