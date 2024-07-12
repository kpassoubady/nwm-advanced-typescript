// sum.test.ts
// import * as Math from '../src/math';
import {MathUtils} from '../src/math';

describe('calculator function', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(MathUtils.sum(2, 3)).toBe(5);
  });
  test('subtract 3 - 2 to equal 1', () => {
    expect(MathUtils.subtract(3, 2)).toBe(1);
  });
  test('multiply 2 * 3 to equal 6', () => {
    expect(MathUtils.multiply(2, 3)).toBe(6);
  });
  test('divide 6 / 3 to equal 2', () => {
    expect(MathUtils.divide(6, 3)).toBe(2);
  });
  test('mod 6 % 3 to equal 0', () => {
    expect(MathUtils.mod(6, 3)).toBe(0);
  });
  test('power 2 ** 3 to equal 8', () => {
    expect(MathUtils.power(2, 3)).toBe(8);
  });
  test('factorial 3! to equal 6', () => {
    expect(MathUtils.factorial(3)).toBe(6);
  });
});

describe('number function', () => {
  test('isEven 4 to be true', () => {
    expect(MathUtils.isEven(4)).toBe(true);
  });
  test('isEven 5 to be false', () => {
    expect(MathUtils.isEven(5)).toBe(false);
  });
  test('isOdd 5 to be true', () => {
    expect(MathUtils.isOdd(5)).toBe(true);
  });
  test('isPrime 5 to be true', () => {
    expect(MathUtils.isPrime(5)).toBe(true);
  });
  test('isPrime 4 to be false', () => {
    expect(MathUtils.isPrime(4)).toBe(false);
  });
  test('isPrime 1 to be false', () => {
    expect(MathUtils.isPrime(1)).toBe(false);
  });
  test('isFibonacci 5 to be true', () => {
    expect(MathUtils.isFibonacci(5)).toBe(true);
  });
  test('isFibonacci 4 to be false', () => {
    expect(MathUtils.isFibonacci(4)).toBe(false);
  });
  test('isFibonacci 1 to be true', () => {
    expect(MathUtils.isFibonacci(1)).toBe(true);
  });
  test('isPerfectSquare 9 to be true', () => {
    expect(MathUtils.isPerfectSquare(9)).toBe(true);
  });
  test('isPerfectSquare 8 to be false', () => {
    expect(MathUtils.isPerfectSquare(8)).toBe(false);
  });
  test('isPerfectSquare 1 to be true', () => {
    expect(MathUtils.isPerfectSquare(1)).toBe(true);
  });
  test('isPerfectCube 27 to be true', () => {
    expect(MathUtils.isPerfectCube(27)).toBe(true);
  });
  test('isPerfectCube 8 to be true', () => {
    expect(MathUtils.isPerfectCube(8)).toBe(true);
  });
});

describe('mocking function', () => {
  test('mocking sum function', () => {
    const mockSum = jest.fn(MathUtils.sum);
    expect(mockSum(2, 3)).toBe(5);
    expect(mockSum).toHaveBeenCalledWith(2, 3);
  });
  test('mocking subtract function', () => {
    const mockSubtract = jest.fn(MathUtils.subtract);
    expect(mockSubtract(3, 2)).toBe(1);
    expect(mockSubtract).toHaveBeenCalledWith(3, 2);
  });
  test('mocking multiply function', () => {
    const mockMultiply = jest.fn(MathUtils.multiply);
    expect(mockMultiply(2, 3)).toBe(6);
    expect(mockMultiply).toHaveBeenCalledWith(2, 3);
  });
  test('mocking divide function', () => {
    const mockDivide = jest.fn(MathUtils.divide);
    expect(mockDivide(6, 3)).toBe(2);
    expect(mockDivide).toHaveBeenCalledWith(6, 3);
  });
  test('mocking mod function', () => {
    const mockMod = jest.fn(MathUtils.mod);
    expect(mockMod(6, 3)).toBe(0);
    expect(mockMod).toHaveBeenCalledWith(6, 3);
  });
  test('mocking power function', () => {
    const mockPower = jest.fn(MathUtils.power);
    expect(mockPower(2, 3)).toBe(8);
    expect(mockPower).toHaveBeenCalledWith(2, 3);
  });
  test('mocking factorial function', () => {
    const mockFactorial = jest.fn(MathUtils.factorial);
    expect(mockFactorial(3)).toBe(6);
    expect(mockFactorial).toHaveBeenCalledWith(3);
  });
});
