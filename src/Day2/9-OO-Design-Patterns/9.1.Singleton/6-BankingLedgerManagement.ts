export {};

//Scenario: Managing a central ledger instance for transactions.
//Singleton pattern ensures that only one instance of the Ledger class is created and shared across the application.
//This allows multiple components to access the same ledger instance and maintain a consistent transaction history.
//The Ledger class has a private constructor to prevent external instantiation and a static method to access the singleton instance.
//The getInstance method creates the Ledger instance if it does not exist or returns the existing instance.
//The recordTransaction method is used to add a new transaction to the ledger, and getTransactionHistory returns the list of transactions.
//The Ledger class maintains an array of transactions to store the transaction history.
//The usage example demonstrates how multiple components can interact with the same ledger instance.
class Ledger {
  private static instance: Ledger | null = null;
  private transactions: number[];

  private constructor() {
      this.transactions = [];
  }

  static getInstance(): Ledger {
      if (!Ledger.instance) {
          Ledger.instance = new Ledger();
      }
      return Ledger.instance;
  }

  recordTransaction(amount: number): void {
      this.transactions.push(amount);
  }

  getTransactionHistory(): number[] {
      return this.transactions;
  }
}

// Usage:
// Create a new transaction ledger instance
// Add transactions to the ledger
const ledgerInstance = Ledger.getInstance();
ledgerInstance.recordTransaction(1000);
console.log(ledgerInstance.getTransactionHistory()); // Output: [1000]

const anotherLedgerInstance = Ledger.getInstance();
anotherLedgerInstance.recordTransaction(-500);
console.log(anotherLedgerInstance.getTransactionHistory());
console.log(ledgerInstance.getTransactionHistory()); // Output: [1000, -500]
