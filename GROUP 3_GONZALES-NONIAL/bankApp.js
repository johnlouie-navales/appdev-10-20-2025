// Asking user prompt // parseFloat for whole or decimals number
let initialBalance = parseFloat(prompt("Enter Initial Balance: "));
let depositAmount = parseFloat(prompt("Enter Amount to Deposit: "));
let Withdrawamount = parseFloat(prompt("Enter Amount to withdraw: "));

// Function to deposit money 
function determineDeposit (balance, amount) {
        return balance + amount ;
    }

// Function to withdraw money 
function withdraw (balance, amount) {
    if (amount > balance) { 
        alert ("Insufficient Balance!"); //if the initial amount is greater than than the balance
        return balance;
    } else { //otherwise 
    return balance - amount; 
    } 
}

// Process of the new balance: Deposit first, then withdraw
let newBalance = determineDeposit(initialBalance,depositAmount);
newBalance = withdraw(newBalance, Withdrawamount);

// Displays Final Balance
alert("Your final balance is: " + newBalance);
