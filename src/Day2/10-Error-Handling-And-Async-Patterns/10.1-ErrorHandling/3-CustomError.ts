export {}

// Example: Custom Error Classes
// the CustomError class extends the built-in Error class to create a custom error type. 
// It sets the error name and message
class CustomError extends Error {
  // The constructor initializes the error message
  constructor(message: string) {
    // Call the parent class constructor
      super(message);
      // Set the error name to the class name
      this.name = this.constructor.name;
  }
}

try {
  // Throw a custom error
  throw new CustomError("Custom error message");
} catch (error) {
  // Handle the error
  console.error("Error.Message:", (error as Error).message);
  console.error("Error.Name:", (error as Error).name);
}

