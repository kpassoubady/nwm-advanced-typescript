export {}
// Union Type: A type that can be one of several types
type ID = number | string;

// Intersection Type: A type that combines multiple types
type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type UserBase = {
  id: ID;
  name: string;
  email: string;
};

// Extending a type
type User = UserBase & Timestamps;


// Extending a type
type Admin = User & {
  type: 'admin';
};

// Type Alias: A name for any type
type Point = {
  x: number;
  y: number;
};

// Utility Types: Partial, Required, Readonly, and more
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;

// Advanced Type Manipulation: Exclude, Extract, NonNullable, etc.
type Response = "success" | "error" | "loading";
type SuccessResponse = Exclude<Response, "error" | "loading">;
type ErrorResponse = Extract<Response, "error">;

type NullableUser = User | null | undefined;
type NonNullableUser = NonNullable<NullableUser>;

// Mapped Types: Creating new types by transforming properties
type ApiResponse<T> = {
  [P in keyof T]: T[P];
};

// Using type guards with custom type predicates
function isString(value: any): value is string {
  return typeof value === 'string';
}

function displayID(id: ID) {
  if (isString(id)) {
    console.log(`ID is a string: ${id}`);
  } else {
    console.log(`ID is a number: ${id}`);
  }
}

// Type Assertions: Manually specifying a type
const someValue: any = "Hello, TypeScript!";
const strLength: number = (someValue as string).length;

console.log(`String length: ${strLength}`);

// Example usage
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const partialUser: PartialUser = {
  name: "Bob"
};

const successResponse: SuccessResponse = "success";
const errorResponse: ErrorResponse = "error";

displayID(user.id);

console.log(user);
console.log(partialUser);
console.log(`Response: ${successResponse}`);
console.log(`Error: ${errorResponse}`);