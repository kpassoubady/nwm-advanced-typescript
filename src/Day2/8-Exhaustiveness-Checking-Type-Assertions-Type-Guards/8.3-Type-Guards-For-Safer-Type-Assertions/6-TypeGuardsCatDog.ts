export { };

interface Cat {
    name: string;
    purr: () => void;
}

interface Dog {
    name: string;
    bark: () => void;
}

function isDog(animal: Cat | Dog): animal is Dog {
    return (animal as Dog).bark !== undefined;
}

function pet(animal: Cat | Dog) {
    if (isDog(animal)) {
        console.log("It is a dog");
        return animal.bark();
    } else {
        console.log("It is a cat");
        return animal.purr();
    }
}

function feedPet(pet: Cat | Dog) {
    if ("purr" in pet) {
        console.log("Feeding cat " + pet.name);
    } else {
        console.log("Feeding dog " + pet.name);
    }
}

const myCat: Cat = { name: "Fluffy", purr: () => console.log("Meow!") };
const myDog: Dog = { name: "Rufus", bark: () => console.log("Woof!") };

feedPet(myCat); 
feedPet(myDog); 

let cat: Cat = {
    name: 'robin', purr: () =>
        "purr,pur"
};

let dog: Dog = {
    name: 'melly', bark: () =>
        "Lol,lol"
};

console.log(pet(cat));
console.log(pet(dog)); 
