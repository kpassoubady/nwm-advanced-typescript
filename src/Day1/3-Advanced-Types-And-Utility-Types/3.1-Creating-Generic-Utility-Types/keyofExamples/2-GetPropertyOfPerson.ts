export { };

interface Person {
    name: string;
    age: number;
    address: string;
}

type PersonKeys = keyof Person;

const personKeys: PersonKeys = 'name'; // Valid
// const personKeys: PersonKeys = 'occupation'; // Error: 'occupation' is not assignable to type 'name' | 'age' | 'address'

// define a generic function getProperty that takes an object obj of type T and a key key of type K, 
// where K is a key of T. The function returns the value of the property corresponding to the key. 

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}


const person: Person = {
    name: 'John',
    age: 30,
    address: '123 Main St.',
};

const name = getProperty(person, 'name'); // Type of name is string
const age = getProperty(person, 'age'); // Type of age is number
const address = getProperty(person, 'address'); // Type of address is string

// const occupation = getProperty(person, 'occupation'); // Error: Argument of type '"occupation"' is not assignable to parameter of type '"name" | "age" | "address"'
