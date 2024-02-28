import createCard from "./createCard.js";

function insertCards(data){
    let main=document.querySelector("main");
    main.innerHTML="";
    data.forEach((ele)=>{
        let card=createCard(ele);
        main.append(card);
    });
}

export default insertCards;