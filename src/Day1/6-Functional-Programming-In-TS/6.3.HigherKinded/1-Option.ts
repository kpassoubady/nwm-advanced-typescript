export { Option };

// Real-life situation: 
// Representing the presence or absence of a value using an Option type.
// This is a common pattern in functional programming for handling nullable values in a type-safe manner.

interface Some<A> {
  _tag: "Some";
  value: A;
}

interface None {
  _tag: "None";
}

// The Option type is a higher-kinded type that represents the presence or absence of a value.
type Option<A> = Some<A> | None;

// Usage
const someNumber: Option<number> = { _tag: "Some", value: 42 };
const noneValue: Option<number> = { _tag: "None" };

console.log(someNumber) // { _tag: 'Some', value: 42 }
console.log(noneValue) // { _tag: 'None' }
