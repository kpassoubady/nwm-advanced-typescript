export {};

type Vehicle =
  | { type: 'car', brand: string, model: string, numWheels: number }
  | { type: 'motorcycle', brand: string, model: string, numWheels: number, hasHelmetCompartment: boolean }
  | { type: 'bicycle', brand: string, model: string, numWheels: number, hasBasket: boolean }
//  | { type: 'flight', brand: string, model: string, numWheels: number, hasWings: boolean }
  ;

function printVehicleInfo(vehicle: Vehicle) {
  switch (vehicle.type) {
    case 'car':
      console.log(`This is a ${vehicle.brand} ${vehicle.model} car with ${vehicle.numWheels} wheels.`);
      break;
    case 'motorcycle':
      console.log(`This is a ${vehicle.brand} ${vehicle.model} motorcycle with ${vehicle.numWheels} wheels and ${vehicle.hasHelmetCompartment ? 'a' : 'no'} helmet compartment.`);
      break;
    case 'bicycle':
      console.log(`This is a ${vehicle.brand} ${vehicle.model} bicycle with ${vehicle.numWheels} wheels and ${vehicle.hasBasket ? 'a' : 'no'} basket.`);
      break;
    default:
      console.log(`Vehicle type not recognized: ${JSON.stringify(vehicle)}`);
      const exhaust: never = vehicle;
  }
}

const car: Vehicle = { type: 'car', brand: 'Honda', model: 'Civic', numWheels: 4 };
const motorcycle: Vehicle = { type: 'motorcycle', brand: 'Yamaha', model: 'FZ-09', numWheels: 2, hasHelmetCompartment: true };
const bicycle: Vehicle = { type: 'bicycle', brand: 'Trek', model: 'FX 3 Disc', numWheels: 2, hasBasket: true };

printVehicleInfo(car); // This is a Honda Civic car with 4 wheels.
printVehicleInfo(motorcycle); // This is a Yamaha FZ-09 motorcycle with 2 wheels and a helmet compartment.
printVehicleInfo(bicycle); // This is a Trek FX 3 Disc bicycle with 2 wheels and a basket.
