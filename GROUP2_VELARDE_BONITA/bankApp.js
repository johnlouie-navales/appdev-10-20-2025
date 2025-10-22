let A = Number(prompt("Enter your initial balance: "));
let B = Number(prompt("Enter the amout to be deposit: "));
let C = Number(prompt("Enter the amout to be withdraw: "));

function deposit (bal, amount){
    return (bal + amount);
}

function withdraw (bal, amount){
    return(bal - amount);
}

let deposits = deposit(A, B);
let withdraws = withdraw (deposits, C);

if (withdraws >= 0){
    alert ("Your have final balance is " + withdraws);
}else{
    alert ("Insufficient Balance")}