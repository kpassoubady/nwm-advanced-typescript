// Function to calculate compound interest
function calculateCompoundInterest(principal: number, rate: number, years: number): number {
  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  const compoundInterest = principal * Math.pow(1 + monthlyRate, months);
  return compoundInterest;
}

// Curried version
const curriedCalculateInterest = (principal: number) => (rate: number) => (years: number) =>
  calculateCompoundInterest(principal, rate, years);

// Usage
const calculateInterestForPrincipal = curriedCalculateInterest(1000);
const calculateInterest = calculateInterestForPrincipal(5)(3); // Principal: $1000, Rate: 5%, Years: 3
console.log(calculateInterest); // Output: Calculated compound interest
