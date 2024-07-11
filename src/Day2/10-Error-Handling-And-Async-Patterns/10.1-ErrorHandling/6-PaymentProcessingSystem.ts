export {}

// Example: Error Recovery Strategies in a Payment Processing System
function processPayment(paymentDetails: any): Promise<any> {
  return new Promise((resolve, reject) => {
      // Simulate processing payment
      setTimeout(() => {
          const success = Math.random() < 0.4; // Simulate success/failure randomly
          if (success) {
              resolve("Payment processed successfully");
          } else {
              reject(new Error("Payment failed due to network issues"));
          }
      }, 1000);
  });
}

function retryPayment(paymentDetails: any, maxAttempts: number): Promise<any> {
  let attempt = 1;
  function retry(): Promise<any> {
      return processPayment(paymentDetails).catch((error) => {
          console.error(`Attempt ${attempt}: ${error.message}`);
          attempt++;
          if (attempt <= maxAttempts) {
              return retry();
          } else {
              throw new Error("Max retry attempts reached");
          }
      });
  }
  return retry();
}

const paymentDetails = { amount: 100, cardNumber: "1234 5678 9012 3456" };
retryPayment(paymentDetails, 3)
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error.message));
