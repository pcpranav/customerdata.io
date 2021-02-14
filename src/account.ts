// import Customer from "./customer";
import Invoice from "./invoice";
export default class Account extends Invoice {
  id3: number;
  balance: number;
  discountedamount: number;
  constructor(accountinfo, invoiceinfo, customerinfo) {
    super(invoiceinfo, customerinfo);
    this.id3 = accountinfo.id3;
    this.balance = accountinfo.balance;
  }
  getdiscountdetils() {
    this.discountedamount = this.getAmountAfterDiscount();
  }
  getID1() {
    return this.id3;
  }
  getCustomer() {
    return this.name;
  }
  getBalance() {
    return this.balance;
  }
  getCustomersName() {
    return this.name;
  }
  deposit() {
    let bal = this.balance + this.discountedamount;
    return bal;
  }
  withdraw() {
    if (this.balance >= this.discountedamount) {
      return this.balance - this.discountedamount;
    } else {
      return "amount withdrawn exceeds the current balance";
    }
  }
}
