export {};

type TransactionType = 'deposit' | 'withdrawal' | 'dividend';

interface Transaction {
    type: TransactionType;
    amount: number;
    date: string;
}

type TransactionMap<T extends TransactionType> = {
    [K in T]: Transaction & { type: K };
};

type Deposit = TransactionMap<'deposit'>;
type Withdrawal = TransactionMap<'withdrawal'>;
type Dividend = TransactionMap<'dividend'>;

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
const deposit: Deposit['deposit'] = { type: 'deposit', amount: 1000, date: '2024-07-09' };
const withdrawal: Withdrawal['withdrawal'] = { type: 'withdrawal', amount: 500, date: '2024-07-09' };
const dividend: Dividend['dividend'] = { type: 'dividend', amount: 200, date: '2024-07-09' };

processTransaction(deposit);
processTransaction(withdrawal);
processTransaction(dividend);
