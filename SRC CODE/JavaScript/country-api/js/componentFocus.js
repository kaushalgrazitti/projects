export default function (){
    let main=document.querySelector("main");
    main.addEventListener("click",e=>{
        let component=e.target;
        if(component!==main){
            component=component.closest(".card");
            window.open(`./component.html?data=${encodeURIComponent(component.outerHTML)}`,"_self");
        }
    });
}