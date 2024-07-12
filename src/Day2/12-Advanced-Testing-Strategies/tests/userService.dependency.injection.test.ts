import { UserService } from '../src/userService';
import { ApiService } from '../src/interfaces';

/*
  In this test, we are testing the UserService class. The UserService class has a dependency on the ApiService class. 
  We are using dependency injection to inject a mock version of the ApiService class into the UserService class. 
  This allows us to control the behavior of the ApiService class and test the UserService class in isolation.
*/

// This is a mock implementation of the ApiService class. 
// It is used to simulate the behavior of the real ApiService class.
const mockApiService: jest.Mocked<ApiService> = {
  // We are mocking the guessAge method to return a fixed value of 41.
  guessAge: jest.fn().mockResolvedValue({ "count": 2, "name": 'kangeyan', "age": 41 }),
};

test('getUserName returns the name of the user', async () => {
  // We are creating an instance of the UserService class and passing the mockApiService as a dependency.
  const userService = new UserService(mockApiService);

  // We are calling the getUserName method of the UserService class.
  const userName = await userService.getUserName('kangeyan');
  // We are asserting that the mockApiService.guessAge method was called with the correct argument.
  expect(mockApiService.guessAge).toHaveBeenCalledWith('kangeyan');
  // We are asserting that the getUserName method returned the expected value.
  expect(userName).toBe('kangeyan');
  // We are asserting that the mockApiService.guessAge method was called exactly once.
  expect(mockApiService.guessAge).toHaveBeenCalledTimes(1);
});

