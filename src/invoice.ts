import Customer from "./customer";
export default class Invoice extends Customer {
  id2: number;
  amount: number;
  discount: number;
  constructor(invoiceinfo, customerinfo) {
    super(customerinfo);
    this.id2 = invoiceinfo.id2;
    this.amount = invoiceinfo.amount;
    this.discount = customerinfo.discount;
  }

  getID() {
    return this.id1;
  }
  getCustomer() {
    return this.name;
  }
  setCustomer(customer: string) {
    this.name = customer;
  }
  setAmount(amount: number) {
    this.amount = amount;
  }

  getAmount() {
    return this.amount;
  }
  getCustomerName() {
    return this.name;
  }
  getAmountAfterDiscount() {
    return this.amount - (this.amount * this.discount) / 100;
  }
}
