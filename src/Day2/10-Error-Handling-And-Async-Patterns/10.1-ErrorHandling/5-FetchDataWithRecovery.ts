export { }

// Example: Error Recovery Strategies
function fetchData(): Promise<any> {
  // Simulate fetching data from an API using a Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.1; // Simulate success/failure randomly
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}

//  Retry fetching data with a maximum number of attempts
function retryFetch(maxAttempts: number): Promise<any> {
  let attempt = 1;
  async function retry(): Promise<any> {
    try {
      return await fetchData();
    } catch (error) {
      console.error(`Attempt ${attempt}: ${(error as Error).message}`);
      attempt++;
      if (attempt <= maxAttempts) {
        return retry();
      } else {
        throw new Error("Max retry attempts reached");
      }
    }
  }
  return retry();
}

// Retry fetching data with a maximum of 3 attempts
retryFetch(5)
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error.message));
