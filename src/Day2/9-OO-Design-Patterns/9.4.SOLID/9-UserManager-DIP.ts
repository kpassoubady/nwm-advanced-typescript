export {}

/*
The Dependency Inversion Principle states that high-level modules should not depend on low-level modules. 
Both should depend on abstractions. 
Abstractions should not depend on details.
Details should depend on abstractions.
*/

// Example: Dependency Inversion Principle (DIP)
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
      console.log(message);
  }
}

class UserManager {
  private logger: Logger;

  constructor(logger: Logger) {
      this.logger = logger;
  }

  addUser(username: string): void {
      // Logic to add user
      this.logger.log(`User '${username}' added.`);
  }
}

// Usage:
const logger = new ConsoleLogger();
const userManager = new UserManager(logger);
userManager.addUser("John Doe"); // Output: User 'John Doe' added.
