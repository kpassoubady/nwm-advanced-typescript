
describe('matchers example test', () => {
  test('should match object correctly', () => {
    const data = { one: 1, two: 2};
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test('should handle null values', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test('should handle undefined values', () => {
    let u;
    expect(u).toBeUndefined();
    expect(u).not.toBeDefined();
    expect(u).not.toBeTruthy();
    expect(u).toBeFalsy();
  });
});