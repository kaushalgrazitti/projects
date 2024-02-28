export default function(arr){
    let select=document.querySelector("select");
    arr.forEach((ele)=>{
        let option = document.createElement("option");
        option.innerText=ele;
        option.setAttribute("value",ele);
        select.append(option);
    });
}