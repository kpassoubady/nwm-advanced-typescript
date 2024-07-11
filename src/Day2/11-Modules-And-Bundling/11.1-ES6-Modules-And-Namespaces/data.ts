// data.ts (Data module)
export function fetchData(url: string): Promise<any> {
  console.log('Fetching data')
  //
  // Logic to fetch data from the server
  //
  if (!url) {
    throw new Error("URL is required");
  }
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

