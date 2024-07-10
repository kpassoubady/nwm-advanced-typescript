export {}

// Function to calculate total cost with tax
function calculateTotalCost(price: number, taxRate: number): number {
  const taxAmount = price * (taxRate / 100);
  return price + taxAmount;
}

// Partial application
const calculateWithSalesTax = (price: number) => calculateTotalCost(price, 8.5);

// Usage
const totalCost = calculateWithSalesTax(100); // Applies 8.5% sales tax
console.log(totalCost); // Output: 108.5
