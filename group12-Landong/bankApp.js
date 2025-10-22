let initialInput = prompt("Initial balance:");
let depositInput = prompt("Amount to deposit:");
let withdrawInput = prompt("Amount to withdraw:");

function toNumber(value) {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : 0;
}

let balance = toNumber(initialInput);
let depositAmt = toNumber(depositInput);
let withdrawAmt = toNumber(withdrawInput);

function deposit(balance, amount) {
  return balance + amount;
}

function withdraw(balance, amount) {
  if (amount > balance) {
    alert("Insufficient balance");
    return balance;
  }
  return balance - amount;
}

balance = deposit(balance, depositAmt);
balance = withdraw(balance, withdrawAmt);

alert("Final balance: " + balance);