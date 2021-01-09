type BankAccount = {
    balance: number,
    deposit: (value: number) => void
}

type AccountHolder = {
    name: string,
    bankAccount: BankAccount,
    contacts: string[]
}

let bankAccount: BankAccount = {
    balance: 452,
    deposit(value) {
        this.balance += value
    }
}

let accountHolder: AccountHolder = {
    name: 'Daniel',
    bankAccount,
    contacts: ['1230', '1237']
}

accountHolder.bankAccount.deposit(3000)
console.log(accountHolder);
