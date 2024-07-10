export {}

// Techniques to make functions pure
// 1. Avoid side effects  
// 2. Avoid mutating state
// 3. Avoid shared state
// 4. Avoid time-dependent logic
// 5. Avoid randomness  

// Techniques to make immutability
// 1. Use const keyword for variables
// 2. Use Object.freeze() method to make objects immutable
// 3. Use readonly properties in interfaces or classes

interface Account {
  readonly accountId: string;
  readonly balance: number;
}

function deposit(account: Account, amount: number): Account {
/*
The ...account syntax in the code is known as the spread operator in JavaScript and TypeScript.
It is used to make a shallow copy of an object or array. In this case, it is used to copy all properties from the account object.
When used in the return statement of the deposit function, it creates a new object with all the properties of the account object. 
Then, the balance property is updated with the new balance. 
This approach ensures that the original account object is not mutated, adhering to the principle of immutability.
Here's a step-by-step breakdown:

Create a new object.
Copy all properties from the account object to the new object.
Update the balance property of the new object with the new balance.
*/
  return { ...account, balance: account.balance + amount };
}

const myAccount: Account = { accountId: 'KP-1234', balance: 1000 };
const updatedAccount = deposit(myAccount, 500);
console.log(updatedAccount);
console.log(updatedAccount.balance); // Output: 1500
