export {}

// Scenario: Transaction processing with immutable account balances.

interface Account {
  readonly accountId: string;
  readonly balance: number;
}


interface Transaction {
  readonly accountId: string;
  readonly amount: number;
  readonly timestamp: Date;
}

function processTransaction(account: Account, transaction: Transaction): Account {
  if (transaction.amount > 0) {
      return { ...account, balance: account.balance + transaction.amount };
  } else {
      return { ...account, balance: account.balance - Math.abs(transaction.amount) };
  }
}

const myAccount: Account = { accountId: 'KP-2116', balance: 1000 };
let transaction: Transaction = { accountId: 'KP-2116', amount: 500, timestamp: new Date() };
let updatedAccount = processTransaction(myAccount, transaction);
console.log(updatedAccount);
console.log(updatedAccount.balance);
transaction  = { accountId: 'KP-2116', amount: -100, timestamp: new Date() };
let updatedAccount2 = processTransaction(myAccount, transaction);
console.log(updatedAccount2);
console.log(updatedAccount2.balance);

