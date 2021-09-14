//This right here, is our client

const BankProxy = require('./BankProxy');
const bankProxy = new BankProxy();

bankProxy.deposit(4000000);
bankProxy.withdraw(500000);
bankProxy.deposit(30000);
bankProxy.total();