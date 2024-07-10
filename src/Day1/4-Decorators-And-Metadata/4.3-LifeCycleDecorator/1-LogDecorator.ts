function logDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(`Decorator executed for ${propertyKey}`);
  return descriptor;
}

class MyClass {
  @logDecorator
  method1() {
    console.log('method1 executed');
  }

  @logDecorator
  method2() {
    console.log('method2 executed');
  }
}

const instance = new MyClass();
instance.method1(); 
instance.method2(); 
// Output :
// Decorator executed for method1
// Decorator executed for method2
// method1 executed
// method2 executed