export { };

/*
  We defined a generic type ReturnType that takes a type T. 
  We used a conditional type to check if T is a function that takes any number of arguments and returns a value. 
  If so, we used the infer keyword to capture the return type of the function and assign it to the R type parameter. 
  Otherwise, we assigned the never type.
*/

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;


/*
 We defined a function add that takes two numbers and returns their sum. 
 We used the typeof operator to get the type of the add function and assigned it to the AddReturnType type. 
 Since add returns a number, the AddReturnType type is inferred as number.
*/
function add(a: number, b: number): number {
    return a + b;
}
type AddReturnType = ReturnType<typeof add>; // type is number
let addReturnTypeVar: AddReturnType = 10;
console.log(typeof addReturnTypeVar);

/*
 We defined a function concat that takes two strings and returns their concatenated string. 
 We used the typeof operator to get the type of the concat function and assigned it to the ConcatReturnType type. 
 Since concat returns a string, the ConcatReturnType type is inferred as string.
*/
function concat(a: string, b: string): string {
    return a + b;
}
type ConcatReturnType = ReturnType<typeof concat>; // type is string
let concatReturnTypeVar: ConcatReturnType = "Kangs";
console.log(typeof concatReturnTypeVar);
