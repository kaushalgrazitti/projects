let imgx=document.querySelector(".img");
let mainboxes=document.querySelectorAll(".mainbox");

imgx.addEventListener("dragstart",(e)=>{

});
imgx.addEventListener("dragend",(e)=>{

});

mainboxes.forEach(ele=>{
    ele.addEventListener("dragover",(e)=>{
        e.preventDefault();
    });
    ele.addEventListener("dragenter",(e)=>{

    });
    ele.addEventListener("dragleave",(e)=>{
    
    });
    ele.addEventListener("drop",(e)=>{
        e.preventDefault();
        e.target.append(imgx);
    });
});