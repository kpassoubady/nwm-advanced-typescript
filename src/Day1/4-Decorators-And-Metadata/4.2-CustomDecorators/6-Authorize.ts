export {};

function Authorize(role: string) {
  return function (target: any, propertyName: string, propertyDesciptor: PropertyDescriptor): PropertyDescriptor {
      const method = propertyDesciptor.value;

      propertyDesciptor.value = function (...args: any[]) {
          if (currentUserRole !== role) {
              throw new Error('Unauthorized');
          }
          return method.apply(this, args);
      };

      return propertyDesciptor;
  };
}

let currentUserRole = 'admin';

class SecureClass {
  @Authorize('admin')
  secureMethod() {
      console.log('This is a secure method.');
  }
}

const secureInstance = new SecureClass();
try {
  secureInstance.secureMethod();
} catch (error) {
  console.error((error as Error).message);
}

currentUserRole = 'user';
try {
  secureInstance.secureMethod();
} catch (error) {
  console.error((error as Error).message);
}
