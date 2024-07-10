export {};

function MethodDecorator(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  // target is either the constructor function (for static methods) or prototype (for instance methods)
  // propertyKey is the name of the decorated method
  // descriptor is the Property Descriptor for the method
  console.log('Method decorator called on:', propertyKey);
}

class MyClass {
  @MethodDecorator
  static myStaticMethod() {
      // Static method implementation
  }

  @MethodDecorator
  myInstanceMethod() {
      // Instance method implementation
  }
}
