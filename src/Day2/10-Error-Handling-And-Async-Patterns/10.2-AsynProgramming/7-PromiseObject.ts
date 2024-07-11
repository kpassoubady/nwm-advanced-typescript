// Need latest ES
// change in your tsconfig.json
// "target": "ES2021"
// "lib": ["ES2021","dom"]

// Function to simulate purchasing a product
function procureProduct(product: string, creditCardNumber: number): Promise<string> {
  return new Promise((resolve, reject) => {
    // simulate a random delay
    const delay = Math.round(Math.random() * 1000 * 10);
    console.log(`delay: ${delay}`)
    // simulate a successful purchase with an 80% probability
    const isSuccess = Math.random() < 0.6;
    console.log(`isSuccess: ${isSuccess}`)
    setTimeout(() => {
      if (isSuccess) {
        resolve(`Successfully purchased ${product}.`);
      } else {
        reject(`Failed to purchase ${product}. Insufficient funds or invalid credit card.`);
      }
    }, delay); 
  });
}

// Using the Promise factory pattern to purchase products
function orderProduct(product: string, creditCardNumber: number): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(`Attempting to purchase ${product}...`);
    procureProduct(product, creditCardNumber)
      .then((purchaseResult) => {
        resolve(purchaseResult);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Array of buyProduct operations
const productsToBuy = [
  orderProduct('iPhone from Apple', 123),
  orderProduct('Android phone from Samsung', 456),
  orderProduct('Android phone from Nokia', 789),
];

// Using Promise.all() to wait for all purchases to complete
// This returned promise fulfills when all of the input's promises fulfill 
// (including when an empty iterable is passed), with an array of the fulfillment values. 
// It rejects when any of the input's promises reject, with this first rejection reason.

// Task 1: 
Promise.all(productsToBuy)
  .then((results) => {
    console.log('Task 1: All purchases completed successfully:');
    results.forEach((result) => {
      console.log(result);
    });
  })
  .catch((error) => {
    console.error('Task 1: At least one purchase failed:', error);
  });

// Using Promise.allSettled() to check the status of all purchases
// This returned promise fulfills when all of the input's promises settle 
// (including when an empty iterable is passed), with an array of objects 
// that describe the outcome of each promise

// Task 2:
Promise.allSettled(productsToBuy)
  .then((results) => {
    console.log('Task2 : Purchase statuses:');
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Task 2: Purchase ${index + 1} # ${result.status}: ${result.value}`);
      } else {
        console.log(`Task 2: Purchase ${index + 1} # ${result.status}: ${result.reason}`);
      }
    });
  });

// Using Promise.any() to resolve with the first successful purchase
// This returned promise fulfills when any of the input's promises fulfill, 
// with this first fulfillment value. 
// It rejects when all of the input's promises reject 
// (including when an empty iterable is passed), 
// with an AggregateError containing an array of rejection reasons

// Task 3:20
Promise.any(productsToBuy)
  .then((result) => {
    console.log('First successful purchase:', result);
  })
  .catch((error) => {
    console.error('All purchases failed:', error);
  });

// Using Promise.race() to resolve with the first completed purchase
// This returned promise settles with the eventual state of the first promise that settles
Promise.race(productsToBuy)
  .then((result) => {
    console.log('First completed purchase:', result);
  })
  .catch((error) => {
    console.error('All purchases failed:', error);
  });

  // console.log("=====Reject====")
  // // Returns a new Promise object that is rejected with the given reason
  // Promise.reject("Windows Old Phone Rejected")
  // .then((result) => {
  //   console.log('Rejected with a reason:', result);
  // })
  // .catch((error) => {
  //   console.error('Rejection failed, returns entire object:', error);
  // });

  // console.log("=====Resolve====")
  // // Returns a new Promise object that is rejected with the given reason
  // Promise.resolve(" ")
  // .then((result) => {
  //   console.log('Resolved with a reason:', result);
  // })
  // .catch((error) => {
  //   console.error('Resolved failed:', error);
  // });