export default function (){
    let back=document.querySelector(".back");
    back.addEventListener("click",(e)=>{
        window.open("./first.html","_self");
    });
}