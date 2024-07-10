export { };

class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person("John");
(person as any).name = "Jane";
person.greet(); 
// output: "Hello, my name is Jane"
