
//Namespaces in TypeScript provide a way to organize code into logical groups and prevent naming conflicts. They act as containers for variables, functions, classes, etc., similar to modules but with a different syntax

/*
In this example, we define a namespace called `MyNamespace` and export two functions: `greeting` and `greet`. 
The `greeting` variable is a constant string that represents the greeting message. 
The `greet` function takes a `name` parameter and logs the greeting message along with the provided name.

We can use the `MyNamespace` namespace in other parts of our code by importing it and using the exported functions and variables. 
For example, in the `usingimport.ts` file:
*/

// Namespace definition
namespace MyNamespace {
  export const greeting = "Hello";

  export function greet(name: string): void {
      console.log(greeting + ", " + name + "!");
  }
}

// Usage
MyNamespace.greet("world"); // Output: Hello, world!

// Utils example
namespace Utils {
  export function log(message: string): void {
      console.log(message);
  }
}

// Usage  
Utils.log("Logging a message"); // Output: Logging a message

