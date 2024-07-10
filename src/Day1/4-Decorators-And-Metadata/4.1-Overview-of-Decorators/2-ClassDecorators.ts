export {};

function ClassDecorator(target: Function) {
  // target is the constructor function of the class
  console.log('Class decorator called on:', target);
}

@ClassDecorator
class House {
  // Class implementation
}

@ClassDecorator
class Mouse {
  // Class implementation
}