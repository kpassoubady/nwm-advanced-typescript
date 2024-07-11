const rejectedPromise3: Promise<Error> = Promise.reject(new Error('First Promise rejected'));

rejectedPromise3.catch((error) => {
  console.error(error.message); // Output: First Promise rejected
});


// _ (underscore) as first parameter here means ignoring the resolve parameter
const existingPromise4: Promise<string> = new Promise((_, reject) => {
  setTimeout(() => {
    reject('Second Promise rejected');
  }, 1000);
});

// Explicitly reject an existing promise
const rejectedPromise4: Promise<string> = Promise.reject(existingPromise4);

rejectedPromise4
  .catch((error) => {
    console.log(error)
    /*
  Promise { <pending> }
  [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, 
  or by rejecting a promise which was not handled with .catch(). 
  The promise rejected with the reason "Second Promise rejected".] {code: 'ERR_UNHANDLED_REJECTION'}
   */
  })

// Explicitly reject an existing promise
const rejectedPromise5: Promise<string> = Promise.resolve(existingPromise4);

rejectedPromise5
  .catch((error) => {
    console.log(error)
    // Output: 
    // Promise { <pending> }
    // Second Promise rejected
  });
