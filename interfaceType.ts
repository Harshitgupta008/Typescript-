// // Interface

interface Transaction {
    senderId: string,
    senderAccountNumber: number,
    receiverId: string,
    receiverAccountNumber: number
}

interface BankAccount {
    accountHolde: string,
    balance: number,
    accountNumber: number,
    isactive: boolean,
    showTransaction: Transaction[]
}

const AccountData = (bankAccountHolder: BankAccount): BankAccount => {
    return bankAccountHolder;
}

const transactions1: Transaction = {
    senderId: "harshitharshit",
    senderAccountNumber: 2434543545534,
    receiverId: "guptagupta",
    receiverAccountNumber: 3455345,
}
const transactions2: Transaction = {
    senderId: "guptagupta",
    senderAccountNumber: 3455345,
    receiverId: "harshit",
    receiverAccountNumber: 2434543545534,
}

const bankaccount: BankAccount = {
    accountHolde: "Harhshitgupta",
    balance: 34523544,
    accountNumber: 2434543545534,
    isactive: true,
    showTransaction: [transactions1, transactions2]

}

console.log(AccountData(bankaccount));