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

let length3 = getLength(["kangs","alex","addy","max"]); 
console.log(length3); // 4

//let lenght4 = getLength(10); // Argument of type '10' is not assignable to parameter of type 'Lengthwise'.ts(2345)

let length5 = getLength({ length: 10, value: 3 });
console.log(length5);
