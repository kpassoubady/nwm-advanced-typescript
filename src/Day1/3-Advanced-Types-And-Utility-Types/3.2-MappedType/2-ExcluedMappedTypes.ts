export { };

interface Person {
    name: string;
    age: number;
    address: string;
}

type PersonWithoutAddress = { [P in keyof Person as Exclude<P, 'address'>]: Person[P] };

const person: Person = { name: 'John', age: 30, address: '123 Main St.' };
const personWithoutAddress: PersonWithoutAddress = { name: 'John', age: 30 };

// personWithoutAddress.address = '456 Elm St.'; // Error: Property 'address' does not exist on type 'PersonWithoutAddress'.
