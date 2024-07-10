export { }

// Pure function example
function calculateInterest(principal: number, rate: number, years: number): number {
  return principal * (1 + rate / 100) * years;
}

// Impure function example (with side effect)
let totalInterest = 0;
function calculateAndStoreInterest(principal: number, rate: number, years: number): number {
  totalInterest += principal * (1 + rate / 100) * years;
  return totalInterest;
}

let interest = calculateInterest(1000, 5, 3);
console.log(`(1) interest: ${interest}`);

// Impure function example (with side effect) 
totalInterest = calculateAndStoreInterest(1000, 5, 3);
console.log(`(1) totalInterest: ${totalInterest}`);

interest = calculateInterest(1000, 5, 3);
console.log(`(2) interest: ${interest}`);

totalInterest = calculateAndStoreInterest(1000, 5, 3);
console.log(`(2) totalInterest: ${totalInterest}`);

interest = 0;
interest = calculateInterest(1000, 5, 3);
console.log(`(3) interest: ${interest}`);

totalInterest = 700;
totalInterest = calculateAndStoreInterest(1000, 5, 3);
console.log(`(3) totalInterest: ${totalInterest}`); 
