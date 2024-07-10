export { };

interface Person {
  name: string;
  age: number;
  email: string;
}

const person: Person = {
    name: 'Kangs',
    age: 30,
    email: 'kangs@kavinschool.com'
};

/*
In this example, we define a custom utility type called Optional that allows us to make a specific property of an interface optional. 
We use the Omit utility type to remove the specified property from the original interface, and the Partial utility type to make the specified property optional. 
We then define an interface Person with three properties: name, age, and email. 
We create a new type called PersonWithOptionalEmail using the Optional type, making the email property optional. 
We then create a person object of type Person with all properties defined. 
Finally, we create a personWithOptionalEmail object of type PersonWithOptionalEmail, which is the same as person but with the email property optional.
*/

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type PersonWithOptionalEmail = Optional<Person, 'email'>;

const personWithOptionalEmail: PersonWithOptionalEmail = {
  name: 'John',
  age: 30,
};

console.log(personWithOptionalEmail); 
