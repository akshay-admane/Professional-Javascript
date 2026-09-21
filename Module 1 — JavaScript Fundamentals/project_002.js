// Project- ATM Simulator (Without Functions) //

console.log("===========================");
console.log("         ATM MENU         ");
console.log("===========================");
console.log("1. Check Balance");
console.log("2. Deposit Money");
console.log("3. Withdraw Money");
console.log("4. View Last Transaction");
console.log("5. Exit");
console.log("===========================");

let balance = 9999;
let lastTransaction = "No Transactions";
let option = 3;
let amount = 100;

switch (option) {
    case 1:
        console.log("Current Balace : ₹" + balance);
        break;

    case 2:
        if (amount > 0) {
            balance = balance + amount;
            console.log("Deposited ₹" + amount);
            lastTransaction = "Deposited ₹" + amount;
        } else if (amount <= 0) {
            console.log("Transaction Failed, Please Enter Valid Amount");
        }
        break;

    case 3:
        if (amount <= 0) {
            console.log("Transaction Failed, Please Enter Valid Amount");
        }
        else if (balance - amount < 1000) {
            console.log("Minimum Balace Required");
            console.log("Withdrawl Failed");
        } else {
            console.log("Withdrawn ₹" + amount);
            balance = balance - amount;
            lastTransaction = "Withdrawn ₹" + amount;
            console.log("Remaining Balace ₹ " + balance);
        }
        break;

    case 4:
        console.log("Last Transaction- " + lastTransaction);
        break;

    case 5:
        console.log("Thank You");
        console.log("Visit Again");
        break;

    default:
        console.log("Invalid Menu Option");
        break;
}