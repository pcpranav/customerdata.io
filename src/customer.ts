import Configuration from "./config";
export default class Customer {
  id1: number;
  name: string;
  discount: number;
  constructor(obj: Configuration) {
    (this.id1 = obj.id1),
      (this.name = obj.name),
      (this.discount = obj.discount);
  }
  getId(): number {
    return this.id1;
  }
  getName(): string {
    return this.name;
  }
  getDiscount(): number {
    return this.discount;
  }
  setDiscount(discount: number) {
    this.discount = discount;
  }
  toString(): string {
    return String(this.name);
  }
}
