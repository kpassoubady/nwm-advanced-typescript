export { };

interface Person {
    name: string;
    age: number | null;
}

type NonNullablePerson = {
    [K in keyof Person]: NonNullable<Person[K]>;
};

const person: Person = {
    name: 'John',
    age: null,
};

const nonNullablePerson: NonNullablePerson = {
    name: 'John',
    age: 0,
};

console.log(person.age); // Outputs null
console.log(nonNullablePerson.age); // Outputs 0
