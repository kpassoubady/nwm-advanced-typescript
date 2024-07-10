export { }

// Define compose function
/*
compose is defined as a generic function that takes two functions f and g.
It returns a new function that applies g to its input, and then applies f to the result of g.
This allows you to compose functions together where the output of one function becomes the input of the next.
*/
function compose<T, U, V>(f: (x: U) => V, g: (y: T, z: T) => U) {
  return (y: T, z: T): V => f(g(y, z));
}

// Function to calculate property valuation
// const compose = <T, U, V>(f: (x: U) => V, g: (y: T, z: T) => U) => (y: T, z: T): V => f(g(y, z));

// Function to calculate property valuation
function calculateValuation(price: number, rate: number): number {
  const marketValue = (p: number) => p * (1 + rate / 100);
  console.log("Appreciated Market Value:" + marketValue(price));
  return marketValue(price);
}

// Using compose to adjust valuation
const calculateAndAdjustValuation = compose(
  (value: number) => value * 0.95, // Adjusting for market volatility
  (price: number, rate: number) => calculateValuation(price, rate)
);

// Calculate adjusted property valuation
// appreciation rate is 15%
const propertyValue = calculateAndAdjustValuation(500000, 15);
console.log("Adjusted Property Value After Market Volatility: " + propertyValue); 
