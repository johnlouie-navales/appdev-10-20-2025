//function to deposit money from balance
function deposit (balance,amount){
    return balance +amount;

}

//function to withdraw money from balance
function withdraw (balance,amount){
   if (amount>balance){
    alert("Insufficient balance!" + " "+"(balance stays)"+" "+balance);
    return balance;
   }else {
    return balance-amount;
   }
}
// user input
let initialBalance = Number(prompt("Enter your initial balance:"));
let depositAmount = Number(prompt("Enter amount to deposit:"));
let withdrawAmount = Number(prompt("Enter amount to withdraw:"));

//display output
let balanceAfterDeposit = deposit(initialBalance, depositAmount);
console.log("Balance after deposit: " + balanceAfterDeposit);

let finalBalance = withdraw(balanceAfterDeposit, withdrawAmount);
console.log("Final balance after withdrawal: " + finalBalance);

alert ("your final balance is: " + finalBalance);