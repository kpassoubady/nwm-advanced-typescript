import { getUser } from '../src/userService';

/*
jest.mock can be used to automatically mock modules, 
while jest.fn can create mock functions for more control over their implementation
*/
jest.mock('../src/userService');

const mockedGetUser = getUser as jest.MockedFunction<typeof getUser>;

test('getUser returns user data', async () => {
  mockedGetUser.mockResolvedValue({ id: 1, name: 'John Doe' });
  
  const user = await getUser(1);
  expect(user).toEqual({ id: 1, name: 'John Doe' });
});
