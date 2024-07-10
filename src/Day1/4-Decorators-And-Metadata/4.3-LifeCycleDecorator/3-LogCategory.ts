export {};

function First() {
  console.log('First Factory');
  return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
      console.log('First Decorator');
  };
}

function Second() {
  console.log('Second Factory');
  return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
      console.log('Second Decorator');
  };
}


@First()
@Second()
class ExampleClass {
  //@First()
  //@Second()
  public method(param: any) {
    console.log('method executed');
  }
}

const instance = new ExampleClass();
instance.method('hello');
