export default function(content){
    let div=document.createElement("div");
    div.style.display="flex";
    div.style.flexDirection="column";
    div.innerHTML=`
    <div style="
        background: #B1B1B5 url(${content.imageURL}) no-repeat center/100%;
        height:185px;
    ">

    </div>
    <div style="
        display: flex;
        justify-content: space-between;
        padding:10px;
    ">
        <div>
            ${content.itemName}
        </div>
        <div>
            &#x20B9;${content.price}
        </div>
    </div>
    `;
    return div;   
}