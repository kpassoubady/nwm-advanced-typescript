
import * as math from "../src/math";

let x = 10;
let y = 2;
const plus = math.add(x, y); // TS knows that `plus` is a number
const diff = math.subtract(x, y); // TS enforces type checking

console.log("add = %d", plus);
console.log("diff = %d", diff);

// const concat = math.add("Hello", "Kangs"); 
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// const product = math.multiply(true, false); 
// Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)