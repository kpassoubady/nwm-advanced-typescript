export { };

function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
      console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`Result from ${propertyKey}: ${result}`);
      return result;
  };

  return descriptor;
}

function Time(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
      console.time(propertyKey);
      const result = originalMethod.apply(this, args);
      console.timeEnd(propertyKey);
      return result;
  };

  return descriptor;
}

function LogAndTime(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  Log(target, propertyKey, descriptor);
  Time(target, propertyKey, descriptor);
  return descriptor;
}

class AnotherExampleClass {
  @LogAndTime
  calculate(a: number, b: number): number {
      return a * b;
  }
}

const anotherExample = new AnotherExampleClass();
anotherExample.calculate(3, 4);
