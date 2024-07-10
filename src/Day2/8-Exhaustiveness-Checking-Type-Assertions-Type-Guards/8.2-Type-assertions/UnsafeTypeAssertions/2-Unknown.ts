export {};

function processValue(value: unknown) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log("Value is not a string.");
    }
}

processValue("Kangs");
processValue(20);