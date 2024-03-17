import fetchData from "./fetchData.js";
import createCard from "./createCard.js";

export default async function(){
    let data=await fetchData();
    let main=document.querySelector("main");
    main.innerHTML=data.map(element=>createCard(element)).join("");
    let div=document.createElement("div");
    div.className="filterCollection";
    div.innerHTML=`
        <div>

        </div>
        <div>
            Clear
        </div>
    `;
    main.prepend(div);
}