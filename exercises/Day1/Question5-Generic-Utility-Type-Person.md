Suppose you have the following interface in TypeScript:

```typescript:
interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
  phoneNumber?: string;
}
```


Now, using the Partial, Readonly, Record, Pick, and Omit utility types, create the following types:

PartialPerson: A type that has all properties of Person, but all properties are optional.
ReadonlyPerson: A type that has all properties of Person, but all properties are read-only.
PersonMap: A type that is a dictionary/map of Person objects, where the keys are strings.
PersonNameAndAge: A type that has only the name and age properties of Person.
PersonWithoutPhoneNumber: A type that has all properties of Person, except for the phoneNumber property.
Once you have defined these types, create the following objects:

partialPerson: A PartialPerson object with some optional properties set.
readonlyPerson: A ReadonlyPerson object with all properties set.
personMap: A PersonMap object with at least two Person objects.
personNameAndAge: A PersonNameAndAge object with the name and age properties set.
personWithoutPhoneNumber: A PersonWithoutPhoneNumber object with all properties set except for the phoneNumber property.
