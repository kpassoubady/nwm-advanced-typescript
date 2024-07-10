export {};

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

interface Cat extends Animal {
    isGrumpy: boolean;
}

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).breed !== undefined;
}

function greet(animal: Animal) {
    if (isDog(animal)) {
        console.log(`Woof woof, ${animal.name}!`);
    } else {
        console.log(`Hello, ${animal.name}!`);
    }
}

const dog: Dog = { name: 'Fido', age: 5, breed: 'Labrador Retriever' };
const cat: Cat = { name: 'Grumpy Cat', age: 10, isGrumpy: true };

greet(dog); // prints "Woof woof, Fido!"
greet(cat); // prints "Hello, Grumpy Cat!"
