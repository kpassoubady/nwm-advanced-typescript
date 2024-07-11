# OO Design Pattens

## Patterns in a nutshell

| Design Pattern Name | Type                 | Description                                                                                   |
|---------------------|----------------------|-----------------------------------------------------------------------------------------------|
| `Singleton`         | Creational           | Ensures a class has only one instance and provides a global point of access to it.            |
| `Factory Method`    | Creational           | Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created. |
| `Abstract Factory`  | Creational           | Provides an interface for creating families of related or dependent objects without specifying their concrete classes. |
| `Builder`           | Creational           | Separates the construction of a complex object from its representation, allowing the same construction process to create various representations. |
| `Prototype`         | Creational           | Specifies the kind of objects to create using a prototypical instance, and creates new objects by copying this prototype. |
| `Adapter`           | Structural           | Converts the interface of a class into another interface the clients expect, allowing classes to work together that couldn't otherwise because of incompatible interfaces. |
| `Bridge`            | Structural           | Decouples an abstraction from its implementation so that the two can vary independently.      |
| `Composite`         | Structural           | Composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions of objects uniformly. |
| `Decorator`         | Structural           | Attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality. |
| `Facade`            | Structural           | Provides a unified interface to a set of interfaces in a subsystem, making the subsystem easier to use. |
| `Flyweight`         | Structural           | Uses sharing to support large numbers of fine-grained objects efficiently.                    |
| `Proxy`             | Structural           | Provides a surrogate or placeholder for another object to control access to it.               |
| `Chain of Responsibility` | Behavioral   | Passes a request along a chain of handlers, allowing each handler to either process the request or pass it to the next handler in the chain. |
| `Command`           | Behavioral           | Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. |
| `Interpreter`       | Behavioral           | Defines a representation of a language's grammar and uses an interpreter to interpret sentences in the language. |
| `Iterator`          | Behavioral           | Provides a way to access elements of an aggregate object sequentially without exposing its underlying representation. |
| `Mediator`          | Behavioral           | Defines an object that encapsulates how a set of objects interact, promoting loose coupling by keeping objects from referring to each other explicitly. |
| `Memento`           | Behavioral           | Captures and externalizes an object's internal state without violating encapsulation, allowing the object to be restored to this state later. |
| `Observer`          | Behavioral           | Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. |
| `State`             | Behavioral           | Allows an object to alter its behavior when its internal state changes, appearing to change the object's class. |
| `Strategy`          | Behavioral           | Defines a family of algorithms, encapsulates each one, and makes them interchangeable, allowing the algorithm to vary independently from the clients that use it. |
| `Template Method`   | Behavioral           | Defines the skeleton of an algorithm in a method, deferring some steps to subclasses, allowing them to redefine certain steps of an algorithm without changing its structure. |
| `Visitor`           | Behavioral           | Represents an operation to be performed on the elements of an object structure, allowing new operations to be defined without changing the classes of the elements on which it operates. |