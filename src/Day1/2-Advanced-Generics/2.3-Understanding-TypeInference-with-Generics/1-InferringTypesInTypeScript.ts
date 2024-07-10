export {};

let name = "Kangs"; // inferred as string
let age = 30; // inferred as number
let hasHobbies = true; // inferred as boolean

function greet(name: string, age: number, hasHobbies:boolean) {
  console.log(`Hello, ${name}!`);
  console.log(`Your age is, ${age}!`);
  if(hasHobbies) {
    console.log("You have many hobbies");
  }
}

greet(name,age,hasHobbies);
greet("Kavya",12,false);
greet('Melissa',24,true);
