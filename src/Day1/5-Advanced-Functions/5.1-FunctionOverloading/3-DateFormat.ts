export {};

function formatDate(date: Date): string;
function formatDate(dateString: string): string;

function formatDate(dateOrString: Date | string): string {
    if (typeof dateOrString === "string") {
        return new Date(dateOrString).toLocaleDateString();
    } else {
        return dateOrString.toLocaleDateString();
    }
}

console.log(formatDate(new Date())); // Output: formatted current date
console.log(formatDate("2024-07-17")); // Output: formatted date from string
