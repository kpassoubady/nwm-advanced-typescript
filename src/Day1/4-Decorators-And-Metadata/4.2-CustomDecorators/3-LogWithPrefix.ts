export {};

function LogWithPrefix(prefix: string) {
  return function (target: any, propertyName: string, propertyDesciptor: PropertyDescriptor): PropertyDescriptor {
      const method = propertyDesciptor.value;

      propertyDesciptor.value = function (...args: any[]) {
          console.log(`${prefix} - Call to ${propertyName} with arguments: ${JSON.stringify(args)}`);
          const result = method.apply(this, args);
          console.log(`${prefix} - Result from ${propertyName}: ${result}`);
          return result;
      };

      return propertyDesciptor;
  };
}

class CalculatorExample {
  @LogWithPrefix('DEBUG')
  multiply(a: number, b: number): number {
      return a * b;
  }

  @LogWithPrefix('INFO')
  add(a: number, b: number): number {
      return a + b;
  }
}

const calculate = new CalculatorExample();
calculate.multiply(4, 5);
calculate.add(2, 3);
