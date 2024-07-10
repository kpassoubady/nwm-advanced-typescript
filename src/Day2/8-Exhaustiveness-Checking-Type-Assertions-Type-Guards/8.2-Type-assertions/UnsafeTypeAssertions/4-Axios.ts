import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
}

async function getUserById(id: number): Promise<User> {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data as User; // Type assertion to ensure response.data is of type User
}

(async () => {
    const user: User = await getUserById(1);
    console.log(user);
})();
