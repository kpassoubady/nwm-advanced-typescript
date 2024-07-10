export {};

function print<T>(arg: T): T {
  return arg;
}

let output1 = print<string>("welcome");
console.log(output1); // "welcome"

let output2 = print<number>(20);

console.log(output2); // 20
let output3 = print<boolean>(10 > 20 ? true : false);
console.log(output3);
