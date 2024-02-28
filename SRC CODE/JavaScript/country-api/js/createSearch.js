import fetchData from "./fetchData.js";
import insertCards from "./insertCards.js";

export default function createSearch(){
    let searchBar=document.querySelector(".search > input");
    searchBar.addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            searchBar.blur();
        }
    })
    let main=document.querySelector("main");
    searchBar.addEventListener("input",async (e)=>{
        let val=searchBar.value;
        if(val){
            let data=await fetchData("name/"+val);
            data[0].status!==404?insertCards(data):main.innerHTML="No results found!";
        }
        else insertCards(await fetchData());
    });
}