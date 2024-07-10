export {};


// Decorator Function
function logMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Method "${propertyKey}" was called with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Method "${propertyKey}" returned:`, result);
    return result;
  };

  return descriptor;
}

// Example Class
class Calculator {
  @logMethod
  add(x: number, y: number): number {
    return x + y;
  }
}

const calculator = new Calculator();
calculator.add(2, 3); 
// Outputs: 
// Method "add" was called with arguments: [2, 3], 
// Method "add" returned: 5
