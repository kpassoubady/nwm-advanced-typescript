// tests/apiService.test.ts
import {
  apiService,
  apiServiceWithError,
  apiServiceWithDelay,
  apiServiceWithTimeout,
} from '../src/apiService';

jest.mock('../src/apiService');

const mockedApiService = apiService as jest.Mocked<typeof apiService>;
const mockedApiServiceWithError = apiServiceWithError as jest.Mocked<typeof apiServiceWithError>;
const mockedApiServiceWithDelay = apiServiceWithDelay as jest.Mocked<typeof apiServiceWithDelay>;
const mockedApiServiceWithTimeout = apiServiceWithTimeout as jest.Mocked<typeof apiServiceWithTimeout>;

describe('apiService tests', () => {
  test('apiService.fetchData returns mocked data', async () => {
    mockedApiService.fetchData.mockResolvedValue('mocked data');

    const data = await apiService.fetchData();
    expect(data).toBe('mocked data');
  });
});

describe('apiServiceWithError tests', () => {
  test('apiServiceWithError.fetchDataWithError throws error', async () => {
    mockedApiServiceWithError.fetchDataWithError.mockRejectedValue(new Error('mock error'));

    expect.assertions(1);
    try {
      await apiServiceWithError.fetchDataWithError();
    } catch (e) {
      expect((e as Error).message).toBe('mock error');
    }
  });
});

describe('apiServiceWithDelay tests', () => {
  test('apiServiceWithDelay.fetchDataWithDelay returns mocked data', async () => {
    mockedApiServiceWithDelay.fetchDataWithDelay.mockResolvedValue('mocked data with delay');

    const data = await apiServiceWithDelay.fetchDataWithDelay();
    expect(data).toBe('mocked data with delay');
  });
});

describe('apiServiceWithTimeout tests', () => {
  test('apiServiceWithTimeout.fetchDataWithTimeout returns mocked data', async () => {
    mockedApiServiceWithTimeout.fetchDataWithTimeout.mockResolvedValue('mocked data with timeout');

    const data = await apiServiceWithTimeout.fetchDataWithTimeout();
    expect(data).toBe('mocked data with timeout');
  });
});

