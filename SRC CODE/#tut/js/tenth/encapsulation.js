// Encapsulation only works on classes

class bankAccount{
    #name;
    #balance;

    // private variables can be made using # before them

    constructor(name,balance){
        this.#name=name;
        this.#balance=balance;
        this.accountNo=Date.now();
    }
    deposit(amt){
        this.#balance+=amt;
    }

    set Balance(amt){
        if(!isNaN(amt))
            this.#balance=amt;
    }
    get Balance(){
        return this.#balance;
    }
}

let myAcc=new bankAccount("kaushal",5000);

// myAcc.balance=0;
// console.log("Updating private variable without setter",myAcc);

// balance isn't accessible outside the class as balance became private.

myAcc.Balance=0;
console.log("Balance after updating with setter :",myAcc.Balance);