let h1=document.querySelector("h1");

h1.addEventListener('test',function(e){
    h1.textContent=e.detail.number;
    h1.style.color=e.detail.color;
});

function numberChange(number,color){
    let testEvent = new CustomEvent("test",{detail:{
        number:number,
        color:color
    }});
    h1.dispatchEvent(testEvent);
}