class acc{
    name;
    age;
    static id=1;
    static obj={print:"hello"}
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.id=acc.id++;
    }

    static print(){
        console.log(acc.obj.print);
    }
}

user=[];
user.push(new acc("aizen",39));
user.push(new acc("light",20));
user.push(new acc("johan",29));
user.sort((a,b)=>a.age-b.age);
console.log(user);
acc.print();

// static method can only access static variable and by using classes only but static variables can be used by non static methods but using classes only.