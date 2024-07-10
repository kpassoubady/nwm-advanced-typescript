# Decorotor Types

## Description of Decorotor Types

| Decorator Type        | Description                                                                                                             |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------|
| `Class Decorator`     | Declares a class decorator. A class decorator is applied to the constructor of a class and can be used to observe, modify, or replace a class definition. |
| `Property Decorator`  | Declares a property decorator. A property decorator is applied to a single property in a class declaration.             |
| `Method Decorator`    | Declares a method decorator. A method decorator is applied to a method in a class declaration.                          |
| `Accessor Decorator`  | Declares an accessor decorator. An accessor decorator is applied to a getter or setter in a class declaration.          |
| `Parameter Decorator` | Declares a parameter decorator. A parameter decorator is applied to a single parameter in a method declaration.         |

## Decorator Factory Method Definition

| Decorator Type        | Decorator Factory Method Definition                                     |
|-----------------------|--------------------------------------------------------------------------|
| `Class Decorator`     | function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T): T |
| `Property Decorator`  | function propertyDecorator(target: Object, propertyKey: string \\| symbol): void  |
| `Method Decorator`    | function methodDecorator(target: Object, propertyKey: string \\| symbol, descriptor: TypedPropertyDescriptor<any>): void |
| `Accessor Decorator`  | function accessorDecorator(target: Object, propertyKey: string \\| symbol, descriptor: TypedPropertyDescriptor<any>): void |
| `Parameter Decorator` | function parameterDecorator(target: Object, propertyKey: string \\| symbol, parameterIndex: number): void |
