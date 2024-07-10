export {};

interface User {
    name: string;
    age: number;
}

function greetUser(user: User | { email: string }) {
    if ("name" in user) {
        // user is a User object
        console.log(`Hello, ${user.name}!`);
    } else {
        // user is an object with an email property
        console.log(`Hello, ${user.email}!`);
    }
}

greetUser({email:'kangs@kavinschool.com'});
let user : User = {name:'Kangs', age: 30};
greetUser(user);
