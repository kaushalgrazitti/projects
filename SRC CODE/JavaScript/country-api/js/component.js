import assignMode from "./assignMode.js";

function driver(){
    let main=document.querySelector("main");
    const urlParams=new URLSearchParams(window.location.search);
    main.innerHTML=urlParams.get("data");
    let card=main.querySelector(".card");
    let cardFirstChild=card.querySelector(".card > :nth-child(1)");
    let cardBackground=cardFirstChild.style.background;
    card.removeAttribute("style");
    cardFirstChild.removeAttribute("style");
    card.querySelector(".card > :nth-child(2)").removeAttribute("style");
    cardFirstChild.style.background=cardBackground;
}

driver();
assignMode();