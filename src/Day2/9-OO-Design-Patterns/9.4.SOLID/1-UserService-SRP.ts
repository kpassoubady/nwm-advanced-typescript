export {};
/*
The Single Responsibility Principle states that a class should have only one reason to change, 
meaning it should have only one responsibility.
*/

// Example: Single Responsibility Principle (SRP)
class UserService {
  getUserById(userId: number): User {
    // Logic to fetch user by ID from database
    // return /* User object */;
    throw new Error("Method not implemented.");
  }

  updateUser(user: User): void {
    // Logic to update user in the database
  }

  deleteUser(userId: number): void {
    // Logic to delete user from the database
  }
}

