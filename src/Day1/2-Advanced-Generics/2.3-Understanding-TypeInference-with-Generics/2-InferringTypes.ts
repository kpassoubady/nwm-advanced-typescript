export {};

function loggingIdentity<T>(arg: T): T {
  console.log(arg);
  return arg;
}

let id1 = loggingIdentity("hello"); // output: "hello"
console.log(id1); // "hello"

let id2 = loggingIdentity(10); // output: 10
console.log(id2); // 10
