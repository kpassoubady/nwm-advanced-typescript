# Class Vs Types Vs Interfaces

- [Class Vs Types Vs Interfaces](#class-vs-types-vs-interfaces)
  - [Class Vs Types Vs Interfaces Features  :](#class-vs-types-vs-interfaces-features--)
    - [Interfaces](#interfaces)
      - [Pros:](#pros)
    - [Cons:](#cons)
    - [Types](#types)
      - [Pros:](#pros-1)
      - [Cons:](#cons-1)
    - [Classes](#classes)
      - [Pros:](#pros-2)
      - [Cons:](#cons-2)
  - [Interface Example](#interface-example)
  - [Features Demonstrated for Interface:](#features-demonstrated-for-interface)
  - [Type Example:](#type-example)
  - [Features Demonstrated for Types:](#features-demonstrated-for-types)
  - [Class example:](#class-example)
  - [Features Demonstrated for class:](#features-demonstrated-for-class)


## Class Vs Types Vs Interfaces Features  : 
| Feature                   | Classes                                                                                     | Types                                                                                           | Interfaces                                                                                     |
|---------------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Inheritance**           | Supports inheritance and method definitions.                                                | Can use intersections and unions for composition but not inheritance.                           | Supports inheritance through `extends` keyword.                                                |
| **Methods**               | Can define methods directly within the class.                                               | Cannot define methods directly within the type alias.                                           | Cannot define methods directly but can define function signatures.                            |
| **Modifiers**             | Supports access modifiers (public, private, protected).                                     | Does not support access modifiers.                                                              | Does not support access modifiers.                                                             |
| **Instance Creation**     | Can create instances using the `new` keyword.                                               | Cannot create instances directly.                                                               | Cannot create instances directly.                                                              |
| **Declaration Merging**   | Not supported.                                                                              | Not supported.                                                                                  | Supported, allows adding more properties to an interface declared in multiple places.          |
| **Static Properties**     | Supports static properties and methods.                                                     | Does not support static properties and methods.                                                 | Does not support static properties and methods.                                                |
| **Readability**           | Often more readable and understandable, especially for OOP patterns.                        | Flexible and concise for simple type definitions.                                               | More intuitive and readable for defining object shapes and extending types.                    |
| **Type Guards**           | Can use `instanceof` for type guards.                                                       | Can use custom type guards.                                                                     | Can use custom type guards.                                                                    |
| **Tooling Support**       | Good tooling support in most editors.                                                       | Good tooling support in most editors.                                                           | Good tooling support in most editors.                                                          |
| **Union and Intersection Types** | N/A                                                                               | Can easily define union (\|) and intersection (&) types.                                        | N/A                                                                                            |
| **Flexibility**           | N/A                                                                                         | Can alias any type including primitive types, tuples, and complex expressions.                  | N/A                                                                                            |
| **Advanced Type Manipulation** | N/A                                                                                   | Can be used with mapped types and conditional types more flexibly.                              | N/A                                                                                            |
| **Verbosity**             | Can be more verbose compared to types and interfaces.                                       | Less verbose but can be complex for advanced type manipulations.                                | Less verbose but can become complex with multiple extensions.                                  |
| **Composition**           | Less flexible for composing multiple types.                                                 | Very flexible with unions and intersections.                                                    | Flexible with multiple inheritance but not as much as type intersections.                      |
| **Utility Types**         | Cannot use TypeScript utility types directly.                                               | Can leverage TypeScript utility types like `Partial`, `Pick`, `Omit`, etc.                      | Can leverage TypeScript utility types but less intuitive for certain manipulations.            |
| **Instance Methods**      | Requires more boilerplate code to define methods.                                           | Cannot define instance methods directly.                                                        | Cannot define instance methods directly, only function signatures.                             |
| **Static Typing**         | Tied to runtime constructs, which can be limiting.                                          | Purely compile-time constructs, offering more flexibility.                                      | Purely compile-time constructs, offering more flexibility.                                     |
| **Complexity**            | Can become complex and difficult to manage with deep inheritance hierarchies.               | Can become complex with advanced type manipulations.                                            | Can become complex with extensive multiple inheritance.                                        |
| **OOP Patterns**          | Fits well with traditional OOP patterns.                                                    | Less intuitive for some OOP patterns.                                                           | Often fits better with traditional OOP patterns.                                               |


### Interfaces
#### Pros:

1. Declaration Merging: Multiple declarations with the same name are merged into a single interface.
2. Extensibility: Interfaces are easily extendable via extends.
3. Tooling and readability: Often more readable and understood by TypeScript tools.

### Cons:
1. Limited features compared to types: Cannot be used to define complex types like unions and intersections directly.
2. More restrictive with some advanced features: For example, cannot be used with mapped types directly.

### Types
#### Pros:

1. Union and Intersection Types: Can easily define union (|) and intersection (&) types.
2. More flexibility: Can alias any type including primitive types, tuples, and complex expressions.
3. Advanced type manipulation: Can be used with mapped types and conditional types more flexibly.

#### Cons:

1. No declaration merging: Cannot declare the same type name multiple times to merge them.
2. Less intuitive for some OOP patterns: Interfaces often fit better with traditional OOP patterns.

### Classes
#### Pros:

1. Encapsulation and Inheritance: Supports encapsulation and inheritance, allowing for well-structured and reusable code.
2. Methods and Properties: Can define both methods and properties within a class, making it easy to associate behavior with data.
3. Access Modifiers: Supports access modifiers (public, private, protected) for controlling the visibility of properties and methods.
4. Instance Creation: Allows the creation of instances using the new keyword, providing a clear and familiar instantiation pattern.
5. Static Members: Supports static properties and methods, which belong to the class itself rather than to any instance.

#### Cons:
1. Verbosity: Can be more verbose compared to types and interfaces, leading to more boilerplate code.
2. Complexity: Can become complex and difficult to manage with deep inheritance hierarchies.
3. Composition Limitations: Less flexible for composing multiple types compared to types with unions and intersections.
4. No Declaration Merging: Does not support declaration merging, unlike interfaces.
5. Static Typing Limitations: Tied to runtime constructs, which can be limiting compared to the compile-time flexibility offered by types and interfaces.


## Interface Example

```js
// Basic interface definition
interface Person {
  id: number;
  name: string;
  age: number;
  email?: string; // Optional property
  readonly ssn: string; // Readonly property

  // Method signature
  greet(): void;
}

// Interface inheritance
interface Employee extends Person {
  employeeId: number;
  department: string;
}

// Index signatures
interface StringArray {
  [index: number]: string;
}

// Function types
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// Hybrid types
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

// Declaration merging
interface Book {
  title: string;
  author: string;
}

interface Book {
  publishedYear: number;
}

// Implementing an interface
class Developer implements Employee {
  id: number;
  name: string;
  age: number;
  ssn: string;
  employeeId: number;
  department: string;

  constructor(id: number, name: string, age: number, ssn: string, employeeId: number, department: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.ssn = ssn;
    this.employeeId = employeeId;
    this.department = department;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I work in the ${this.department} department.`);
  }
}

// Using an index signature
const myArray: StringArray = ["Alice", "Bob", "Charlie"];
console.log(myArray[1]); // Output: Bob

// Using a function type
const mySearch: SearchFunc = function (source: string, subString: string): boolean {
  return source.includes(subString);
};

console.log(mySearch("Hello, world", "world")); // Output: true

// Using a hybrid type
function getCounter(): Counter {
  const counter = (function (start: number) {
    console.log(`Counter started at: ${start}`);
    return `Counter started at: ${start}`;
  }) as Counter;
  counter.interval = 123;
  counter.reset = function () {
    console.log("Counter reset");
  };
  return counter;
}

const counter = getCounter();
counter(10); // Output: Counter started at: 10
counter.reset(); // Output: Counter reset
console.log(counter.interval); // Output: 123

// Using declaration merging
const myBook: Book = {
  title: "TypeScript Handbook",
  author: "TypeScript Team",
  publishedYear: 2021
};

console.log(myBook);

```
## Features Demonstrated for Interface:

1. Basic Interface Definition:
interface Person defines properties and method signatures.

2. Optional Properties:
email?: string shows how to define optional properties.

3. Readonly Properties:
readonly ssn: string demonstrates the use of readonly properties.

4. Method Signatures:
greet(): void defines a method signature within the interface.

5. Interface Inheritance:
interface Employee extends Person shows how to extend interfaces.

6. Index Signatures:
interface StringArray demonstrates how to define index signatures.

7. Function Types:
interface SearchFunc shows how to define function types.

8. Hybrid Types:
interface Counter combines callable and object properties.

9. Declaration Merging:
Two interface Book declarations merge into a single interface.

10. Implementing an Interface:
class Developer implements Employee shows how to implement an interface in a class.

## Type Example:

```js
// Union Type: A type that can be one of several types
type ID = number | string;

// Intersection Type: A type that combines multiple types
type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type UserBase = {
  id: ID;
  name: string;
  email: string;
};

// Extending a type
type User = UserBase & Timestamps;


// Extending a type
type Admin = User & {
  type: 'admin';
};

// Type Alias: A name for any type
type Point = {
  x: number;
  y: number;
};

// Utility Types: Partial, Required, Readonly, and more
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;

// Advanced Type Manipulation: Exclude, Extract, NonNullable, etc.
type Response = "success" | "error" | "loading";
type SuccessResponse = Exclude<Response, "error" | "loading">;
type ErrorResponse = Extract<Response, "error">;

type NullableUser = User | null | undefined;
type NonNullableUser = NonNullable<NullableUser>;

// Mapped Types: Creating new types by transforming properties
type ApiResponse<T> = {
  [P in keyof T]: T[P];
};

// Using type guards with custom type predicates
function isString(value: any): value is string {
  return typeof value === 'string';
}

function displayID(id: ID) {
  if (isString(id)) {
    console.log(`ID is a string: ${id}`);
  } else {
    console.log(`ID is a number: ${id}`);
  }
}

// Type Assertions: Manually specifying a type
const someValue: any = "Hello, TypeScript!";
const strLength: number = (someValue as string).length;

console.log(`String length: ${strLength}`);

// Example usage
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const partialUser: PartialUser = {
  name: "Bob"
};

const successResponse: SuccessResponse = "success";
const errorResponse: ErrorResponse = "error";

displayID(user.id);

console.log(user);
console.log(partialUser);
console.log(`Response: ${successResponse}`);
console.log(`Error: ${errorResponse}`);
```

## Features Demonstrated for Types:
1. Union Types:
type ID = number | string; allows ID to be either number or string.

2. Intersection Types:
type User = UserBase & Timestamps; combines UserBase and Timestamps into a single type.

3. Type Aliases:
type Point = { x: number; y: number; }; creates an alias for the Point type.

4. Utility Types:
Partial, Required, Readonly applied to User.

5. Advanced Type Manipulation:
Exclude, Extract, NonNullable used to manipulate types.

6. Mapped Types:
type ApiResponse<T> = { [P in keyof T]: T[P]; }; transforms properties of a type.

7. Type Guards:
isString function to check if a value is a string.

8. Type Assertions:
(someValue as string).length; asserts someValue is a string.


## Class example:


```js
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
```

## Features Demonstrated for class:

1. Encapsulation and Inheritance:

The Person class has public, private, and protected members.
The Employee class inherits from Person.

2. Methods and Properties:
Public, private, and protected properties and methods are defined and used.

3. Access Modifiers:

public properties (name, employeeId), methods (greet, work).
private properties (ssn), methods (displaySSN).
protected properties (age), methods (displayAge).

4. Instance Creation:

An instance of the Employee class is created using the new keyword.

5. Static Members:

Static property (species) and method (getSpecies) are defined and accessed without creating an instance.
This example showcases the power and flexibility of TypeScript classes, encapsulating data and behavior while providing clear access control through modifiers and inheritance.
