
# Exercise: Generic Function and Class

Create a generic class Stack that stores elements of type T in a last-in-first-out (LIFO) order. The class should have methods push, pop, and size.

Example usage:

```typescript:
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size()); // 3
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.size()); // 1
```
