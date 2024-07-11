export {}

// Abstract Products
interface Vehicle {
  drive(): void;
}

interface Engine {
  start(): void;
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

// Concrete PetrolEngine
class PetrolEngine implements Engine {
  start() {
      console.log("Starting petrol engine...");
  }
}

// Concrete DieselEngine
class DieselEngine implements Engine {
  start() {
      console.log("Starting diesel engine...");
  }
}

// Abstract Factory
interface VehicleFactory {
  createVehicle(): Vehicle;
  createEngine(): Engine;
}

// Concrete Factories
class CarFactory implements VehicleFactory {
  createVehicle(): Vehicle {
      return new Car();
  }

  createEngine(): Engine {
      return new PetrolEngine();
  }
}

class TruckFactory implements VehicleFactory {
  createVehicle(): Vehicle {
      return new Truck();
  }

  createEngine(): Engine {
      return new DieselEngine();
  }
}

// Usage
const carFactory = new CarFactory();
const truckFactory = new TruckFactory();

const myCar = carFactory.createVehicle();
const myTruck = truckFactory.createVehicle();
const myPetrolEngine = carFactory.createEngine();
const myDieselEngine = truckFactory.createEngine();

myCar.drive();             // Output: Driving a car...
myTruck.drive();           // Output: Driving a truck...
myPetrolEngine.start();    // Output: Starting petrol engine...
myDieselEngine.start();    // Output: Starting diesel engine...

/*
Key Difference: The Abstract Factory Pattern introduces multiple abstract factories (VehicleFactory) 
that provide interfaces (createVehicle and createEngine methods) for creating families of related objects (Car and PetrolEngine, Truck and DieselEngine). 
Concrete factories (CarFactory and TruckFactory) implement these interfaces to produce specific products (Car, Truck, PetrolEngine, DieselEngine).
*/