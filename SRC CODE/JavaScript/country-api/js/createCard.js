function createCard(obj){
    let div=document.createElement("div");
    div.innerHTML=`
    <div class="card" style="
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 270px;
        padding: 20px;
        border-radius:10px;
    ">
        <div style="
            background: url(${obj.flags.svg}) no-repeat center/contain;
            width:100%;
            height:100%;
        ">

        </div>
        <div>
            <h3>${obj.name.common}</h3>
            <p>Population:${obj.population}</p>
            <p>Region:${obj.region}</p>
            <p>Capital:${obj.capital?obj.capital[0]:"unknown"}</p>
        </div>
    </div>
    `;
    return div.children[0];
}

export default createCard;