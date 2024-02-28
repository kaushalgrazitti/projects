import getImage from "./getImage.js";
import getLocalData from "../getLocalData.js";

export default function () {
    let form = document.querySelector(".content");
    let obj = { 
        category: "", 
        itemName: "", 
        price: "", 
        imageURL: "" 
    };
    getImage(obj);

    form.addEventListener("submit", (e) => {
        let items=getLocalData();
        for(let key in obj){
            if(key!=="imageURL")
                obj[key]=form.querySelector(`#${key}`).value;
        }
        items.push(obj);
        localStorage.setItem("adminItems",JSON.stringify(items));
        alert("Data added");
    });
}