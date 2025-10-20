function deposit(balance, amount) {
    return balance + amount;
}
function withdraw(balance, amount) {
    return balance - amount;
}

let balance = Number(prompt("ENTER BALANCE: "))
let amount = Number(prompt("ENTER DEPOSIT: "))
let Withdraw = Number(prompt("ENTER WITHDRAW: ")) 

diposits = deposit(balance,amount);
Finale = withdraw(diposits, Withdraw);

if (amount === 0) {
    alert ("Insufficient Balance")
}else {
    alert("Final Balance " + Finale);
}