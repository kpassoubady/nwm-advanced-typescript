export { };

type Animal = { type: 'cat', name: string }
    | { type: 'dog', breed: string }
    | { type: 'bird', species: string };

function getSound(animal: Animal): string {
    switch (animal.type) {
        case 'cat':
            return 'Meow';
        case 'dog':
            return 'Woof';
        case 'bird':
            return 'Tweet';
        default:
            // TypeScript will throw an error here because the switch statement is not exhaustive
            const _exhaustiveCheck: never = animal;
            throw new Error(`Unhandled animal type: ${animal}`);
    }
}

let cat1: Animal = { name: 'catherine', type: 'cat' };
let dog1: Animal = { type: 'dog', breed: 'milton' };
let bird1: Animal = { type: 'bird', species: 'peacock' }
let bird2: Animal = { type: 'bird', species: 'crow' }

console.log(getSound(cat1));
console.log(getSound(dog1));
console.log(getSound(bird1));
console.log(getSound(bird2));

