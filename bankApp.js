// Function to deposit money
function deposit(balance, amount) {
    return balance + amount;
}

// Function to withdraw money
function withdraw(balance, amount) {
    if (amount > balance) {
        alert("Insufficient balance!");
        return balance; // balance stays the same
    } else {
        return balance - amount;
    }
}

// Ask user for inputs
let name = prompt("Enter your name:");
let balance = Number(prompt("Enter your initial balance:"));
let depositAmount = Number(prompt("Enter amount to deposit:"));
let withdrawAmount = Number(prompt("Enter amount to withdraw:"));

// Process deposit and withdrawal
balance = deposit(balance, depositAmount);
balance = withdraw(balance, withdrawAmount);

// Display final balance
alert("Hello, " + name + "! Your final balance is ₱" + balance + ".");