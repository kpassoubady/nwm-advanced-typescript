export {}

// Scenario: Managing a global instance of a property management system.
// - The PropertyManagementSystem class is a Singleton that manages a global instance of a property management system.
class PropertyManagementSystem {
  private static instance: PropertyManagementSystem | null = null;
  private properties: string[];

  private constructor() {
      this.properties = [];
  }

  static getInstance(): PropertyManagementSystem {
      if (!PropertyManagementSystem.instance) {
          PropertyManagementSystem.instance = new PropertyManagementSystem();
      }
      return PropertyManagementSystem.instance;
  }

  addProperty(address: string): void {
      this.properties.push(address);
  }

  getProperties(): string[] {
      return this.properties;
  }
}

// Usage:
const propertyManagementInstance = PropertyManagementSystem.getInstance();
propertyManagementInstance.addProperty('100 School St');
console.log(propertyManagementInstance.getProperties()); // Output: [ '100 School St' ]
propertyManagementInstance.addProperty('200 Park Ave');
console.log(propertyManagementInstance.getProperties());
const anotherPropertyManagementInstance = PropertyManagementSystem.getInstance();
console.log(Object.is(propertyManagementInstance, anotherPropertyManagementInstance));
anotherPropertyManagementInstance.addProperty('300 Main St');
console.log(propertyManagementInstance.getProperties());  // Output: [ '100 School St', '200 Park Ave', '300 Main St' ]
console.log(anotherPropertyManagementInstance.getProperties());
