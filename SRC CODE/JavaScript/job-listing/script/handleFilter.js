import createFilterTag from "./createFilterTag.js";
import giveRelevantElements from "./giveRelevantElements.js";

export default function(){
    let main=document.querySelector("main");
    let filterCollection=document.querySelector(".filterCollection");
    main.addEventListener("click",event=>{
        let skills=event.target;
        let isFilterPresent=[...filterCollection.querySelectorAll(".filterTag > :nth-child(1)")].map(element=>element.innerText).includes(skills.innerText);
        if(!isFilterPresent&&skills.className!=="filter"&&skills.closest(".filter")){
            giveRelevantElements(skills,true).forEach(element=>{
                element.style.display="none";
            });
            filterCollection.style.visibility="visible";
            filterCollection.querySelector(".filterCollection > :nth-child(1)").append(createFilterTag(skills.innerText));
        }
    });
    filterCollection.addEventListener("click",(e)=>{
        if(!filterCollection.querySelector(":nth-child(1)").innerText){
            filterCollection.style.visibility="hidden";
            document.querySelectorAll(".card").forEach(element=>{
                element.style.display="flex";
            });
        }
    });
}