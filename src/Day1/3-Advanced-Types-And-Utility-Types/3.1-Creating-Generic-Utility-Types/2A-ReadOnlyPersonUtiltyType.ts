export { };

interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

type ReadonlyPerson = Readonly<Person>;

// ReadonlyPerson has the same shape as Person,
// but all properties are read-only
let p: ReadonlyPerson = { name: "Alex", age: 30, address: { street: "123 Main St", city: "New York" } };

// The following line will cause a compile-time error
// p.name = "Kangs"; // Cannot assign to 'name' because it is a read-only property.ts(2540)

console.log(p);