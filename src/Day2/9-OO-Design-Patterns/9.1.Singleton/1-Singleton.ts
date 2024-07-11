/*
The Singleton pattern ensures that a class has only one instance 
and provides a global point of access to that instance.
*/

// Implementing a Singleton in TypeScript
class Singleton {
  private static instance: Singleton;

  private constructor() {} // Private constructor to prevent instantiation from outside

  static getInstance(): Singleton {
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }
      return Singleton.instance;
  }

  // Additional methods and properties can be added here
}

// Usage:
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Output: true (Both instances refer to the same object)
