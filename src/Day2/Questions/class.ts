export {}

// Define a base class with public, private, and protected members
class Person {
  // Public properties can be accessed from anywhere
  public name: string;

  // Private properties can only be accessed within the class
  private ssn: string;

  // Protected properties can be accessed within the class and subclasses
  protected age: number;

  // Constructor to initialize the properties
  constructor(name: string, ssn: string, age: number) {
    this.name = name;
    this.ssn = ssn;
    this.age = age;
  }

  // Public method
  public greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }

  // Protected method
  protected displayAge(): void {
    console.log(`I am ${this.age} years old.`);
  }

  // Private method
  private displaySSN(): void {
    console.log(`My SSN is ${this.ssn}.`);
  }

  // Static property
  static species = "Homo sapiens";

  // Static method
  static getSpecies(): string {
    return `We are ${Person.species}.`;
  }
}

// Define a subclass that inherits from the base class
class Employee extends Person {
  // Public property specific to the subclass
  public employeeId: number;

  // Constructor to initialize the properties of the subclass and superclass
  constructor(name: string, ssn: string, age: number, employeeId: number) {
    super(name, ssn, age);
    this.employeeId = employeeId;
  }

  // Public method specific to the subclass
  public work(): void {
    console.log(`${this.name} is working.`);
  }

  // Method to access protected members of the superclass
  public showDetails(): void {
    this.greet();
    this.displayAge();
    // this.displaySSN(); // Error: Property 'displaySSN' is private and only accessible within class 'Person'.
  }
}

// Create an instance of the Employee class
const employee = new Employee("Alice", "123-45-6789", 30, 101);

// Access public members and methods
employee.greet();
employee.work();
employee.showDetails();

// Access static members and methods
console.log(Person.getSpecies());

// Attempt to access private and protected members (will cause errors)
// console.log(employee.ssn); // Error: Property 'ssn' is private and only accessible within class 'Person'.
// employee.displaySSN(); // Error: Property 'displaySSN' is private and only accessible within class 'Person'.