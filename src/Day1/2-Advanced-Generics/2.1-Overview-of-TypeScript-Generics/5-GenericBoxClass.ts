export { };

class Box<T> {
    contents: T;

    constructor(contents: T) {
        this.contents = contents;
    }

    getValue(): T {
        return this.contents;
    }

    setValue(contents: T) {
        this.contents = contents;
    }
}

let box1 = new Box<string>("Hello");
let box2 = new Box<number>(42);

console.log(box1.getValue()); // Output: "Hello"
console.log(box2.getValue()); // Output: 42

box1.setValue("World");
box2.setValue(100);

console.log(box1.getValue()); // Output: "World"
console.log(box2.getValue()); // Output: 100
