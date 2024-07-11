export {}
import { Option } from './1-Option';
type OverdraftLimit = Option<number>;

interface BankAccount {
    accountId: string;
    balance: number;
    overdraftLimit: OverdraftLimit;
}

const accountWithOverdraft: BankAccount = {
    accountId: '123',
    balance: 500,
    overdraftLimit: { _tag: "Some", value: 1000 }
};

const accountWithoutOverdraft: BankAccount = {
    accountId: '456',
    balance: 300,
    overdraftLimit: { _tag: "None" }
};

console.log(accountWithOverdraft);
console.log(accountWithoutOverdraft);
