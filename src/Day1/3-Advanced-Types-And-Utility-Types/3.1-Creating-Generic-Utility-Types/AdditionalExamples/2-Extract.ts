export {};

/* 
Extract<Type, Union>
The Extract utility type constructs a new type by extracting all types from 
Type that are assignable to any type in Union. 
*/

type Color = 'red' | 'green' | 'blue';
type PrimaryColor = 'red' | 'blue';
type PrimaryColorOnly = Extract<Color, PrimaryColor>;

const primaryColorOnly: PrimaryColorOnly = 'red';
