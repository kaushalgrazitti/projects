/*

// Object using function

function bankAccount(name,balance=0){               // This is acting like constructor function
    this.name=name;
    this.balance=balance;
    this.accountNo=Date.now();
    // this.deposit=(amt)=>{
    //     this.balance+=amt;
    // }
    // The above function is added in each object and taking memory instead of this we can do the below thing where we add function directly to the prototype.
}

bankAccount.prototype.deposit=function (amt){
    this.balance+=amt;
}
// The above function now will not be taking memory as it is now added directly in prototype.

function currentAccount(name,balance){
    this.transactionLimit=1000;
}

currentAccount.prototype=Object.create(Object.create(bankAccount.prototype));
currentAccount.prototype.takeBusinessLoan=function(amt){
    console.log("Taking personal loan :",amt);
}

let myAcc=new bankAccount("Kaushal",10000);
console.log("Before deposit :",myAcc);
myAcc.deposit(500);
console.log("After deposit :",myAcc);

let currAcc=new currentAccount("kaushal",20000);
currAcc.deposit(1000);
currAcc.takeBusinessLoan(5000);
console.log(currAcc);

*/


// Object using classes

class bankAccount{
    name;
    balance;
    constructor(name,balance=0){
        this.name=name;
        this.balance=balance;
    }
    deposit(amt){
        this.balance+=amt;
    }
}
// bankAccount.prototype.deposit=function (amt){
//     this.balance+=amt;
// }
// This is same as making function inside class

class savingAccount extends bankAccount{
    transactionLimit=1000;

    constructor(name,balance){
        super(name,balance);
        // this.transactionLimit=trans
    }
}

let myAcc=new bankAccount("Kaushal",10000);
console.log("Before deposit :",myAcc);
myAcc.deposit(500);
console.log("After deposit :",myAcc);
