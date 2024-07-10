export { };

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

type Example1 = Dog extends Animal ? number : string; // number
let example1 : Example1 = 10;
console.log(example1);

interface Cat extends Animal {
    isGrumpy: boolean;
}

type Example2 = Dog extends Cat ? number : string; // string
let example2 : Example2 = "Kangs";
console.log(example2);
