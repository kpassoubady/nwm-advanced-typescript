export { };

type Result<T, E> = { success: true; value: T } | { success: false; error: E };

function safeDivide(numerator: number, denominator: number): Result<number, string> {
    if (denominator === 0) {
        return { success: false, error: "Cannot divide by zero" };
    }

    return { success: true, value: numerator / denominator };
}

console.log(safeDivide(10,2));
console.log(safeDivide(10,0));
