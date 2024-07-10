export {};

function logClass(target: any) {
  console.log(`Class ${target.name} is being instantiated.`);
}

@logClass
class MyClass {
  constructor() {}
}

new MyClass();
// Output: Class MyClass is being instantiated.
