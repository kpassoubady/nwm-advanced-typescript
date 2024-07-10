export { };

interface Person {
    name: string;
    age: number;
    email: string;
}

const person: Person = {
    name: 'Kangs',
    age: 30,
    email: 'kangs@kavinschool.com'
};

type PersonKeys = keyof Person;
// PersonKeys is now a union type: "name" | "age" | "email"

let personKeysName: PersonKeys;
console.log(Object.keys(person));
// [ 'name', 'age', 'email' ]

Object.keys(person).forEach(key => {
  console.log(`${key} value is ${person[key as PersonKeys]}`);
}) 

console.log(person['name']);

// Output:
// name value is Kangs
// age value is 30
// email value is kangs@kavinschool.com
