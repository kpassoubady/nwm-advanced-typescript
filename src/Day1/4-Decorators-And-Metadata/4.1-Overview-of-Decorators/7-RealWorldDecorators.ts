// Class decorator
function ClassDecorator(target: Function) {
  console.log('Class decorator called on:', target);
}

// Method decorator
function MethodDecorator(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  console.log(`Method decorator called on method '${String(propertyKey)}' of class '${target.constructor.name}'`);
}

// Property decorator
function PropertyDecorator(target: any, propertyKey: string | symbol) {
  console.log(`Property decorator called on property '${String(propertyKey)}' of class '${target.constructor.name}'`);
}

// Parameter decorator (for method parameters)
function ParameterDecorator(target: any, propertyKey: string | symbol, parameterIndex: number) {
  console.log(`Parameter decorator called on parameter ${parameterIndex} of method '${String(propertyKey)}' of class '${target.constructor.name}'`);
}

// Example classes
@ClassDecorator
class Address {
  constructor(public street: Street, public city: string, public state: string) { }

  @MethodDecorator
  getAddress(): string {
    return `${this.street.getStreet()}, ${this.city}, ${this.state}`;
  }

  @PropertyDecorator
  zipCode!: string;
}

@ClassDecorator
class Street {
  constructor(public name: string) { }

  @PropertyDecorator
  streenNumber!: number;

  getStreet(
    @ParameterDecorator addressLine2?: string  // Parameter decorator applied to method parameter
  ): string {
    return `${this.streenNumber} ${this.name} (${addressLine2 ? addressLine2 : ''})`;
  }
}

@ClassDecorator
class House {
  constructor(
    private address: Address,
  ) { }

  @MethodDecorator
  getFullAddress(
    @ParameterDecorator additionalInfo: string  // Parameter decorator applied to method parameter
  ): string {
    return `${this.address.getAddress()} (${additionalInfo})`;
  }
}

// Usage
const myStreet = new Street('Main Street');
myStreet.streenNumber = 123;
const myAddress = new Address(myStreet, 'Fremont', 'CA');

const myHouse = new House(myAddress);

console.log(myHouse.getFullAddress('Near the Park')); // Example usage of getFullAddress method
