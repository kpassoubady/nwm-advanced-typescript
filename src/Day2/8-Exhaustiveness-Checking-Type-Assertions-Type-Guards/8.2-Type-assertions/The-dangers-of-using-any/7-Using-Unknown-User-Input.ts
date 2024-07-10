export {};

function processForm(formData: unknown) {
    if (typeof formData === "object" && formData !== null) {
        const name = (formData as { name?: string }).name;
        const age = (formData as { age?: string }).age;

        if (name && age) {
            console.log(`Hello, ${name}! You are ${age} years old.`);
        } else {
            console.log("Missing form data.");
        }
    } else {
        console.log("Invalid form data.");
    }
}
