export { };

// User class
class User {
  constructor(public id: string, public name: string, public age: number) { }
}

// UserService class
class UserService {
  private users: User[] = [];
  private id: number = 0;

  @authorize('admin')
  createUser(name: string, age: number): User {
    const newUser = new User(this.generateId(), name, age);
    this.users.push(newUser);
    console.log(`Created user: ${newUser.id} - ${newUser.name} (${newUser.age})`);
    return newUser;
  }

  @authorize('manager', 'admin')
  updateUser(userId: string, newName: string): User {
    const user = this.findUser(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    user.name = newName;
    console.log(`Updated user: ${user.id} - ${user.name} (${user.age})`);
    return user;
  }

  private findUser(userId: string): User | undefined {
    return this.users.find(user => user.id === userId);
  }

  public printUsers() {
    console.log(this.users)
  }

  private generateId(): string {
    this.id = this.id + 1;
    return this.id.toString();
  }
}



// Mock User and Role data
const userRoles: { [userId: string]: string } = {
  '1': 'admin',
  '2': 'manager',
  '3': 'user'
};

class LoggedInUser {
  private id: string;

  constructor(id: string) { this.id = id }

  // Helper function to get the current user's ID
  public getCurrentUserId(): string {
    // In a real-world scenario, you would retrieve the user's ID from the authentication context or session
    // For simplicity, we'll use a hardcoded value
    return this.id;
  }

  // Get the user's role based on their ID
  public getUserRole(): string {
    return userRoles[this.id] || 'guest';
  }

}

// Mocking loggerInUser
let loggedInUser = new LoggedInUser('1'); // admin


// Authorization Decorator
function authorize(...allowedRoles: string[]) {
  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const userRole = loggedInUser.getUserRole();
      if (!allowedRoles.includes(userRole)) {
        throw new Error('Unauthorized access');
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

const userService = new UserService();
userService.createUser('Kangs Pass', 30);
userService.createUser('Harsha Raj', 20);
userService.createUser('Alex Mathew', 40);
const newUser = userService.createUser('John Doe', 30);
const updatedUser = userService.updateUser(newUser.id, 'Jane Smith');
//userService.updateUser('invalid-id', 'Bob Johnson'); // Throws an error: User with ID invalid-id not found

userService.printUsers();

// loggedInUser = new LoggedInUser('2'); // manager
// manager don't have createUser privilege
// userService.createUser('Alex Mathew', 40); // Throws an error: Unauthorized access

// loggedInUser = new LoggedInUser('3'); // user
// user does not have updateUser privilege
// userService.updateUser('4', 'Bob Johnson'); // Throws an error: Unauthorized access
