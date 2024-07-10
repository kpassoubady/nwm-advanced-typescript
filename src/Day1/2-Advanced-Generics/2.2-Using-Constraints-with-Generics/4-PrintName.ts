export { };

function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}

printName({ name: "Kangs", age: 25 }); // Output: "Kangs"

// Compilation error: Property 'name' is missing in type '{ firstName: string; }' but required in type '{ name: string; }'
// printName({ firstName: "Kavya" }); 
// Argument of type '{ firstName: string; }' is not assignable to parameter of type '{ name: string; }'.
// Object literal may only specify known properties, and 'firstName' does not exist in type '{ name: string; }'.ts(2345)
printName({ name: "Kavya", user: "Andres", lastName: "Sam" }); 
