import { ApiService } from './interfaces';

export const getUser = async (id: number): Promise<{ id: number, name: string }> => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: 'John Doe' });
    }, 1000);
  });
};


export class UserService {
  constructor(private apiService: ApiService) {}

  async getUserName(userName: string): Promise<string> {
    const userData = await this.apiService.guessAge(userName);
    return userData.name;
  }
}