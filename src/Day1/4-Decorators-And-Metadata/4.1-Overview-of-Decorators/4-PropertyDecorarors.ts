export {};

function PropertyDecorator(target: any, propertyKey: string | symbol) {
  // target is either the constructor function (for static properties) or prototype (for instance properties)
  // propertyKey is the name of the decorated property
  console.log('Property decorator called on:', propertyKey);
}

class MyClass {
  @PropertyDecorator
  static myStaticProperty: string;

  @PropertyDecorator
  myInstanceProperty!: number;
}
