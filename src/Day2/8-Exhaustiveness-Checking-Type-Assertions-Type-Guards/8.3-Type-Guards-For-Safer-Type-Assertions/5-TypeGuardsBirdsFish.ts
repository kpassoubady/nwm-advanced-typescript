export { };

interface Bird {
    type: 'bird';
    wingspan: number;
}

interface Fish {
    type: 'fish';
    length: number;
}

function isBird(animal: Bird | Fish): animal is Bird {
    return animal.type === 'bird';
}

function getAnimalDescription(animal: Bird | Fish): string {
    if (isBird(animal)) {
        return `This is a bird with a wingspan of ${animal.wingspan} cm.`;
    } else {
        return `This is a fish that is ${animal.length} cm long.`;
    }
}

const bird: Bird = { type: 'bird', wingspan: 50 };
const fish: Fish = { type: 'fish', length: 30 };

console.log(getAnimalDescription(bird)); 
console.log(getAnimalDescription(fish)); 
