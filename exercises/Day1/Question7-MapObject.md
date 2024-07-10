# Applying Constraints to Type Parameters

Create a generic function mapObject that accepts an object and a function to transform each value. The function should return a new object with the same keys as the input object, but with the transformed values.

The function should have the following constraints:

The input object must have string keys and any value type.
The output object must have the same keys as the input object, but with the transformed value type.

Example Usage:

```typescript:
const input = { a: 1, b: 'two', c: true };

const output = mapObject(input, value => {
  if (typeof value === 'number') {
    return value.toString();
  } else if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value ? 'yes' : 'no';
  }
});

console.log(output); // { a: '1', b: 'TWO', c: 'yes' }
```
