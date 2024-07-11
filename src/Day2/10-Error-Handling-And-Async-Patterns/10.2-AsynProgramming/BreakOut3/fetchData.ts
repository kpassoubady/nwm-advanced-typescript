// Function to fetch data from Source A
function fetchFromSourceA(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Source A');
      }, 2000);
    });
  }
  
  // Function to fetch data from Source B
  function fetchFromSourceB(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Source B');
      }, 1500);
    });
  }
  
  // Function to fetch data from Source C
  function fetchFromSourceC(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Source C');
      }, 1000);
    });
  }

  export {}
  