// Real-life situation using Strategy pattern for shipping cost calculation
interface ShippingStrategy {
  calculateCost(weight: number): number;
}

class StandardShipping implements ShippingStrategy {
  calculateCost(weight: number): number {
      return weight * 0.5; // $0.5 per pound
  }
}

class ExpeditedShipping implements ShippingStrategy {
  calculateCost(weight: number): number {
      return weight * 1.5; // $1.5 per pound
  }
}

class OvernightShipping implements ShippingStrategy {
  calculateCost(weight: number): number {
      return weight * 3; // $3 per pound
  }
}

class ShippingCalculator {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
      this.strategy = strategy;
  }

  setStrategy(strategy: ShippingStrategy) {
      this.strategy = strategy;
  }

  calculateShippingCost(weight: number): number {
      return this.strategy.calculateCost(weight);
  }
}

// Usage:
const weight = 10; // 10 pounds package
const shippingCalculator = new ShippingCalculator(new StandardShipping());
console.log(shippingCalculator.calculateShippingCost(weight)); // Output: 5

shippingCalculator.setStrategy(new ExpeditedShipping());
console.log(shippingCalculator.calculateShippingCost(weight)); // Output: 15
