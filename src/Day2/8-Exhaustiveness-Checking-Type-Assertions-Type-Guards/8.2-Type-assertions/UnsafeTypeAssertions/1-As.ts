export {};

let value: any = "hello";
let length: number = (value as string).length;
console.log(length);
value = 10;
length = (value as number);
console.log(length);
