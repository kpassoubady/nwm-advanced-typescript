export {};

// Real-life situation example:

// Consider a scenario where you have a function to calculate 
// the total price of a product including tax and shipping. 
// You might want to create a curried version of the function to calculate 
// the price for different products with different tax rates and shipping costs.

// Real-life situation using currying
function calculateTotalPrice(price: number, taxRate: number, shippingCost: number): number {
  return price + (price * taxRate) / 100 + shippingCost;
}

// Curried version of the calculateTotalPrice function
const curriedCalculateTotalPrice = (price: number) => (taxRate: number) => (shippingCost: number) =>
  calculateTotalPrice(price, taxRate, shippingCost);

// Usage: Curried calculateTotalPrice function
const calculatePriceForProductA = curriedCalculateTotalPrice(50); // Partial application for price
const calculatePriceWithTax = calculatePriceForProductA(10); // Partial application for taxRate
console.log(calculatePriceWithTax(5)); // Output: 60 (Price: 50, Tax: 10%, Shipping: 5)
