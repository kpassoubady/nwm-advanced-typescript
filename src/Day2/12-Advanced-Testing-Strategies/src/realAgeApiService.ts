import { ApiService } from '../src/interfaces';

export class RealApiService implements ApiService {
  async guessAge(name: string): Promise<{ count: number, name: string, age:number }> {
    const response = await fetch(`https://api.agify.io/?name=${name}`);
    return await response.json();
  }
}