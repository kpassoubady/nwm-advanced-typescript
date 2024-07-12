import { ArrayUtils } from '../src/array';

describe('array function', () => {
  test('sumArray [1,2,3,4] to equal 10', () => {
    expect(ArrayUtils.sumArray([1, 2, 3, 4])).toBe(10);
  });
  test('multiplyArray [1,2,3,4] to equal 24', () => {
    expect(ArrayUtils.multiplyArray([1, 2, 3, 4])).toBe(24);
  });
  test('minArray [1,2,3,4] to equal 1', () => {
    expect(ArrayUtils.minArray([1, 2, 3, 4])).toBe(1);
  });
  test('maxArray [1,2,3,4] to equal 4', () => {
    expect(ArrayUtils.maxArray([1, 2, 3, 4])).toBe(4);
  });
  test('reverseArray [1,2,3,4] to equal [4,3,2,1]', () => {
    expect(ArrayUtils.reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
});

describe('remove Duplicate tests', () => {
  test('removeDuplicateArray [1,2,3,4,2,3,5,6] to equal [1,2,3,4,5,6]', () => {
    expect(ArrayUtils.removeDuplicateArray([1, 2, 3, 4, 2, 3, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('removeDuplicateSet [1,2,3,4,2,3,5,6] to equal [1,2,3,4,5,6]', () => {
    expect(ArrayUtils.removeDuplicateSet(new Set([1, 2, 3, 4, 2, 3, 5, 6]))).toEqual(new Set([1, 2, 3, 4, 5, 6]));
  });
});


describe('empty input test', () => {
  test('empty input to equal []', () => {
    expect(ArrayUtils.removeDuplicateArray([])).toEqual([]);
  });
  test('empty input to equal Set', () => {
    expect(ArrayUtils.removeDuplicateSet(new Set([]))).toEqual(new Set([]));
  });
  test('empty input to test sumArray equal 0', () => {
    expect(ArrayUtils.sumArray([])).toEqual(0);
  });
  test('empty input to test multiplyArray equal 0', () => {
    expect(ArrayUtils.multiplyArray([])).toEqual(1);
  });
  test('empty input to test minArray equal Infinity', () => {
    expect(ArrayUtils.minArray([])).toEqual(Infinity);
  });
  test('empty input to test maxArray equal -Infinity', () => {
    expect(ArrayUtils.maxArray([])).toEqual(-Infinity);
  });
});

