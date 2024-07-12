export interface ApiService {
  guessAge(name: string): Promise<{ count: number, name: string, age:number }>;
}
