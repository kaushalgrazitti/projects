import getLocalData from "../getLocalData.js";
import fillCategories from "./fillCategories.js";
import createCard from "./createCard.js";

let cardCreationLoop;
export default function(){
    let items=getLocalData("adminItems");
    let newMap=new Map();
    let main=document.querySelector("main");
    cardCreationLoop=()=>{
        main.innerHTML="";
        items.forEach((ele)=>{
            newMap.set(ele.category,true);
            main.append(createCard(ele));
        });
    }
    cardCreationLoop();
    fillCategories([...newMap.keys()]);
}
export {cardCreationLoop};