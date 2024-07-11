// the fetchData function takes a callback function as an argument and calls it 
// once the simulated network request is complete

function fetchData(callback: (data: any) => void) {
  // Simulate a network request
  setTimeout(() => {
    const data = { message: 'received an API response' };
    callback(data);
  }, 1000); // Simulate a 1-second delay
}

// Using the callback function
fetchData((data) => {
  console.log(data.message);
});

