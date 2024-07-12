
export const fetchNews = async (category: string): Promise<string[]> => {
  const response = await fetch(`https://news.example.com/${category}`);
  const news = await response.json();
  return news.articles;
};
