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

class AnotherExample {
  @Log
  @Time
  compute(a: number, b: number): number {
      return a + b;
  }

  @Time
  @Log
  subtract(a: number, b: number): number {
      return a - b;
  }
}

const example = new AnotherExample();
example.compute(3, 4);
example.subtract(10, 5);


