// tests/newsService.test.ts
import { fetchNews } from '../src/newsService';

test('fetchNews returns news articles', async () => {
  const mockFetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ articles: ['Article 1', 'Article 2'] }),
    })
  );

  global.fetch = mockFetch as any;

  const news = await fetchNews('technology');
  expect(news).toEqual(['Article 1', 'Article 2']);
  expect(mockFetch).toHaveBeenCalledWith('https://news.example.com/technology');
});
