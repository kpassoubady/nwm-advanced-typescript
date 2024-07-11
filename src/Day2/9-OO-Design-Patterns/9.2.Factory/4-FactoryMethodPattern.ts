export {}

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

// Abstract Creator
abstract class VehicleFactory {
  abstract createVehicle(): Vehicle;

  // Additional methods can go here
}

// Concrete Creators
class CarFactory extends VehicleFactory {
  createVehicle(): Vehicle {
      return new Car();
  }
}

class TruckFactory extends VehicleFactory {
  createVehicle(): Vehicle {
      return new Truck();
  }
}

// Usage
const carFactory = new CarFactory();
const truckFactory = new TruckFactory();

const myCar = carFactory.createVehicle();
const myTruck = truckFactory.createVehicle();

myCar.drive();    // Output: Driving a car...
myTruck.drive();  // Output: Driving a truck...

/*
Key Difference: In the Factory Method Pattern, an abstract VehicleFactory defines an interface (createVehicle method) for creating Vehicle objects. 
Concrete subclasses (CarFactory and TruckFactory) implement this method to create specific types of Vehicle objects (Car or Truck).
*/