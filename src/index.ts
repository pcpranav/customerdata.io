import Configuration from "./config";
import Account from "./account";
let div = document.createElement("div");
div.setAttribute("class", "border border-dark p-1");
let output = document.getElementById("output");

let deposit = document.getElementById("button1");
deposit.addEventListener("click", () => {
  div.innerHTML = "";
  let name = (<HTMLInputElement>document.getElementById("name")).value;
  let id1 = +(<HTMLInputElement>document.getElementById("id")).value;
  let discount = +(<HTMLInputElement>document.getElementById("Discount")).value;
  let id2 = +(<HTMLInputElement>document.getElementById("invoiceId")).value;
  let amount = +(<HTMLInputElement>document.getElementById("amount")).value;
  let id3 = +(<HTMLInputElement>document.getElementById("accountId")).value;
  let balance = +(<HTMLInputElement>document.getElementById("balance")).value;
  let customerinfo: Configuration = {
    id1,
    name,
    discount,
  };
  let invoiceinfo = { id2, amount };
  let accountinfo = {
    id3,
    balance,
  };

  let account = new Account(accountinfo, invoiceinfo, customerinfo);
  account.getdiscountdetils();
  account.deposit();
  account.withdraw();
  // console.log(output);
  let head1 = document.createElement("h3");
  head1.innerHTML = "Name: " + account.getCustomersName();
  let head2 = document.createElement("h3");
  head2.innerHTML = "ID: " + String(account.getId());
  let head3 = document.createElement("h3");
  head3.innerHTML = "Deposit Amount :" + String(account.deposit());
  let head4 = document.createElement("h3");
  head4.innerHTML = "Discout%: " + String(account.getDiscount());
  div.append(head1, head2, head3, head4);
  output.appendChild(div);
});
let withdraw = document.getElementById("button2");
withdraw.addEventListener("click", () => {
  div.innerHTML = "";
  let name = (<HTMLInputElement>document.getElementById("name")).value;
  let id1 = +(<HTMLInputElement>document.getElementById("id")).value;
  let discount = +(<HTMLInputElement>document.getElementById("Discount")).value;
  let id2 = +(<HTMLInputElement>document.getElementById("invoiceId")).value;
  let amount = +(<HTMLInputElement>document.getElementById("amount")).value;
  let id3 = +(<HTMLInputElement>document.getElementById("accountId")).value;
  let balance = +(<HTMLInputElement>document.getElementById("balance")).value;
  let customerinfo: Configuration = {
    id1,
    name,
    discount,
  };
  let invoiceinfo = { id2, amount };
  let accountinfo = {
    id3,
    balance,
  };

  let account = new Account(accountinfo, invoiceinfo, customerinfo);
  account.getdiscountdetils();
  account.deposit();
  account.withdraw();
  let head1 = document.createElement("h3");
  head1.innerHTML = "Name: " + account.getCustomersName();
  let head2 = document.createElement("h3");
  head2.innerHTML = "ID: " + String(account.getId());
  let head3 = document.createElement("h3");
  head3.innerHTML = "Withdraw Amount :" + String(account.withdraw());
  let head4 = document.createElement("h3");
  head4.innerHTML = "Discout%: " + String(account.getDiscount());
  div.append(head1, head2, head3, head4);
  output.appendChild(div);
});
