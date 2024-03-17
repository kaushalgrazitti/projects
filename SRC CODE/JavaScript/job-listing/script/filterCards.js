export default function(){
    let filterSkills=[...document.querySelectorAll(".filterTag")].map(element=>element.querySelector(":nth-child(1)").innerText);
    [...document.querySelectorAll(".card")].filter(element=>{
        let allSkills=[...element.querySelectorAll(".filter > div")].map(subEle=>subEle.innerText.trim());
        return filterSkills.every(subEle=>allSkills.includes(subEle));
    }).forEach(element=>element.style.display="flex");
}