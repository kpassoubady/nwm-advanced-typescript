export { };
/*
Using infer in Parameters
Create a function that takes another function as an argument and returns a new function with the same parameters, 
but logs the parameters before invoking the original function.
*/

type ParamsType<T> = T extends (...args: infer P) => any ? P : never;

function logParams<T extends (...args: any[]) => any>(fn: T): (...args: ParamsType<T>) => ReturnType<T> {
    return (...args: ParamsType<T>): ReturnType<T> => {
        console.log('Parameters:', args);
        return fn(...args);
    };
}

const sum = (a: number, b: number): number => a + b;
const loggedSum = logParams(sum);

console.log(loggedSum(3, 4)); // Logs: Parameters: [3, 4] and result 7
