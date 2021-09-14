//One way to implement the Proxy Pattern in node.js using a custom proxy class.

//This is our subject class with three simple methods.
class Bank {

    constructor() {
      this.cash = 0;
    }
  
    deposit(amount) {
      this.cash += amount;
      return this.cash;
    }
  
    withdraw(amount) {
      if (amount <= this.cash) {
        this.cash -= amount;
        return true;
      } else {
        return false;
      }
    }
  
    total() {
      return this.cash;
    }
  }
  
  module.exports = Bank;