export { };

// TransactionType is a union type that represents the different types of transactions
type TransactionType = 'deposit' | 'withdrawal' | 'dividend';

// Transaction is an interface that represents a transaction object
interface Transaction {
  type: TransactionType;
  amount: number;
  date: string;
}

// TransactionMap is a mapped type that maps each transaction type to a specific transaction object
type TransactionMap<T extends TransactionType> = {
  // For each transaction type, we create a new object that extends the Transaction interface and adds the type property
  [K in T]: Transaction & { type: K };
};

// Deposit, Withdrawal, and Dividend are mapped types that map each transaction type to a specific transaction object
type Deposit = TransactionMap<'deposit'>;
type Withdrawal = TransactionMap<'withdrawal'>;
type Dividend = TransactionMap<'dividend'>;

// processTransaction is a function that processes a transaction object
function processTransaction<T extends Transaction>(transaction: T) {
  switch (transaction.type) {
    case 'deposit':
      console.log(`Processing deposit of ${transaction.amount} on ${transaction.date}`);
      break;
    case 'withdrawal':
      console.log(`Processing withdrawal of ${transaction.amount} on ${transaction.date}`);
      break;
    case 'dividend':
      console.log(`Processing dividend of ${transaction.amount} on ${transaction.date}`);
      break;
    default:
      const exhaustiveCheck: never = transaction.type;
      throw new Error(`Unknown transaction type: ${exhaustiveCheck}`);
  }
}

// Example usage:
// Create deposit, withdrawal, and dividend transactions
const deposit: Deposit['deposit'] = { type: 'deposit', amount: 1000, date: '2024-07-09' };
const withdrawal: Withdrawal['withdrawal'] = { type: 'withdrawal', amount: 500, date: '2024-07-09' };
const dividend: Dividend['dividend'] = { type: 'dividend', amount: 200, date: '2024-07-09' };
// const interest: Dividend['interest'] = { type: 'interest', amount: 200, date: '2024-07-09' }; -- Property 'interest' does not exist on type 'Dividend'.ts(2339)


processTransaction(deposit);
processTransaction(withdrawal);
processTransaction(dividend);
processTransaction({ type: 'dividend', amount: 0, date: '2024-07-10' });
// processTransaction({ type: 'unknown', amount: 0, date: '2024-07-10' }); 
// Type '"unknown"' is not assignable to type 'TransactionType'.ts(2322)
// Compilation error: Argument of type '{ type: "unknown"; amount: number; date: string; }' is not assignable to parameter of type 'Transaction'. 
// Object literal may only specify known properties, and 'type' does not exist in type 'Transaction'.ts(2345)
