function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("reject error");
            console.log("Register");
            resolve("registered");
        },5000);
    });
}

function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Send email");
            resolve("email sent!");
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

async function start(){
    try{
        console.log(await register());
    }
    catch(err){
        console.log(err);
    }
    console.log(await sendEmail());
    await login();
    await getUserData();
    await displayUserData();
    console.log("Other application work");
}
start().then(()=>console.log("END"));