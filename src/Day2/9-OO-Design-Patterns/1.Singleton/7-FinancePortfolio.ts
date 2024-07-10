export {}

// Scenario: Managing a global portfolio instance.
//  - The Portfolio class is a Singleton that manages a global portfolio instance.
//  - The getInstance method creates the Portfolio instance if it does not exist or returns the existing instance.
//  - The addStock method adds a stock symbol and quantity to the portfolio.
// - The getHoldings method returns the current holdings in the portfolio.
// - The usage example demonstrates how multiple components can interact with the same portfolio instance.

class Portfolio {
  private static instance: Portfolio | null = null;
  private holdings: { [symbol: string]: number };

  private constructor() {
      this.holdings = {};
  }

  static getInstance(): Portfolio {
      if (!Portfolio.instance) {
          Portfolio.instance = new Portfolio();
      }
      return Portfolio.instance;
  }

  addStock(symbol: string, quantity: number): void {
      if (this.holdings[symbol]) {
          this.holdings[symbol] += quantity;
      } else {
          this.holdings[symbol] = quantity;
      }
  }

  getHoldings(): { [symbol: string]: number } {
      return this.holdings;
  }
}

// Usage:
const portfolioInstance = Portfolio.getInstance();
portfolioInstance.addStock('AAPL', 100);
console.log(portfolioInstance.getHoldings()); // Output: { AAPL: 100 }
const anotherPortfolioInstance = Portfolio.getInstance();
console.log(Object.is(portfolioInstance, anotherPortfolioInstance));
anotherPortfolioInstance.addStock('GOOG', 50);
console.log(portfolioInstance.getHoldings());
console.log(anotherPortfolioInstance.getHoldings());

/*
In this solution, the `Portfolio` class is implemented as a Singleton using the static `getInstance` method. 
The `addStock` method adds a stock symbol and quantity to the portfolio's holdings, and the `getHoldings` method returns the current holdings.
The usage example demonstrates how multiple components can interact with the same portfolio instance. 
Component A adds 100 shares of AAPL, and Component B adds 50 shares of GOOG. 
When both components request the current holdings using `getHoldings`, they receive the combined result of both additions.
*/
