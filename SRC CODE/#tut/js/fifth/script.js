let accounts=[];
function acc(name,balance){
    this.name=name;
    this.balance=balance;
    this.accountNo=Date.now();
}
acc.prototype.deposit=function(amount){
    this.balance+=amount;
}
btn1.addEventListener("click",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let balance=document.getElementById("balance").value;
    accounts.push(new acc(name,+balance));
});
btn2.addEventListener("click",(e)=>{
    e.preventDefault();
    let account=+document.getElementById("account").value;
    let amount=+document.getElementById("amount").value;
    let obj=accounts.find((ele)=>ele.accountNo===account);
    if(obj){
        obj.deposit(amount);
        console.log("Balance updated!");
    }
    else alert("Account number doesn't exist!");
});