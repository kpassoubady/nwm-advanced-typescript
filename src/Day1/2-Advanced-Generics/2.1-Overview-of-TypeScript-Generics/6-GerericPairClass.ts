export { };

class Pair<T, U> {
    private first: T;
    private second: U;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    getFirst(): T {
        return this.first;
    }

    getSecond(): U {
        return this.second;
    }
}

let pair1 = new Pair<string, number>("Kangs", 50);
let pair2 = new Pair<number, boolean>(100, true);

console.log(pair1.getFirst()); // Output: "Kangs"
console.log(pair1.getSecond()); // Output: 50

console.log(pair2.getFirst()); // Output: 100
console.log(pair2.getSecond()); // Output: true

// let pair3 = new Pair<number, number>(100, true); -- Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)
