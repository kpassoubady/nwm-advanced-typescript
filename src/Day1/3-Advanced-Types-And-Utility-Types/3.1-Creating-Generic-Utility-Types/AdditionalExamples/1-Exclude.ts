export {};

// Exclude<Type, ExcludedUnion>
// The Exclude utility type constructs a new type by excluding all types from Type that are 
// assignable to any type in ExcludedUnion

type Color = 'red' | 'green' | 'blue';
type PrimaryColor = 'red' | 'blue';
type SecondaryColor = Exclude<Color, PrimaryColor>;

const secondaryColor: SecondaryColor = 'green';

console.log(secondaryColor);
