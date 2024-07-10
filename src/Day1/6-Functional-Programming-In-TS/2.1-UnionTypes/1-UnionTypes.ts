export { };
// A variable that can hold either a string or a number
let phoneNumber: string | number;
phoneNumber = "1-504-444-3333";
console.log(phoneNumber);
phoneNumber = 1504443333;
console.log(phoneNumber);

//A variable that can hold either a boolean or an object with a name property:

type Person = {
    name: string;
};

let bar: boolean | Person;
bar = true;
console.log(bar);
bar = { name: "Kangs" };
console.log(bar);
