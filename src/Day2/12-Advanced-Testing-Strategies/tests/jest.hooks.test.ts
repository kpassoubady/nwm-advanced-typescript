describe('test suite', () => {
  beforeAll(() => {
    /* Runs before all tests */
    console.log('beforeAll')
  })
  afterAll(() => {
    /* Runs after all tests */
    console.log('afterAll')

  })
  beforeEach(() => {
    /* Runs before each test */
    console.log('beforeEach')
  })
  afterEach(() => {
    /* Runs after each test */
    console.log('afterEach')
  })
  test('test1', () => {
    console.log('hello this is my first test')
  })
});