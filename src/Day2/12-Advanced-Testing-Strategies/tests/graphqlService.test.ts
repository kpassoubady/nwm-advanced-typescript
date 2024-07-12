// tests/graphqlService.test.ts
import axios from 'axios';
import { fetchUser } from '../src/graphqlService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('fetchUser returns user data', async () => {
  mockedAxios.post.mockResolvedValue({ data: { data: { user: { id: 1, name: 'John Doe' } } } });

  const user = await fetchUser(1);
  expect(user).toEqual({ id: 1, name: 'John Doe' });
});
