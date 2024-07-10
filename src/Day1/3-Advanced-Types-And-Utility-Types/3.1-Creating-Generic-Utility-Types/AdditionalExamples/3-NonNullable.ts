
export {};

type NullableString = string | null | undefined;
type NonNullableString = NonNullable<NullableString>;

let nullableString: NullableString = null;
let nonNullableString: NonNullableString = 'hello';

console.log(nonNullableString.toUpperCase()); // Outputs 'HELLO'
console.log(nullableString); // Outputs 'null'

// Not assignable - 
// Type 'null' is not assignable to type 'string'
// nonNullableString = null;