export { };
type Fruit = 'apple' | 'banana' | 'orange' | 'cherry' ;


function getFruitMessage(fruit: Fruit): string {
    switch (fruit) {
        case 'apple':
            return 'You have selected an apple.';
        case 'banana':
            return 'You have selected a banana.';
        case 'orange':
            return 'You have selected an orange.';
        case 'cherry':
            return 'You have selected an cherry.';
        default:
            // This will trigger a compiler error, because 'never' is not assignable to type 'string'
            const _exhaustiveCheck: never = fruit;
            return _exhaustiveCheck;
    }
}

let fruit1 : Fruit = 'apple';
let fruit2 : Fruit = 'banana';
let fruit3 : Fruit = 'orange';
// let fruit4 : Fruit = 'blueberry'; 
// Type '"blueberry"' is not assignable to type 'Fruit'.ts(2322)


console.log(getFruitMessage(fruit1));
console.log(getFruitMessage(fruit2));
console.log(getFruitMessage(fruit3));
// console.log(getFruitMessage(fruit4));
