export { };

function getLengthOfArray<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

let myArr = getLengthOfArray<number>([1, 2, 3, 4, 5]); // Output: 5
let myString = getLengthOfArray<string>(["1", "2", "3", "4", "5", "6"]); // Output: 6
let myBool = getLengthOfArray<boolean>([true, false, true, false, true, false]);
let myObj = getLengthOfArray<object>([{ a: 1 }, { b: 2 }, { c: 3 }]);
