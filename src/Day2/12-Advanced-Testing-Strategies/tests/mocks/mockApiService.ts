// tests/mocks/mockApiService.ts
import { ApiService } from '../../src/interfaces';

export class MockApiService implements ApiService {
  guessAge(name: string): Promise<{ count: number, name: string, age: number }> {
    return Promise.resolve({ "count": 2, "name": name, "age": 41 });
  }
}
