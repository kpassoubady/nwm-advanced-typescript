# Utility Types

| Utility Type              | Description                                                             |
|---------------------------|-------------------------------------------------------------------------|
| `Partial<T>`              | Makes all properties in `T` optional.                                   |
| `Required<T>`             | Makes all properties in `T` required.                                   |
| `Readonly<T>`             | Makes all properties in `T` read-only.                                  |
| `Record<K, T>`            | Constructs an object type with keys of type `K` and values of type `T`. |
| `Pick<T, K>`              | Creates a type by picking a set of properties `K` from `T`.             |
| `Omit<T, K>`              | Creates a type by omitting a set of properties `K` from `T`.            |
| `Exclude<T, U>`           | Excludes from `T` those types that are assignable to `U`.               |
| `Extract<T, U>`           | Extracts from `T` those types that are assignable to `U`.               |
| `NonNullable<T>`          | Excludes `null` and `undefined` from `T`.                               |
| `Parameters<T>`           | Extracts the types of the parameters of a function type `T`.            |
| `ConstructorParameters<T>`| Extracts the types of the parameters of a constructor type `T`.         |
| `ReturnType<T>`           | Extracts the return type of a function type `T`.                        |
| `InstanceType<T>`         | Extracts the instance type of a constructor function type `T`.          |
| `ThisParameterType<T>`    | Extracts the type of `this` for a function type `T`.                    |
| `OmitThisParameter<T>`    | Removes the `this` parameter from a function type `T`.                  |
| `ThisType<T>`             | Used for specifying the type of `this` within an object type.           |
| `Uppercase<S>`            | Transforms a string type `S` to uppercase.                              |
| `Lowercase<S>`            | Transforms a string type `S` to lowercase.                              |
| `Capitalize<S>`           | Transforms the first character of a string type `S` to uppercase.       |
| `Uncapitalize<S>`         | Transforms the first character of a string type `S` to lowercase.       |
