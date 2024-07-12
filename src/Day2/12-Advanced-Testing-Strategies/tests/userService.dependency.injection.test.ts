import { UserService } from '../src/userService';
import { ApiService } from '../src/interfaces';

const mockApiService: jest.Mocked<ApiService> = {
  guessAge: jest.fn().mockResolvedValue({ "count": 2, "name": 'kangeyan', "age": 41 }),
};

test('getUserName returns the name of the user', async () => {
  const userService = new UserService(mockApiService);

  const userName = await userService.getUserName('kangeyan');
  expect(userName).toBe('kangeyan');
  expect(mockApiService.guessAge).toHaveBeenCalledWith('kangeyan');
});

