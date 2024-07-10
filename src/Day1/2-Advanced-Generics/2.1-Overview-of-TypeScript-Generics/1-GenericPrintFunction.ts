export {};

function print<T>(arg: T): T {
  return arg;
}

let output1 = print<string>("welcome");
console.log(output1); // "welcome"

let output2 = print<number>(20);
console.log(output2); // 20
