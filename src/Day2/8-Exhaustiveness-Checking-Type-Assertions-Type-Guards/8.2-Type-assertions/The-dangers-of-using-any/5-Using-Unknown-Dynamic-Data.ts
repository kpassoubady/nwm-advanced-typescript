export {};

interface User {
    name: string;
    email: string;
    age: number;
}

function getUserData(): unknown {
    // fetch user data from API
    return "xxx";
}

const userData = getUserData();

if (typeof userData === "object" && userData !== null) {
    const user: User = userData as User;
    console.log(`Hello, ${user.name}!`);
} else {
    console.log("Failed to fetch user data.");
}
