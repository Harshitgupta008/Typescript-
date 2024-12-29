// // Interface
var AccountData = function (bankAccountHolder) {
    return bankAccountHolder;
};
var transactions1 = {
    senderId: "harshitharshit",
    senderAccountNumber: 2434543545534,
    receiverId: "guptagupta",
    receiverAccountNumber: 3455345,
};
var transactions2 = {
    senderId: "guptagupta",
    senderAccountNumber: 3455345,
    receiverId: "harshit",
    receiverAccountNumber: 2434543545534,
};
var bankaccount = {
    accountHolde: "Harhshitgupta",
    balance: 34523544,
    accountNumber: 2434543545534,
    isactive: true,
    showTransaction: [transactions1, transactions2]
};
console.log(AccountData(bankaccount));
