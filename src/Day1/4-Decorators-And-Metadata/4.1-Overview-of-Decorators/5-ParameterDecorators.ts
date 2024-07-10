export {};

function ParameterDecorator(target: any, propertyKey: string | symbol, parameterIndex: number) {
  // target is either the constructor function (for constructor parameters) or prototype (for method parameters)
  // propertyKey is the name of the method
  // parameterIndex is the index of the decorated parameter
  console.log(`Parameter decorator called on parameter ${parameterIndex} of ${String(propertyKey)}`);
}

class MyClass {
  myMethod(@ParameterDecorator param1: string, @ParameterDecorator param2: number) {
      // Method implementation
  }
}
