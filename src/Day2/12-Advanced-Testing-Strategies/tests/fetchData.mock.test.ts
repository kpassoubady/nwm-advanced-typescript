import { fetchData } from '../src/fetchData';

jest.mock('../src/fetchData');

const mockedFetchData = fetchData as jest.MockedFunction<typeof fetchData>;

test('fetchData function', async () => {
  mockedFetchData.mockResolvedValue('mocked data');
  const data = await fetchData();
  expect(data).toBe('mocked data');
});
