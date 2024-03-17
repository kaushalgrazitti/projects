export default function (data) {
    const {logo,company,featured,position,postedAt,contract,location,role,level,languages,tools} = data;
    let content = `
    <div class="card" ${featured?"style='border-left:5px solid var(--desaturated-dark-cyan);'":""}>
        <div class="image-content">
            <div class="image" style="background: url(../assets${logo.slice(1)}) no-repeat center/100%;">

            </div>
            <div class="content">
                <div class="name-new-featured">
                    <p class="name">
                        ${company}
                    </p>
                    <div class="new-featured">
                        <p class="new" style="display: ${data["new"]?"block":"none"}">
                            NEW!
                        </p>
                        <p class="featured" style="display: ${featured?"block":"none"}">
                            FEATURED
                        </p>
                    </div>
                </div>
                <p>
                    ${position}
                </p>
                <div>
                    <ul>
                        <li>
                            ${postedAt}
                        </li>
                        <li>
                            ${contract}
                        </li>
                        <li>
                            ${location}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="filter">
            <div>
                ${role}
            </div>
            <div>
                ${level}
            </div>
            ${[...languages,...tools].map(element=>`<div>${element}</div>`).join("")}
        </div>
    </div>
    `
    return content;
}