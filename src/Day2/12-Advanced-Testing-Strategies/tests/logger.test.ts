import { logger } from '../src/logger';

test('logger.log function', () => {
  // You can spy on functions using jest.spyOn().
  // This allows you to verify that the function was called and how it was called.
  const logSpy = jest.spyOn(logger, 'log');
  // Call the function that you want
  logger.log('test message');
  // The toHaveBeenCalledWith method verifies that the function was called with the expected argument.
  // In this case, we expect the function to be called with the string 'test message'.
  expect(logSpy).toHaveBeenCalledWith('test message');
  // The toHaveBeenCalledTimes method verifies that the function was called a specific number of times.
  expect(logSpy).toHaveBeenCalledTimes(1);
  // You can restore the original implementation of the function after the test is complete.
  // This is useful if you want to use the original function in other tests.
  logSpy.mockRestore();
});
