function purchaseProduct(product: string, creditCardNumber: number): Promise<string> {
  return new Promise((resolve, reject) => {
    // simulate a random delay
    const delay = Math.round(Math.random() * 500 * 10);
    console.log(`delay: ${delay}`)
    // simulate a successful purchase with an 80% probability
    const isSuccess = Math.random() < 0.8;
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

// Example: Using the Promise factory pattern to purchase products
function buyProduct(product: string, creditCardNumber: number) {
  console.log(`Attempting to purchase ${product}...`);
  purchaseProduct(product, creditCardNumber)
    .then((purchaseResult) => {
      console.log(purchaseResult);
    })
    .catch((error) => {
      console.error(error);
    });
}

// User choices
enum userChoices {
  ProductA,
  ProductB,
  ProductC
};

function purchase(choice: userChoices) {
  switch (choice) {
    case userChoices.ProductA:
      buyProduct('iPhone from Apple', userCardNumber);
      break;
    case userChoices.ProductB:
      buyProduct('Android phone from Samsung', userCardNumber);
      break;
    case userChoices.ProductC:
      buyProduct('Android phone from Nokia', userCardNumber);
      break;
    default:
      console.log('Invalid product choice.');
  }
}

let userCardNumber = 1234567890;

// Purchase based on user choice
purchase(userChoices.ProductA);
purchase(userChoices.ProductB);
purchase(userChoices.ProductC);



async function buyProductAsync(product: string, creditCardNumber: number) {
  console.log(`Attempting to purchase ${product}...`);
  // You can use the below await to resolve and catch errors
  await purchaseProduct(product, creditCardNumber)
      .then((purchaseResult) => {
          console.log(purchaseResult);
      })
      .catch((error) => {
          console.error(error);
      });

  // Use try catch to resolve and reject promises
  // try {
  //     let  result = await purchaseProduct(product, creditCardNumber)
  //     console.log(result);
  // } catch(err) {
  //     console.log(err)
  // }
}

function purchaseAsync(choice: userChoices) {
  switch (choice) {
      case userChoices.ProductA:
          buyProductAsync('iPhone from Apple', userCardNumber);
          break;
      case userChoices.ProductB:
          buyProductAsync('Android phone from Samsung', userCardNumber);
          break;
      case userChoices.ProductC:
          buyProductAsync('Android phone from Nokia', userCardNumber);
          break;
      default:
          console.log('Invalid product choice.');
  }
}

purchaseAsync(userChoices.ProductA);
purchaseAsync(userChoices.ProductB);
purchaseAsync(userChoices.ProductC);

