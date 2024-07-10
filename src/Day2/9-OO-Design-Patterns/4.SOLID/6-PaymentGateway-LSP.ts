export {};

/*  
 Real-life situation: 
Paypal and Stripe classes are implementations of PaymentGateway interface. According to LSP, 
instances of Paypal and Stripe should be substitutable for instances of PaymentGateway without 
affecting the payment processing system's correctness 
*/

// Example: Liskov Substitution Principle (LSP) in a real-life scenario
interface PaymentGateway {
  processPayment(amount: number): void;
}

class Paypal implements PaymentGateway {
  processPayment(amount: number): void {
      // Logic to process payment via Paypal
  }
}

class Stripe implements PaymentGateway {
  processPayment(amount: number): void {
      // Logic to process payment via Stripe
  }
}
