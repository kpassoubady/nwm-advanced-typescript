export {};

type FirstParam<T> = T extends (param1: infer P, ...args: any[]) => any ? P : never;

function greet(name: string, message: string): void {
    console.log(`${name}: ${message}`);
}

type GreetFirstParam = FirstParam<typeof greet>; // type is string
let firstParamVar: GreetFirstParam; // firstParamVar is of type string
firstParamVar = "Kangs" // assign value of type string
console.log(firstParamVar);
// Will error if you assign number type
// firstParamVar = 10; 