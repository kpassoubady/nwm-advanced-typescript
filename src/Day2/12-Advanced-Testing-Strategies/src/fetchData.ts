// src/fetchData.ts
export const fetchData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data');
    }, 1000);
  });
};

export const fetchDataWithError = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('error'));
    }, 1000);
  });
};

