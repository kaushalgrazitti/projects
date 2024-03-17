import handleAddOns from "./handleAddOns.js";

export default function(){
    let toggler=document.querySelector(".toggle-switch");
    let twoMonthsFree=document.querySelectorAll(".modes .details > :nth-child(3)");
    let rate=document.querySelectorAll(".modes .details > :nth-child(2)");

    toggler.addEventListener("click",e=>{
        toggler.querySelector("div").classList.toggle("slide-toggler");
        twoMonthsFree.forEach(element=>{
            element.classList.toggle("display-block");
        });
        rate.forEach(element=>{
            element.innerText=element.innerText.slice(-2)==="mo"?element.innerText.replace("/mo","0/yr"):element.innerText.replace("0/yr","/mo");
        })
        let finishingUpPlan=document.querySelector(".finishing-up .plan");
        let seperatedPlan=finishingUpPlan.innerText.trim().split(" ");
        seperatedPlan[1]=`(${seperatedPlan[1][1]==="Y"?"Monthly":"Yearly"})`;
        finishingUpPlan.innerText=seperatedPlan.join(" ");
        let finishingUpRate=document.querySelector(".finishing-up .subscription .rate");
        finishingUpRate.innerText=[...rate].find(element=>element.closest(".active-cls")).innerText.trim();
        handleAddOns();
    });
}