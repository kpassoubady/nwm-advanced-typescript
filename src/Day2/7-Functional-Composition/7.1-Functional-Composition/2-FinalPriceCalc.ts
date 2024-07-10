export {};

/*
Consider a real-life scenario where you have a shopping cart application. 
You might have functions to calculate the total price of items in the cart and then apply discounts.
Functional composition can be used to combine these functions to create a new function 
that calculates the final price after applying discounts
*/

// Real-life situation using functional composition
function calculateTotalPrice(items: number[]): number {
  return items.reduce((total, item) => total + item, 0);
}

function applyDiscount(totalPrice: number, discountPercentage: number): number {
  return totalPrice - (totalPrice * discountPercentage) / 100;
}

// Compose calculateTotalPrice and applyDiscount functions to create a new function
const calculateFinalPrice = (items: number[], discountPercentage: number): number =>
  applyDiscount(calculateTotalPrice(items), discountPercentage);

// Usage: Composed function
const cartItems = [10, 20, 30, 40]; // Prices of items in the shopping cart
const discountPercentage = 10; // Discount percentage
console.log(calculateFinalPrice(cartItems, discountPercentage)); // Output: 90 (Total: 100, Discount: 10%, Final price: 90)
