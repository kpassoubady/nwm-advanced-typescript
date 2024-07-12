// tests/apiService.test.ts
import axios from 'axios';
import { guessAgeFromAgify } from '../src/realApiServiceGuessAge';

//jest.mock('axios');
//const mockedAxios = axios as jest.Mocked<typeof axios>;

test('guessAge returns data', async () => {
  const data = await guessAgeFromAgify('kangeyan');
  console.log("***returned data****" + JSON.stringify(data));
  expect(data.age).toBe(41);
  expect(data).toEqual({"count":2,"name":"kangeyan","age":41});
});
