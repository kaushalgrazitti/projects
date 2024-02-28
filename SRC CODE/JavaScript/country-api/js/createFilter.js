import fetchData from "./fetchData.js";
import insertCards from "./insertCards.js";
import provideRegions from "./provideRegions.js";

function createFilter(data){
    let select=document.querySelector("select");
    select.addEventListener("change",async ()=>{
        insertCards(await fetchData(select.value));
    });
    let regions=provideRegions(data);
    regions.forEach((ele)=>{
        let option=document.createElement("option");
        option.innerText=ele;
        option.setAttribute("value","region/"+ele);
        select.append(option);
    });

}
export default createFilter;