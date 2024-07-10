Suppose you have the following interface in TypeScript:

```interface Vehicle {
  vin: string;
  color: string;
  type: string;
  model: string;
  numberOfSeats: number;
}
```

Now, using the Partial, Readonly, Record, Pick, and Omit utility types, create the following types:

`PartialVehicle`: A type that has all properties of Vehicle, but all properties are optional.
ReadonlyVehicle: A type that has all properties of Vehicle, but all properties are read-only.
VehicleMap: A type that is a dictionary/map of Vehicle objects, where the keys are strings.
VehicleModelAndColor: A type that has only the model and color properties of Vehicle.
VehicleWithoutSeats: A type that has all properties of Vehicle, except for the numberOfSeats property.

Once you have defined these types, create the following objects:

partialVehicle: A PartialVehicle object with some optional properties set.
readonlyVehicle: A ReadonlyVehicle object with all properties set.
vehicleMap: A VehicleMap object with at least two Vehicle objects.
vehicleModelAndColor: A VehicleModelAndColor object with the model and color properties set.
vehicleWithoutSeats: A VehicleWithoutSeats object with all properties set except for the numberOfSeats property.
