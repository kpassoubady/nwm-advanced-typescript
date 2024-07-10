export {};

function LogAccess(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalGet = descriptor.get;
  const originalSet = descriptor.set;

  descriptor.get = function () {
    console.log(`Getting value of ${propertyKey}`);
    return originalGet && originalGet.apply(this);
  };

  descriptor.set = function (value) {
    console.log(`Setting value of ${propertyKey} to ${value}`);
    if (originalSet) {
      originalSet.apply(this, [value]);
    }
  };

  return descriptor;
}

class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  @LogAccess
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const person = new Person('John Doe');
console.log(person.name); // Getting value of name
person.name = 'Jane Doe'; // Setting value of name to Jane Doe
console.log(person.name); // Getting value of name
