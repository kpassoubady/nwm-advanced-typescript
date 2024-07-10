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

/*
In this example, we have an interface Person that has some required properties and some nested properties. 
We want to create a new type PartialPerson that has all the same properties as Person, but with all of them being optional. 
We can do this using a mapped type with Partial.
We define the new type using the { [K in keyof Person]?: Person[K] } syntax, which means that we will iterate over all keys in the Person interface and make them optional. 
The keyof keyword is used to get a union type of all keys in the Person interface, and the mapped type [K in keyof Person] iterates over each key in that union type. 
Finally, we add the ? modifier to make each property optional.
We can then use the new type PartialPerson to create an object with only some of the properties set, and TypeScript will not give us an error for any missing properties because they are all optional.
*/


// Create a mapped type with all first level properties are optional
// add the ? modifier to make each property optional
type PartialPerson = { [K in keyof Person]?: Person[K] };

// Usage:
const partialPerson: PartialPerson = {
    name: "John",
    
    // address: {
    //     street: "123 Main St",
    //   },
};

console.log(partialPerson);
