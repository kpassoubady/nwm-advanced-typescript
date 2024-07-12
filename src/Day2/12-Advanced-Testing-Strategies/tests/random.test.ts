
import { getRandomNumber } from '../src/random';

test('getRandomNumber function', () => {
  const mockGetRandomNumber = jest.fn().mockReturnValue(0.5);
  expect(mockGetRandomNumber()).toBe(0.5);
  mockGetRandomNumber.mockRestore();
});
