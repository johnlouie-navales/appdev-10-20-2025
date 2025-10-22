let answer;

do {
//Deposit
function deposit(balance, amount) {
  return balance + amount;
}

//Withraw
function withraw(balance, amount) {
  if (balance < amount) {
    alert("Insufficient Balance");
    return balance;

  } else;
      return balance - amount;
}
//Prompts
let initial_balance = Number(prompt("Enter Your Initial Balance: "));
let deposit_amount = Number(prompt("Enter Amount to Deposit: "));
let withraw_amount = Number(prompt("Enter Amount to Withraw: "));

let new_balance_after_deposit = deposit(initial_balance, deposit_amount);
let final_balance = withraw(new_balance_after_deposit, withraw_amount);

alert(
  "Initial Balance " +
    initial_balance +
    "\nAmount Deposited: " +
    deposit_amount +
    "\nAmount Withrawn: " +
    withraw_amount +
    "\nFinal Balance: " +
    final_balance
);

    answer = prompt("Do you Want to Continue? (y/n)").toLocaleLowerCase();
 
} while (answer === "y" || answer === "yes");

alert ("Thank You For Using this Program!");