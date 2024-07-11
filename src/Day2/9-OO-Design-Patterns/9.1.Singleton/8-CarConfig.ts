export {}

//Scenario: Managing a single instance of a car configuration.
// - The CarConfig class is a Singleton that manages a single instance of a car configuration.
class CarConfig {
  private static instance: CarConfig | null = null;
  private configuration: { make: string, model: string };

  private constructor() {
      this.configuration = { make: '', model: '' };
  }

  static getInstance(): CarConfig {
      if (!CarConfig.instance) {
          CarConfig.instance = new CarConfig();
      }
      return CarConfig.instance;
  }

  setConfiguration(make: string, model: string): void {
      this.configuration = { make, model };
  }

  getConfiguration(): { make: string, model: string } {
      return this.configuration;
  }
}

// Usage:
const carConfigInstance = CarConfig.getInstance();
carConfigInstance.setConfiguration('Toyota', 'Camry');
console.log(carConfigInstance.getConfiguration()); // Output: { make: 'Toyota', model: 'Camry' }
