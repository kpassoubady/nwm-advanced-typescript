export {};

function upCase(value: string | null | undefined) {
    if (typeof value === "string") {
        // value is now narrowed down to type string
        console.log(value.toUpperCase());
    } else {
        console.log("Value is null or undefined.");
    }
} 

upCase("kangs");
upCase(null);
upCase(undefined);

