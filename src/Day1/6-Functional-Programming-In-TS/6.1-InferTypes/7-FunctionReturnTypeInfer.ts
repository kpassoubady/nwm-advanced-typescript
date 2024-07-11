export { };

/*
Using infer in Return Types
Create a function that takes another function and returns a new function that caches the results of the original function based on its parameters.
*/
type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

/*
The cacheResult fn is a higher-order fn that takes another fn fn as an argument and returns a new fn that caches the results of fn based on its parameters. 
The cache is a Map where the keys are stringified versions of the arguments passed to fn, and the values are the results of calling fn with those arguments.
*/
function cacheResult<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => FunctionReturnType<T> {
    const cache = new Map<string, FunctionReturnType<T>>();
    return (...args: Parameters<T>): FunctionReturnType<T> => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Cache hit');
            return cache.get(key)!;
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const expensiveCalculation = (a: number, b: number): number => {
    console.log('Calculating...');
    return a * b;
};

const cachedCalculation = cacheResult(expensiveCalculation);

console.log(cachedCalculation(2, 3)); // Calculating... and result 6
console.log(cachedCalculation(2, 3)); // Cache hit and result 6
console.log(cachedCalculation(5, 5)); // Calculating... and result 25
console.log(cachedCalculation(10, 10)); //Calculating... and result 100
console.log(cachedCalculation(2, 3)); // Cache hit and result 6
