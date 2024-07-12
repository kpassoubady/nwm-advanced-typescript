import {MathUtils} from '../src/math';

// You can create mock functions using jest.fn(). 
// This allows you to define the behavior of the function and verify how it was used.
// jest.fn() returns a mock function
// mockImplementation() allows you to define the behavior of the mock function
// mockRestore() resets the mock function
// toHaveBeenCalledWith() verifies that the mock function was called with specific arguments
// toBeCalledWith() is an alias for toHaveBeenCalledWith()
// toHaveBeenCalled() verifies that the mock function was called
// toBeCalled() is an alias for toHaveBeenCalled()
// toHaveBeenCalledTimes() verifies that the mock function was called a specific number of times  

test('multiply function', () => {
  const mockMultiply = jest.fn().mockImplementation((a, b) => a * b);
  expect(mockMultiply(2, 3)).toBe(6);
  expect(mockMultiply).toHaveBeenCalledWith(2, 3);
  mockMultiply.mockRestore();
});
test('add function', () => {
  const mockAdd = jest.fn().mockImplementation((a, b) => a + b);
  expect(mockAdd(2, 3)).toBe(5);
  expect(mockAdd).toHaveBeenCalledWith(2, 3);
  mockAdd.mockRestore();
});
test('subtract function', () => {
  const mockSubtract = jest.fn().mockImplementation((a, b) => a - b);
  expect(mockSubtract(2, 3)).toBe(-1);
  expect(mockSubtract).toHaveBeenCalledWith(2, 3);
  mockSubtract.mockRestore();
});
test('divide function', () => {
  const mockDivide = jest.fn().mockImplementation((a, b) => a / b);
  expect(mockDivide(6, 3)).toBe(2);
  expect(mockDivide).toHaveBeenCalledWith(6, 3);
  mockDivide.mockRestore();
});
test('square function', () => {
  const mockSquare = jest.fn().mockImplementation((a) => a * a);
  expect(mockSquare(2)).toBe(4);
  expect(mockSquare).toHaveBeenCalledWith(2);
  mockSquare.mockRestore();
});