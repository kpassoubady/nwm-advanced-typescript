export {};

// Abstract Product
interface Vehicle {
  drive(): void;
}

// Concrete Car
class Car implements Vehicle {
  drive() {
      console.log("Driving a car...");
  }
}

// Concrete Truck
class Truck implements Vehicle {
  drive() {
      console.log("Driving a truck...");
  }
}

// Simple Factory
// - VehicleFactory is a factory class that creates vehicle objects.
// - It has a createVehicle method that takes a vehicle type as an argument and returns a vehicle object based on the type.
class VehicleFactory {
  createVehicle(type: 'car' | 'truck'): Vehicle {
      switch (type) {
          case 'car':
              return new Car();
          case 'truck':
              return new Truck();
          default:
              throw new Error("Invalid vehicle type.");
      }
  }
}

// Usage
const factory = new VehicleFactory();
const myCar = factory.createVehicle('car');
const myTruck = factory.createVehicle('truck');

myCar.drive();    // Output: Driving a car...
myTruck.drive();  // Output: Driving a truck...

// Benefits of Factory Pattern:
// - It provides a way to create objects without exposing the creation logic to the client.
// - It allows the client to create objects based on a common interface without knowing the specific class of the object.
// - It promotes loose coupling between the client code and the object creation code, making it easier to maintain and extend the codebase.
// - It allows for easy extension by adding new concrete product classes without modifying the client code.

// Drawbacks of Factory Pattern:
// - It can become complicated if there are many types of objects or if the object creation process is complex. 
// In such cases, it's better to use dependency injection or a more advanced pattern like builder to simplify the code and make it more readable and maintainable.
// - If the client code needs to pass additional arguments to the factory method to create a specific object, 
// it becomes more complicated and may violate the single responsibility principle. 
// In such cases, it's better to use a builder pattern to separate the object creation process from the client code.

/*
Key Difference: The Simple Factory Pattern encapsulates object creation logic in a single factory method (createVehicle), 
which decides which concrete product (Car or Truck) to instantiate based on the provided type parameter ('car' or 'truck').
*/