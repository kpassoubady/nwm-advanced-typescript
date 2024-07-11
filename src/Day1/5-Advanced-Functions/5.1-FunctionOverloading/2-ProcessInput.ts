export {};

function processInput(input: string): void;
function processInput(input: number): void;


function processInput(input: string | number): void {
    if (typeof input === "string") {
        // Process string input
        console.log("Processing string:", input.toUpperCase());
    } else {
        // Process number input
        console.log("Processing number:", input * 2);
    }
}

// Call the function with different types of arguments
processInput("kangs"); // Output: Processing string: KANGS
processInput(5); // Output: Processing number: 10
