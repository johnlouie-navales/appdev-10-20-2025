// prompt
let initialBal = Number(prompt("Initial Balance: "))
let depositAmount = Number(prompt("Enter the amount you want to deposit: "));
let widthdrawAmount = Number(prompt("Enter the amount you want to withdraw: "));

//function
function deposit(balance, amount){
  return balance + amount;
}

function withdraw(balance, amount){
  if(amount>balance){
    alert("Insuficient Balance")
    return lastBal
  } else{
  return balance - amount;
  }
}


//function in order

let newBalDep = deposit(initialBal, depositAmount)
let lastBal = withdraw(newBalDep, widthdrawAmount)

//display
alert("Your new Balance is: " + lastBal)
