export {};

// Class decorator example
function MyClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  // Modify behavior or add metadata for the class
  console.log("Class decorator called on:", constructor);

  // Return the original constructor without modifications
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
    }
  };
}

// Apply the class decorator
@MyClassDecorator
class MyClass {
  // Class implementation
  constructor(public name: string, public age: number) {
    console.log(this);
  }
}

// Instantiate the decorated class
const myObject = new MyClass("kangs",20);

// Output:
// Class decorator called on: [class MyClass]
// MyClass { name: 'kangs', age: 20 }