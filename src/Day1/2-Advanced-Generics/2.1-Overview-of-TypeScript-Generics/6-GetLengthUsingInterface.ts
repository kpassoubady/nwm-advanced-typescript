export {}


/*
An interface named Lengthwise is declared. This interface has a single property, length, which is of type number. 
Interfaces in TypeScript are a way of defining contracts within your code and they define the syntax for classes to follow
*/
interface Lengthwise {
  length: number;
}

/*
This function takes one argument arg of a generic type T. 
The generic type T is constrained to extend Lengthwise, which means that whatever type T is, it must have a length property of type number.
The function returns the length property of arg
*/

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

let length1 = getLength("kangs");
console.log(length1); 
let length2 = getLength([1, 2, 3]);
console.log(length2);
