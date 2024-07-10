export { };

// Validation Decorator
function validateParams(...paramTypes: any[]) {
  return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== paramTypes[i].name.toLowerCase()) {
          throw new Error(`Invalid parameter type for argument ${i + 1}`);
        }
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

// Example Class
class UserService {
  @validateParams(String, Number)
  createUser(name: string, age: any) {
    console.log(`Creating user ${name} with age ${age}`);
    // User creation logic
  }
}

const userService = new UserService();
userService.createUser('John Doe', 30); // Output: Creating user John Doe with age 30
userService.createUser('Jane Smith', '25'); // Throws an error: Invalid parameter type for argument 2
