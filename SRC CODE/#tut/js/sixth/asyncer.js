function register(callback){
    setTimeout(()=>{
        console.log("Register");
        callback();
    },5000);
}

function sendEmail(callback){
    setTimeout(()=>{
        console.log("Send email");
        callback();
    },4000);
}

function login(callback){
    setTimeout(()=>{
        console.log("Login");
        callback();
    },3000);
}

function getUserData(callback){
    setTimeout(()=>{
        console.log("Get user data");
        callback();
    },2000);
}

function displayUserData(callback){
    setTimeout(()=>{
        console.log("Display user data");
    },1000);
}

register(
    ()=>sendEmail(
        ()=>login(
            ()=>getUserData(
                ()=>displayUserData()
            )
        )
    )
);

// callback hell

console.log("Other application work");