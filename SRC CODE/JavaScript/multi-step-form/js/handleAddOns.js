import createAddOns from "./createAddOns.js";

let finishingUpArray=[...document.querySelectorAll(".extras > label")].map(element=>{
    return createAddOns([...element.querySelectorAll(":nth-child(2),:nth-child(4)")].map(p=>p.innerText));
});
let finalAddOns=document.querySelector(".final-add-ons");

export function addEffectAddOns(){
    let labels=document.querySelectorAll(".extras > label");
    labels.forEach(element=>{
        element.addEventListener("click",e=>{
            e.preventDefault();
            element.classList.toggle("active-cls");
            element.querySelector("input[type=checkbox]").checked=!element.querySelector("input[type=checkbox]").checked;
            let finalAddOnsDiv=[...document.querySelectorAll(".final-add-ons > div")];
            finalAddOnsDiv.find(arrElement=>{
                return element.querySelector(":nth-child(2)").innerText.trim()===arrElement.querySelector(".plan-name").innerText.trim();
            })?
            finishingUpArray[element.id.slice(-1)].remove()
            :
            finalAddOns.append(finishingUpArray[element.id.slice(-1)]);
        });
        element.addEventListener("focus",e=>{
            e.preventDefault();
            element.classList.add("selected-cls");
        });
        element.addEventListener("blur",e=>{
            e.preventDefault();
            element.classList.remove("selected-cls");
        });
    });
}

export default function(){
    let rate=document.querySelectorAll(".extras > label > .rate");
    rate.forEach(element=>{
        changeRate(element);
    });
    finishingUpArray.map(element=>element.querySelector(".plan-rate")).forEach(element=>{
        changeRate(element);
    });
}

function changeRate(element){
    let text=(element.innerText).trim();
    element.innerText=text.slice(-2)==="mo"?text.replace("/mo","0/yr"):text.replace("0/yr","/mo");
}