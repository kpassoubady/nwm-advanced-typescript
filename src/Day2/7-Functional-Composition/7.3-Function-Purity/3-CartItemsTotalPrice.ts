// Real-life situation example:

// Consider a scenario where you have a function to calculate the total price of items in a shopping cart. 
// By ensuring the function is pure and immutable, you can guarantee that the result will be consistent regardless of external factors.

// Real-life situation with pure function and immutability
interface CartItem {
  id: number;
  name: string;
  price: number;
}

function calculateTotalPrice(cartItems: CartItem[]): number {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

const cartItems: CartItem[] = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 20 },
  { id: 3, name: "Item 3", price: 30 }
];

const totalPrice = calculateTotalPrice(cartItems);
console.log(totalPrice); // Output: 60

// In this example, the calculateTotalPrice function is a pure function that calculates the total price of items in the shopping cart. 
// It does not modify the original cartItems array and returns a new value, ensuring immutability.
