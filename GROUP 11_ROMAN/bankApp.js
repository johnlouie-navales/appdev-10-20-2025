function deposit(balance, amount) {
  return balance + amount;
}

function withdraw(balance, amount) {
     return balance - amount;
}

let initialBalance = Number(prompt("Initial balance: "));
let amountDeposit = Number(prompt("Amount to deposit: "));
let amountWithdraw = Number(prompt("Amount to withdraw: "));

let balDeposit = deposit(initialBalance, amountDeposit);
let finalBal = withdraw(balDeposit, amountWithdraw);

if (finalBal >= 0){
  alert("Your final balance is " + finalBal);
} else {
  alert("Insuffiecient Balance");
}