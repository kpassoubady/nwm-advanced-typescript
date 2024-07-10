export {};

function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
    return arr.map(fn);
}

let nums = [1, 2, 3, 4, 5];
let doubled = map(nums, (n) => n * 2);
let strings = map(nums, (n) => n.toString());

console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(strings); // Output: ["1", "2", "3", "4", "5"]

