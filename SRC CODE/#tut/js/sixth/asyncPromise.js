function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("reject error");
            console.log("Register");
            resolve();
        },5000);
    });
}

function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Send email");
            resolve();
        },4000);
    });
}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Login");
            resolve();
        },3000);
    })
}

function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Get user data");
            resolve();
        },2000);
    })
}

function displayUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Display user data");
            resolve();
        },1000);
    })
}

register()
.catch(err=>{
    console.log(err);
})
.then(sendEmail)
.then(login)
.then(getUserData)
.then(displayUserData)
.then(()=>console.log("End"));

console.log("Other application work");