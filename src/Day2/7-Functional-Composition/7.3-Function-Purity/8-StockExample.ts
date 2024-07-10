export {}

// Scenario: Stock portfolio management using immutable data structures.

interface Stock {
  readonly symbol: string;
  readonly quantity: number;
  readonly purchasePrice: number;
}

function calculatePortfolioValue(stocks: ReadonlyArray<Stock>): number {
  return stocks.reduce((total, stock) => total + (stock.quantity * stock.purchasePrice), 0);
}

const myStocks: ReadonlyArray<Stock> = [
 { symbol: 'AAPL', quantity: 10, purchasePrice: 150 },
 { symbol: 'GOOG', quantity: 5, purchasePrice: 200 },
 { symbol: 'MSFT', quantity: 3, purchasePrice: 250 }
];

const portfolioValue = calculatePortfolioValue(myStocks);
console.log(portfolioValue);

