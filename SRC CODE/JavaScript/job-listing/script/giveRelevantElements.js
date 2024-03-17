export default function(skills,negate){
    let card=[...document.querySelectorAll(".card")];
    return card.filter(element=>negate^[...element.querySelectorAll(".filter > div")].map(subElement=>subElement.innerText).includes(skills.innerText));
}