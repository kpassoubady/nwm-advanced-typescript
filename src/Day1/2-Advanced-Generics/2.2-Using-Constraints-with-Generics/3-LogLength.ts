export { };

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length);
}

logLength("kangs"); // Output: 5
logLength([1, 2, 3,4,5,6]); // Output: 6
logLength({ length: 4 }); // Output: 4
