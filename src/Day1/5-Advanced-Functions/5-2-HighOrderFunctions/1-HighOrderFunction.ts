export {};

// Higher-order function that takes a callback function and executes it
function higherOrderFunction(callback: () => void) {
  console.log("Executing higher-order function");
  callback();
}

// Callback function
function callbackFunction() {
  console.log("Callback function executed");
}

// Call the higher-order function with the callback function
higherOrderFunction(callbackFunction);
