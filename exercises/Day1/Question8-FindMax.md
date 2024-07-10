# Applying Constraints to Type Parameters

Create a generic function findMax that accepts an array of elements and a function to extract a numeric value from each element. The function should return the element with the maximum numeric value.

The function should have the following constraints:
 - The element type must be a object with a numeric property with the name specified by the key parameter.
 - The key parameter must be a string literal type that matches the name of the numeric property.


Example Usage:

```typescript:
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];

const maxAgePerson = findMax(people, 'age' as keyof Person);
console.log(maxAgePerson); // { name: 'Charlie', age: 35 }
```

Expected funtion definition :
```typescript:
function findMax<T, K extends keyof T>(arr: T[], key: K): T {
 // Your code goes here
}
```

Expected output:

```
{ name: 'Charlie', age: 35 }
``
