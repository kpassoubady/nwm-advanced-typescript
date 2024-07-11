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

// Task 1: Use Promise.all() to fetch data from all sources concurrently
Promise.all([
  fetchFromSourceA(),
  fetchFromSourceB(),
  fetchFromSourceC(),
])
  .then((results) => {
    console.log('Task 1: All data fetched successfully');
    console.log('Task 1 Results:', results);
  })
  .catch((error) => {
    console.error('Task 1: An error occurred', error);
  });

// Task 2: Use Promise.allSettled() to fetch data from all sources and log the status of each Promise
Promise.allSettled([
  fetchFromSourceA(),
  fetchFromSourceB(),
  fetchFromSourceC(),
])
  .then((results) => {
    console.log('\nTask 2: All Promises settled');
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Task 2: Promise ${index + 1}: Fulfilled with value "${result.value}"`);
      } else {
        console.log(`Task 2: Promise ${index + 1}: Rejected with reason "${result.reason}"`);
      }
    });
  });

// Task 3: Use Promise.any() to fetch data from all sources and resolve with the first successful result
Promise.any([
  fetchFromSourceA(),
  fetchFromSourceB(),
  fetchFromSourceC(),
])
  .then((result: any) => {
    console.log('\nTask 3: First successful result');
    console.log('Task 3 Result:', result);
  })
  .catch((error: any) => {
    console.error('Task 3: All Promises rejected', error);
  });

// Task 4: Use Promise.race() to fetch data from all sources and resolve with the fastest result
Promise.race([
  fetchFromSourceA(),
  fetchFromSourceB(),
  fetchFromSourceC(),
])
  .then((result) => {
    console.log('\nTask 4: Fastest result');
    console.log('Task 4 Result:', result);
  })
  .catch((error) => {
    console.error('Task 4: All Promises rejected', error);
  });
