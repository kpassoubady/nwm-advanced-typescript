export const apiService = {
  fetchData: async (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('fetched data');
      }, 1000);
    });
  }
};
export const apiServiceWithError = {
  fetchDataWithError: async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('error'));
      }, 1000);
    });
  }
};
export const apiServiceWithDelay = {
  fetchDataWithDelay: async (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('fetched data');
        // delay the response by 2 seconds
      }, 2000);
    });
  }
};
export const apiServiceWithTimeout = {
  fetchDataWithTimeout: async (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('fetched data');
        // simulate a timeout by delaying the response by 3 seconds
      }, 3000);
    });
  }
};

function fetchData(success:boolean): Promise<any> {
  // Simulate fetching data from an API using a Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //const success = Math.random() < 0.1; // Simulate success/failure randomly
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}

//  Retry fetching data with a maximum number of attempts
function retryFetch(maxAttempts: number, success:boolean): Promise<any> {
  let attempt = 1;
  async function retry(): Promise<any> {
    try {
      return await fetchData(success);
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

export const apiServiceWithRetry = {
  // add logic to retry fetching the data up to 3 times
  fetchDataWithRetry: async (): Promise<string> => {
    return retryFetch(3, true);
  }
};
export const apiServiceWithRetryError = {
  fetchDataWithRetryError: async (): Promise<string> => {
    return retryFetch(3, false);
  }
};
export const apiServiceWithCache = {
  fetchDataWithCache: async (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('fetched data');
      }, 1000);
    });
  }
};
export const apiServiceWithCacheError = {
  fetchDataWithCacheError: async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('error'));
      }, 1000);
    });
  }
};
export const apiServiceWithMock = {
  fetchDataWithMock: async (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('fetched data');
      }, 1000);
    });
  }
};
