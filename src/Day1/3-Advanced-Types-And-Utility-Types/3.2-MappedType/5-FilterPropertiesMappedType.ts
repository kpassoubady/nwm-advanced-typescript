export { };

interface Person {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
        state: string;
    };
}

interface PersonWithoutAge {
    name: string;
    address: {
        street: string;
        city: string;
        state: string;
    };
}


/*
 We define a type FilterPropertiesOfType that takes two generic type parameters T and U. 
 It creates a mapped type that iterates over all the keys of T and checks if the type of each property extends U. 
 If it does, it returns the key, otherwise it returns never. 
 The resulting mapped type is an object with keys that match the keys of T that have a value that extends U.
*/

type FilterPropertiesOfType<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type StringProperties = FilterPropertiesOfType<Person, string>;
type NumberProperties = FilterPropertiesOfType<Person, number>;
// Usage:
const person: Person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
    },
};

const personWithoutAge: PersonWithoutAge = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
    },
};

console.log(`person: ${JSON.stringify(person)}`);
console.log(`personWithoutAge: ${JSON.stringify(personWithoutAge)}`);

