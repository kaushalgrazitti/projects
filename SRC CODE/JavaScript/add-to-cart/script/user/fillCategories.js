import getLocalData from "../getLocalData.js";

export default function(arr){
    let select=document.querySelector("select");
    arr.forEach((ele)=>{
        let option = document.createElement("option");
        option.innerText=ele;
        option.setAttribute("value",ele);
        select.append(option);
    });
    let main=document.querySelector("main");
    select.addEventListener("change",e=>{
        main.querySelectorAll("main > div").forEach(element=>element.style.display="flex");
        if(select.value){
            let nonCategoryElementsId=getLocalData("adminItems").filter(element=>element.category!==select.value).map(element=>"id-"+element.id);
            nonCategoryElementsId.forEach(ele=>{
                main.querySelector(`#${ele}`).style.display="none";
            });
        }
    });
}