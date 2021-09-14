/*
1. Our custom proxy class will also have 3 methods just like the subject(target) class.
2. In each of these methods, we call our target's methods with additional processes.
However, we need to initiate the Bank object in the constructor() method.
*/

const Bank = require('./Bank');

class BankProxy {
  constructor() {
    this.bank = new Bank();
  }

  deposit(amount) {
    this.bank.deposit(amount);
    console.log(`deposit ${amount}... total cash: ${this.bank.total()}`);
  }

  withdraw(amount) {
    if (this.bank.withdraw(amount)) {
      console.log(`withdraw ${amount}... total cash: ${this.bank.total()}`);
    } else {
      console.log(`failed to withdraw!`);
    }
  }

  total() {
    return console.log(`total cash: ${this.bank.total()}`);
  }
}

module.exports = BankProxy;