export {}
type AccountType = 'savings' | 'checking' | 'investment';

interface BankAccount {
    accountId: string;
    type: AccountType;
    balance: number;
}

// Define a map of account types to their respective account interfaces
type AccountMap<T extends AccountType> = {
    [K in T]: BankAccount & { type: K };
};

// Define specific account types using the AccountMap type
type SavingsAccount = AccountMap<'savings'>;
type CheckingAccount = AccountMap<'checking'>;
type InvestmentAccount = AccountMap<'investment'>;

// Create a generic function to create accounts of any type
function createAccount<T extends BankAccount>(account: T): T {
    console.log(`Creating ${account.type} account with ID ${account.accountId} and balance ${account.balance}`);
    return account;
}

// Example usage:
const savingsAccount: SavingsAccount['savings'] = { accountId: '123', type: 'savings', balance: 1000 };
const checkingAccount: CheckingAccount['checking'] = { accountId: '456', type: 'checking', balance: 500 };
const investmentAccount: InvestmentAccount['investment'] = { accountId: '789', type: 'investment', balance: 2000 };

createAccount(savingsAccount);
createAccount(checkingAccount);
createAccount(investmentAccount);
