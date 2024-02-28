let rps=[2,1,0];
let result=[document.querySelector(".losses > span"),document.querySelector(".draws > span"),document.querySelector(".wins > span")];
let hoverProp=document.querySelectorAll(".you > .rock-paper-scissors > div");
let rockPaperScissors=document.querySelector(".rock-paper-scissors");

addHover();
rockPaperScissors.addEventListener("click",handleEvent);

function handleEvent(e){
    let userChoiceElement=e.target;
    let userChoiceId=userChoiceElement.id;
    let cpuChoiceElement;
    let cpuChoiceId;
    if(userChoiceId){
        rockPaperScissors.removeEventListener("click",handleEvent);
        removeHover();
        mouseOutFunction(e);
        let userChoiceIdNo=+userChoiceId[userChoiceId.length-1];
        let sumConstant=findMod(userChoiceIdNo+2,3);
        let cpuChoiceIdNo=(Math.floor(Math.random()*3)+Date.now())%3;
        cpuChoiceElement=document.querySelector(`.cpu > .rock-paper-scissors > :nth-child(${cpuChoiceIdNo+1})`);
        cpuChoiceId="cpu-"+cpuChoiceIdNo;
        let resultSpan=result[findMod(rps[cpuChoiceIdNo]+sumConstant,3)];
        setTimeout(()=>{
            resultSpan.innerText=+resultSpan.innerText+1;
            toggleAnimationClass();
            addHover();
            rockPaperScissors.addEventListener("click",handleEvent);
        },1300);
        toggleAnimationClass();
    }
    function toggleAnimationClass(){
        userChoiceElement.classList.toggle("you-center-animation");
        cpuChoiceElement.classList.toggle("cpu-center-animation");
        document.querySelectorAll(".rock-paper-scissors > div").forEach((ele)=>{
            if(!(ele.id===cpuChoiceId||ele.id===userChoiceId)){
                if(ele.style.opacity===""||+ele.style.opacity===1){
                    ele.style.opacity=0;
                }
                else{
                    ele.style.opacity=1;
                }
            }
        });
    }
}

function addHover(){
    hoverProp.forEach((ele)=>{
        ele.addEventListener("mouseover",mouseOverFunction);
        ele.addEventListener("mouseout",mouseOutFunction);
    });
}

function removeHover(){
    hoverProp.forEach((ele)=>{
        ele.removeEventListener("mouseover",mouseOverFunction);
        ele.removeEventListener("mouseout",mouseOutFunction);
    });
}

function mouseOverFunction(e){
    e.target.style.backgroundColor="rgba(0,0,0,0.5)";
    e.target.style.borderRadius="5px";
    e.target.style.scale="-1.2 1.2";
}

function mouseOutFunction(e){
    e.target.style.backgroundColor="";
    e.target.style.borderRadius="";
    e.target.style.scale="";
}

function findMod(num,divisor){
    return (num%divisor+divisor)%divisor;
}