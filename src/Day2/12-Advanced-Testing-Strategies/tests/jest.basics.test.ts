describe('first test suite', () => {
  test.todo('test5')  // test.todo is a placeholder for a test that has not been implemented yet  
  test.each([ // test.each allows you to run the same test with multiple inputs
    [1, 2, 3],
    [4, 5, 9],
    [7, 8, 15]
  ])('test6(%i + %i)', (a, b, expected) => {
    expect(a + b).toBe(expected)
  })

  // test.each allows you to run the same test with multiple inputs
  // the below test is equivalent to the above test
  // but uses templates to define the test cases
  test.each`
    a    | b    | expected
    ${1} | ${2} | ${3}
    ${4} | ${5} | ${9}
    ${7} | ${8} | ${15}
  `('test7($a + $b)', ({ a, b, expected }) => {
    expect(a + b).toBe(expected)
  })
  test('test8', () => {
    expect(() => { throw new Error('error') }).toThrow('error')
  })
  test.skip('test9', () => {
    expect(true).toBe(true)
  })
  test('test10', () => {
    expect(false).toBe(false)
  })
  it('test11', () => {
    expect(1).toBe(1)
  })
});