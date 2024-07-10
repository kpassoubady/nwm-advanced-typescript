// Decorator Factory
function validateString(errorMessage: string) {
  return function(target: Object, propertyKey: string) {
    let value: string;

    const getter = function() {
      return value;
    };

    const setter = function(newValue: string) {
      if (newValue.trim().length === 0) {
        throw new Error(errorMessage);
      }
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}

// Example Class
class User {
  @validateString('Name cannot be empty')
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User('John Doe'); // Valid
const invalidUser = new User(''); // Throws an error: Name cannot be empty