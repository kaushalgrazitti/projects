import getLocalData from "../getLocalData.js";
import fillCategories from "./fillCategories.js";
import createCard from "./createCard.js";

export default function(){
    let main=document.querySelector("main");
    let items=getLocalData();
    console.log(items);
    let newMap=new Map();
    items.forEach((ele)=>{
        newMap.set(ele.category,true);
        main.append(createCard(ele));
    });
    fillCategories([...newMap.keys()]);
}