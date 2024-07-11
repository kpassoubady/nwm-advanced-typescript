// Function to simulate ordering gasoline
function orderGasoline(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Gasoline ordered successfully.');
    }, 1000); // Simulate a 1-second delay
  });
}

// Function to check the fuel level
function checkFuelLevel(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fuelLevel = 30; // Simulate a fuel level check (in percentage)
      if (fuelLevel >= 20) {
        resolve('Fuel level is sufficient.');
      } else {
        reject('Low fuel level. Please refill.');
      }
    }, 1000); // Simulate a 1-second delay
  });
}

// Function to debit the amount from a credit card
function debitAmount(creditCardNumber: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful debit
      const transactionId = Math.floor(Math.random() * 1000);
      resolve(`Amount debited from credit card. Transaction ID: ${transactionId}`);
    }, 1000); // Simulate a 1-second delay
  });
}

// Example: Chaining Promises for buying gasoline
async function buyGasoline(creditCardNumber: number) {
  try {
    console.log('Ordering gasoline using...' + creditCardNumber);
    const orderResult = await orderGasoline();
    console.log(orderResult);

    console.log('Checking fuel level...' + creditCardNumber);
    const fuelCheckResult = await checkFuelLevel();
    console.log(fuelCheckResult);

    console.log('Debiting the amount from the credit card...' + creditCardNumber);
    const debitResult = await debitAmount(creditCardNumber);
    console.log(debitResult);

    console.log('Gasoline purchase complete!' + creditCardNumber);
  } catch (error) {
    console.error(error + " " + creditCardNumber);
  }
}

function buyGasolineUsingThen(creditCardNumber: number) {
  console.log('Ordering gasoline using...' + creditCardNumber);
  orderGasoline()
    .then((orderResult) => {
      console.log(orderResult);
      console.log('Checking fuel level...' + creditCardNumber);
      return checkFuelLevel();
    })
    .then((fuelCheckResult) => {
      console.log(fuelCheckResult);
      console.log('Debiting the amount from the credit card...' + creditCardNumber);
      return debitAmount(creditCardNumber);
    })
    .then((debitResult) => {
      console.log(debitResult);
      console.log('Gasoline purchase complete!' + creditCardNumber);
    })
    .catch((error) => {
      console.error(error + " " + creditCardNumber);
    });
}


const creditCardNumber = 6666777788889999;
buyGasolineUsingThen(creditCardNumber)
const debitCardNumber = 1222777788889999;
buyGasoline(debitCardNumber);


