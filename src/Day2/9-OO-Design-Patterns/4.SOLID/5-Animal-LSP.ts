export {};

/*
Dog and Cat classes are subclasses of Animal class. According to LSP, 
instances of Dog and Cat should be substitutable for instances of Animal 
without affecting the program's correctness
*/

// Example: Liskov Substitution Principle (LSP)
class Animal {
  makeSound(): void {
      // Common sound logic for all animals
  }
}

class Dog extends Animal {
  makeSound(): void {
      console.log("Bark!");
  }
}

class Cat extends Animal {
  makeSound(): void {
      console.log("Meow!");
  }
}

