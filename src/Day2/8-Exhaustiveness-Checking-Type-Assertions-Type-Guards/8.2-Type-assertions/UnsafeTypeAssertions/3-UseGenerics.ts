export { };

/*
 the getProperty function takes two generic type parameters T and K. 
 The function returns the value of the property with the specified key K from the object of type T. 
 The use of generics eliminates the need for type assertions
*/

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

interface Person {
    name: string;
    age: number;
}

const person: Person = { name: "Kangs", age: 30 };
const name = getProperty(person, "name"); // Type of 'name' is string
const age = getProperty(person, "age"); // Type of 'age' is number
