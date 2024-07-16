
import * as math from '../src/math.mjs';
/*
The below command does the following:
It uses the --import flag to load a data URL containing JavaScript code.
The code imports the register function from node:module and pathToFileURL from node:url.
It then calls register("ts-node/esm", pathToFileURL("./")) to register the ts-node/esm loader.
*/
// node --trace-warnings --import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));' ./test/simpleCalc.ts


let x = 10;
let y = 2;

const plus = math.add(1, 2); // TS knows that `plus` is a number
const diff = math.subtract(x, y); // TS enforces type checking

console.log("add = %d", plus);
console.log("diff = %d", diff);

const concat = math.add("Hello", "Kangs"); 
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
const product = math.multiply(true, false); 
// Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)
