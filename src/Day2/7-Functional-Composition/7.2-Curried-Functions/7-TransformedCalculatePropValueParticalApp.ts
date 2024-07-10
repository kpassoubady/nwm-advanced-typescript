// Curried function to calculate property valuation
function calculatePropertyValuation(price: number): (appreciationRate: number) => (marketTrends: string) => number {
  return function(appreciationRate: number): (marketTrends: string) => number {
      return function(marketTrends: string): number {
          let marketFactor = 1;
          if (marketTrends === 'up') {
              marketFactor = 1.1;
          } else if (marketTrends === 'down') {
              marketFactor = 0.9;
          }
          const marketValue = price * (1 + appreciationRate / 100) * marketFactor;
          return marketValue;
      };
  };
}

// Partial application for different market trends
const calculateValuation = calculatePropertyValuation(500000);
const calculateValuationInRisingMarket = calculateValuation(3)('up');
const calculateValuationInDecliningMarket = calculateValuation(3)('down');

console.log(calculateValuationInRisingMarket); 
console.log(calculateValuationInDecliningMarket); 
// 566500
// 463500