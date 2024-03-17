export default function (data) {
    let div = document.createElement("div");
    div.innerHTML = 
    `
        <div class="plan-name">
            ${data[0]}
        </div>
        <div class="plan-rate">
            ${data[1]}
        </div>
    `;
    return div;
}