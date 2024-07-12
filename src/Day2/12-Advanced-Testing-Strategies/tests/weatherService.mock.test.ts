import axios from 'axios';
import { getWeather } from '../src/weatherService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('getWeather returns weather data', async () => {
  mockedAxios.get.mockResolvedValue({ data: { weather: 'Sunny' } });

  const weather = await getWeather('London');
  expect(weather).toBe('Sunny');
});

test('getWeather handles error', async () => {
  mockedAxios.get.mockRejectedValue(new Error('Network Error'));

  expect.assertions(1);
  try {
    await getWeather('London');
  } catch (e) {
    expect((e as Error).message).toBe('Network Error');
  }
});