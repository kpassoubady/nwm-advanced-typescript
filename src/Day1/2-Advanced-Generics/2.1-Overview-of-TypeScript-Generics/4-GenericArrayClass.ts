export { };

class MyArray<T> {
    private array: T[];

    constructor() {
        this.array = [];
    }

    push(item: T) {
        this.array.push(item);
    }

    pop(): T | undefined {
        return this.array.pop();
    }

    get length(): number {
        return this.array.length;
    }
}

const stringArray = new MyArray<string>();
stringArray.push("Hello");
stringArray.push("world");
console.log(stringArray.pop()); // Output: "world"

const numberArray = new MyArray<number>();
numberArray.push(1);
numberArray.push(2);
console.log(numberArray.pop()); // Output: 2

const booleanArray = new MyArray<boolean>();
// booleanArray.push(1); // Type checking allows only boolean values
booleanArray.push(true);

