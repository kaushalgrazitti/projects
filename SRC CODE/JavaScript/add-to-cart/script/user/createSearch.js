import getLocalData from "../getLocalData.js";

export default function(){
    let search=document.querySelector(".functionality input");
    search.addEventListener("input",e=>{
        let adminItems=getLocalData("adminItems");
        adminItems=adminItems.filter(element=>element.itemName.includes(search.value));
        let main=document.querySelector("main");
        main.querySelectorAll("main > div").forEach(element=>{
            element.style.display="none";
        });
        adminItems.forEach(element=>{
            main.querySelector(`#id-${element.id}`).style.display="flex";
        });
    });
}