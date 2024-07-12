// tests/fetchData.test.ts
import { fetchData, fetchDataWithError } from '../src/fetchData';

test('fetchData resolves with data', () => {
  return fetchData().then(data => {
    expect(data).toBe('data');
  });
});

test('fetchData resolves with data', async () => {
  const data = await fetchData();
  expect(data).toBe('data');
});

test('fetchData resolves with data', async () => {
  await expect(fetchData()).resolves.toBe('data');
});

test('fetchDataWithError rejects with error', async () => {
  /*
  When testing functions that may reject, you can use expect.assertions to verify that the correct number of assertions are called. 
  This ensures the test fails if the promise is resolved unexpectedly.
  */
  expect.assertions(1);
  try {
    await fetchDataWithError();
  } catch (e) {
    expect((e as Error).message).toBe('error');
  }
});

