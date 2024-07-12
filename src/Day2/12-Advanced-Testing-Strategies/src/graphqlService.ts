
import axios from 'axios';

export const fetchUser = async (id: number): Promise<{ id: number, name: string }> => {
  const response = await axios.post('https://api.example.com/graphql', {
    query: `query { user(id: ${id}) { id, name } }`,
  });
  return response.data.data.user;
};
