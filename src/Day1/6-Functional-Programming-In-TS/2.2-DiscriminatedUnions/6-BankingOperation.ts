type AccountID = string;

interface Deposit {
    type: 'deposit';
    accountId: AccountID;
    amount: number;
}

interface Withdrawal {
    type: 'withdrawal';
    accountId: AccountID;
    amount: number;
}

interface Transfer {
    type: 'transfer';
    fromAccountId: AccountID;
    toAccountId: AccountID;
    amount: number;
}

type BankTransaction = Deposit | Withdrawal | Transfer;

function processTransaction(transaction: BankTransaction) {
    switch (transaction.type) {
        case 'deposit':
            console.log(`Depositing ${transaction.amount} to account ${transaction.accountId}`);
            break;
        case 'withdrawal':
            console.log(`Withdrawing ${transaction.amount} from account ${transaction.accountId}`);
            break;
        case 'transfer':
            console.log(`Transferring ${transaction.amount} from account ${transaction.fromAccountId} to account ${transaction.toAccountId}`);
            break;
        default:
            const exhaustiveCheck: never = transaction;
            throw new Error(`Unknown transaction type: ${exhaustiveCheck}`);
    }
}

// Example usage:
const deposit: Deposit = { type: 'deposit', accountId: '123', amount: 1000 };
const withdrawal: Withdrawal = { type: 'withdrawal', accountId: '123', amount: 500 };
const transfer: Transfer = { type: 'transfer', fromAccountId: '123', toAccountId: '456', amount: 300 };

processTransaction(deposit);
processTransaction(withdrawal);
processTransaction(transfer);
