export { };

interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

let length1 = getLength("kangs");
console.log(length1); // 5

let length2 = getLength([1, 2, 3]);
console.log(length2); // 3

let length3 = getLength(["kangs","alex","addy","max"]); // Error: Type '10' does not have a property 'length'
console.log(length3); // 4
