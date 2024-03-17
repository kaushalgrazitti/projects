import getImage from "./getImage.js";
import getLocalData from "../getLocalData.js";

export default function () {
    let form = document.querySelector(".content");
    let uniqueId=getLocalData("uniqueId")[0];
    let obj = { 
        id:uniqueId?uniqueId:1,
        category: "", 
        itemName: "", 
        price: "", 
        imageURL: "" 
    };
    getImage(obj);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let items=getLocalData("adminItems");
        for(let key in obj){
            if(key!=="imageURL"&&key!="id")
                obj[key]=form.querySelector(`#${key}`).value;
        }
        obj.price=+obj.price;
        items.push(obj);
        localStorage.setItem("adminItems",JSON.stringify(items));
        obj.id++;
        localStorage.setItem("uniqueId",JSON.stringify([obj.id]));
        alert("Data added");
    });
}