# Exercise: Generic Function and Class

1. Write a generic function swapSameTypes that takes tuple T with two values of the same type and returns a tuple with the elements in reverse order.
2. Write a generic function swapDifferentTypes that takes tuple T with two values of different types and returns a tuple with the elements in reverse order.

Example usage:

```typescript:


// example usage
const myTuple1: [string, string] = ["hello", "123"];
const swappedTuple1 = swapSameTypes(myTuple1); // returns ["123", "hello"]
console.log(swappedTuple1)

const myTuple2: [string, number] = ["hello", 123];
const swappedTuple2 = swapDifferentTypes(myTuple2); // returns [123, "hello"]
console.log(swappedTuple2)

```
