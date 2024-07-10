export {};

// Method decorator example
function MyMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // Modify behavior or add metadata for the method
  console.log("Method decorator called on:", propertyKey);
}

// Property decorator example
function MyPropertyDecorator(target: any, propertyKey: string) {
  // Modify behavior or add metadata for the property
  console.log("Property decorator called on:", propertyKey);
}

// Parameter decorator example
function MyParameterDecorator(target: any, methodName: string, parameterIndex: number) {
  // Modify behavior or add metadata for the parameter
  console.log("Parameter decorator called on parameter at index:", parameterIndex);
}

class MyDecoratedClass {
  @MyPropertyDecorator
  myProperty!: string;

  @MyMethodDecorator
  myMethod() {}

  myOtherMethod(@MyParameterDecorator param1: string, @MyParameterDecorator param2: number) {}
}

// Output:
// "Property decorator called on: myProperty"
// "Method decorator called on: myMethod"
// "Parameter decorator called on parameter at index: 0"
// "Parameter decorator called on parameter at index: 1"
