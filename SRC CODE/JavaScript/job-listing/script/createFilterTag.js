import giveRelevantElements from "./giveRelevantElements.js";
import filterCards from "./filterCards.js";

export default function(text){
    let content=`
        <div>
            ${text}
        </div>
        <div>
            &#10005;
        </div>
    `;
    let div=document.createElement("div");
    div.className="filterTag";
    div.innerHTML=content;
    div.querySelector(":nth-child(2)").addEventListener("click",e=>{
        div.remove();
        filterCards();
    });
    document.querySelector(".filterCollection > :nth-child(2)").addEventListener("click",e=>{
        document.querySelector(".filterCollection > :nth-child(1)").innerHTML="";
    });
    return div;
}