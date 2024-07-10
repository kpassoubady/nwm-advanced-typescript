# Exercise: Generic Function and Class

Create a generic class called Pair that takes two types, T and U, and has two properties of those types.  
* Implement a method called swap that swaps the values of the two properties and returns a Pair<U,T> Object.
* Implement another method called info that prints the values of the two properties Pair<T,U> format.


Example usage:

```typescript:
// Example usage
const pair = new Pair<string, number>('hello', 42);
console.log(pair.getFirst()); // Output: 'hello'
console.log(pair.getSecond()); // Output: 42
pair.info(); // Output: Pair<hello,42>
const swappedPair = pair.swap();
swappedPair.info(); //Output: Pair<42,hello>
```

Example Output:
```
hello
42
Pair<hello,42>
Pair<42,hello>
```