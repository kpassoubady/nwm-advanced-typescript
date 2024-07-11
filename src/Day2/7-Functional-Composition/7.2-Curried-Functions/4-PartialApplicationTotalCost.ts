export {}

const taxRateForWisconsin = 8.5;
const taxRateForCalifornia = 9.5;
// Function to calculate total cost with tax
function calculateTotalCost(price: number, taxRate: number): number {
  const taxAmount = price * (taxRate / 100);
  return price + taxAmount;
}

// Partial application
const calculateWithSalesTaxForWisconsin = (price: number) => calculateTotalCost(price, taxRateForWisconsin);
const calculateWithSalesTaxForCalifornia = (price: number) => calculateTotalCost(price, taxRateForCalifornia);


// Usage
let totalCost = calculateWithSalesTaxForWisconsin(100); // Applies 8.5% sales tax
console.log(totalCost); // Output: 108.5

totalCost = calculateWithSalesTaxForCalifornia(100); // Applies 9.5% sales tax
console.log(totalCost); // Output: 108.5