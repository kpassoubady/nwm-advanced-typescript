# Class Vs Types Vs Interfaces

## Pros: 
| Feature                   | Classes                                                                                     | Types                                                                                           | Interfaces                                                                                     |
|---------------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Inheritance**           | Supports inheritance and method definitions.                                                | Can use intersections and unions for composition but not inheritance.                          | Supports inheritance through `extends` keyword.                                                |
| **Methods**               | Can define methods directly within the class.                                               | Cannot define methods directly within the type alias.                                           | Cannot define methods directly but can define function signatures.                            |
| **Modifiers**             | Supports access modifiers (public, private, protected).                                     | Does not support access modifiers.                                                              | Does not support access modifiers.                                                             |
| **Instance Creation**     | Can create instances using the `new` keyword.                                               | Cannot create instances directly.                                                               | Cannot create instances directly.                                                              |
| **Declaration Merging**   | Not supported.                                                                              | Not supported.                                                                                  | Supported, allows adding more properties to an interface declared in multiple places.          |
| **Static Properties**     | Supports static properties and methods.                                                     | Does not support static properties and methods.                                                 | Does not support static properties and methods.                                                |
| **Readability**           | Often more readable and understandable, especially for OOP patterns.                        | Flexible and concise for simple type definitions.                                               | More intuitive and readable for defining object shapes and extending types.                    |
| **Type Guards**           | Can use `instanceof` for type guards.                                                       | Can use custom type guards.                                                                     | Can use custom type guards.                                                                    |
| **Tooling Support**       | Good tooling support in most editors.                                                       | Good tooling support in most editors.                                                           | Good tooling support in most editors.                                                          |

## Cons:

| Feature                   | Classes                                                                                     | Types                                                                                           | Interfaces                                                                                     |
|---------------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Verbosity**             | Can be more verbose compared to types and interfaces.                                       | Less verbose but can be complex for advanced type manipulations.                                | Less verbose but can become complex with multiple extensions.                                  |
| **Composition**           | Less flexible for composing multiple types.                                                 | Very flexible with unions and intersections.                                                    | Flexible with multiple inheritance but not as much as type intersections.                      |
| **Declaration Merging**   | Not supported.                                                                              | Not supported.                                                                                  | Supported, which can lead to unintentional property conflicts.                                 |
| **Type Manipulation**     | Not as flexible as types for advanced type manipulations (e.g., mapped types).              | Extremely flexible for advanced type manipulations.                                             | Less flexible compared to types for advanced type manipulations.                               |
| **Utility Types**         | Cannot use TypeScript utility types directly.                                               | Can leverage TypeScript utility types like `Partial`, `Pick`, `Omit`, etc.                      | Can leverage TypeScript utility types but less intuitive for certain manipulations.            |
| **Instance Methods**      | Requires more boilerplate code to define methods.                                           | Cannot define instance methods directly.                                                        | Cannot define instance methods directly, only function signatures.                             |
| **Static Typing**         | Tied to runtime constructs, which can be limiting.                                           | Purely compile-time constructs, offering more flexibility.                                      | Purely compile-time constructs, offering more flexibility.                                     |
| **Complexity**            | Can become complex and difficult to manage with deep inheritance hierarchies.               | Can become complex with advanced type manipulations.                                            | Can become complex with extensive multiple inheritance.                                        |


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

#### Classes
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

