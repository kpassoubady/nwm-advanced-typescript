export { };

type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

let firstJson : Json = "Kangs";
let secondJson : Json = {name:"Kangs"};
let thirdJson : Json = {name:"Kangs",secondJson}

console.log(firstJson);
console.log(secondJson);
console.log(thirdJson);
