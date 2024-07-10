export {}

// Function to calculate property valuation
function calculatePropertyValuation(price: number, appreciationRate: number, marketTrends: string): number {
  let marketFactor = 1;
  if (marketTrends === 'up') {
      marketFactor = 1.1;
  } else if (marketTrends === 'down') {
      marketFactor = 0.9;
  }
  const marketValue = price * (1 + appreciationRate / 100) * marketFactor;
  return marketValue;
}

// Partial application for different market trends
const calculateValuationInRisingMarket = calculatePropertyValuation(500000, 3, 'up');
const calculateValuationInDecliningMarket = calculatePropertyValuation(500000, 3, 'down');

console.log(calculateValuationInRisingMarket); 
console.log(calculateValuationInDecliningMarket);
