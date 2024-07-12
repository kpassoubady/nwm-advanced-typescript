export const processPayment = async (amount: number): Promise<string> => {
  // Simulate a call to an external payment gateway
  return fetch(`https://payment.example.com/process?amount=${amount}`).then(res => res.text());
};

