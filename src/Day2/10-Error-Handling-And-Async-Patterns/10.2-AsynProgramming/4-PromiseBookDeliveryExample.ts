const amazonBookDelivery = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Delivered!"); 
  }, 250);
});

amazonBookDelivery.then((successMessage) => {
  console.log(`Book ${successMessage}`);
});

