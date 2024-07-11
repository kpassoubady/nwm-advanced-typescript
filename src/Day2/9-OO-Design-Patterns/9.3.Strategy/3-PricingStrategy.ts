export {}

// Strategy Pattern
// - The Strategy Pattern is a behavioral design pattern that enables an algorithm's behavior to be selected at runtime.
// - It defines a family of algorithms, encapsulates each algorithm, and makes the algorithms interchangeable within that family.
// - The Strategy Pattern allows the algorithm to vary independently from the context that uses it.
// - It promotes loose coupling between the context and the strategy, making it easier to switch between different algorithms or strategies.
// - The Strategy Pattern is useful when you have multiple algorithms that can be used interchangeably or when you want to avoid conditional statements in the context.


// Strategy interface
interface PricingStrategy {
  calculatePrice(basePrice: number): number;
}

// Concrete strategies
class RetailPricingStrategy implements PricingStrategy {
  calculatePrice(basePrice: number): number {
      return basePrice * 1.2; // Apply a 20% markup for retail customers
  }
}

class WholesalePricingStrategy implements PricingStrategy {
  calculatePrice(basePrice: number): number {
      return basePrice * 0.9; // Apply a 10% discount for wholesale customers
  }
}

// Context that uses the strategy
class PriceCalculator {
  private pricingStrategy: PricingStrategy;

  constructor(pricingStrategy: PricingStrategy) {
      this.pricingStrategy = pricingStrategy;
  }

  setPricingStrategy(pricingStrategy: PricingStrategy) {
      this.pricingStrategy = pricingStrategy;
  }

  calculateFinalPrice(basePrice: number): number {
      return this.pricingStrategy.calculatePrice(basePrice);
  }
}

// Usage
const retailStrategy = new RetailPricingStrategy();
const wholesaleStrategy = new WholesalePricingStrategy();

const calculator = new PriceCalculator(retailStrategy);
console.log(calculator.calculateFinalPrice(100)); // Output: 120 (20% markup)

calculator.setPricingStrategy(wholesaleStrategy);
console.log(calculator.calculateFinalPrice(100)); // Output: 90 (10% discount)
