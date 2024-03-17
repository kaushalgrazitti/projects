let sectionNo=0;
let sectionArray=[...document.querySelectorAll(".content > section")];
let steps=document.querySelectorAll(".steps > div > .number");
let handleFinishingUpChange;
export default function(){
    let prevBtn=document.querySelector(".go-back");
    let nextBtn=document.querySelector(".next-step");
    document.querySelector("form").addEventListener("submit",e=>{
        e.preventDefault();
        if(sectionNo<3)
            steps[sectionNo].classList.remove("number-active-state");
        sectionArray[sectionNo++].style.display="none";
        handleStep();
    });
    prevBtn.addEventListener("click",e=>{
        steps[sectionNo].classList.remove("number-active-state");
        sectionArray[sectionNo--].style.display="none";
        handleStep();
    });
    function handleStep(){
        sectionArray[sectionNo].style.display="flex";
        if(sectionNo<4)
            steps[sectionNo].classList.add("number-active-state");
        switch(sectionNo){
            case 0:
                prevBtn.style.visibility="hidden";
                break;
            case 1:
                prevBtn.style.visibility="visible";
            case 2:
                nextBtn.classList.remove("confirm-btn");
                nextBtn.innerText="Next Step";
                break;
            case 3:
                let plan=document.querySelector(".finishing-up .subscription .rate");
                let totalCost=document.querySelector(".finishing-up .total .rate");
                let planCost=giveCost(plan);
                let addOnsCost=[...document.querySelectorAll(".final-add-ons > div > .plan-rate")].reduce((acc,element)=>{
                    return acc+giveCost(element);
                },0);
                totalCost.innerText=`$${planCost+addOnsCost+plan.innerText.trim().slice(-3)}`;
                nextBtn.innerText="Confirm";
                nextBtn.classList.add("confirm-btn");
                break;
            case 4:
                document.querySelector(".content > footer").style.display="none";
                break;
        }
    }
    handleFinishingUpChange=()=>{
        let change=document.querySelector(".finishing-up .change");
        change.addEventListener("click",e=>{
            steps[sectionNo].classList.remove("number-active-state");
            sectionArray[sectionNo].style.display="none";
            sectionNo=1;
            handleStep();
        });
    }
}

function giveCost(element){
    return +element.innerText.trim().match(/\d+/g);
}

export {handleFinishingUpChange};