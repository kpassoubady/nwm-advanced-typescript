export {}

function greet(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old.`;
}

//  Parameters utility type
type GreetParameters = Parameters<typeof greet>; // [string, number]

//  Parameters utility type is used to extract the parameters of a function type as a tuple.
const parameters: GreetParameters = ['Kangs', 30];
console.log(greet(...parameters)); // Hello Kangs, you are 30 years old.

//  ConstructorParameters utility type
class User {
  constructor(public id: number, public name: string, public email: string) {}
}
// ConstructorParameters utility type is used to extract the constructor parameters of a class type as a tuple.
type UserConstructorParameters = ConstructorParameters<typeof User>; // [number, string, string]

const userParameters: UserConstructorParameters = [1, 'Kavya', 'kavya@example.com'];

// spread operator is used to pass the tuple as arguments to the constructor.
const user = new User(...userParameters);
console.log(user);

// ThisParameterType utility type
function show(this: User, message: string) {
  console.log(this.name + ": " + message);
}

// ThisParameterType utility type is used to extract the this parameter type of a function type.
type ShowThisParameterType = ThisParameterType<typeof show>; // User

// show function is called with this parameter as user object.
const thisParameter: ShowThisParameterType = user;

// call show function with this parameter as user object.
show.call(thisParameter, 'Hello, World!'); // Kavya: Hello, World!

type ShowParameters = Parameters<typeof show>; // [string]
const showParameters: ShowParameters = ['Hello, World!'];
show.apply(thisParameter, showParameters); // Kavya: Hello, World!


type ShowType = OmitThisParameter<typeof show>; // (message: string) => void
const showFunction: ShowType = show;
//showFunction('Hello, World!');
