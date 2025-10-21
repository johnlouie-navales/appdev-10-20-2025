function Deposit(balance, amount) {
  return balance + amount;
}


function Withdraw(balance, amount) {
  return balance - amount;
}

let name = prompt("Enter your name: ");
let Initial_Balance = Number(prompt("Enter your initial balance:"));
let Deposit_Amount = Number(prompt("Enter amount to deposit:"));
let Withdraw_Amount = Number(prompt("Enter amount to withdraw:"));



let balanceAfterDeposit = Deposit(Initial_Balance, Deposit_Amount);
let finalBalance = Withdraw(balanceAfterDeposit, Withdraw_Amount)


  if ( Initial_Balance < Withdraw_Amount){
    alert("Insufficient Balance")
  }
  else{
    alert("Hello," + " " + name +  " " + "your final balance is: " + finalBalance);
  }
