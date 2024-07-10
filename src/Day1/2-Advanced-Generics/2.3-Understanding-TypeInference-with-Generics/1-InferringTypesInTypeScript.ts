export {};

let name = "Kangs"; // inferred as string
let age = 30; // inferred as number
let hasHobbies = true; // inferred as boolean

// name = 12; // Type '12' is not assignable to type 'string'.ts(2322)

function greet(name: string, age: number, hasHobbies:boolean) {
  let x = 10;
  console.log(`Hello, ${name}!`);
  console.log(`Your age is, ${age}!`);
  if(hasHobbies) {
    console.log("You have many hobbies");
  }
}

greet(name,age,hasHobbies);
greet("Kavya",12,false);
greet('Melissa',24,true);
greet('Paul',30,true);
// greet('Sam',"40",false);

