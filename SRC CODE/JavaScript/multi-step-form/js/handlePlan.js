import handleToggle from "./handleToggle.js";
import {addEffectAddOns} from "./handleAddOns.js";

export default function(){
    let modes=[...document.querySelectorAll(".modes > div")];
    modes[0].classList.add("active-cls");
    modes.forEach(element=>{
        element.addEventListener("click",e=>{
            modes.find(element=>element.classList.contains("active-cls")).classList.remove("active-cls");
            element.classList.add("active-cls");
            let finishingUpPlan=document.querySelector(".finishing-up .plan");
            let seperatedPlan=finishingUpPlan.innerText.trim().split(" ");
            seperatedPlan[0]=element.querySelector(".details > :nth-child(1)").innerText.trim();
            finishingUpPlan.innerText=seperatedPlan.join(" ");
            let finishingUpRate=document.querySelector(".finishing-up .subscription .rate");
            finishingUpRate.innerText=element.querySelector(".details > :nth-child(2)").innerText.trim();
        });
        element.addEventListener("focus",e=>{
            element.classList.add("selected-cls");
        });
        element.addEventListener("blur",e=>{
            element.classList.remove("selected-cls");
        });
    });
    handleToggle();
    addEffectAddOns();
}