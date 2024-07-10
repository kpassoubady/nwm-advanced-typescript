export { };

function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}

printName({ name: "Kangs", age: 25 }); // Output: "Kangs"

// Compilation error: Property 'name' is missing in type '{ firstName: string; }' but required in type '{ name: string; }'
//printName({ firstName: "Kavya" }); 
printName({ name: "Kavya", user: "Andres", lastName: "Sam" }); 
