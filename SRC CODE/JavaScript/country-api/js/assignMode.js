export default function () {
    let container = document.querySelector(".container");
    let modeElement = document.querySelector(".mode");
    let modeObj = JSON.parse(localStorage.getItem("modeObj"));
    modeObj??(modeObj={modeList:["Light","Dark"],modeIndex:0});
    let { modeList, modeIndex } = modeObj;
    if (modeIndex) container.classList.add(modeList[modeIndex]);
    modeElement.innerText = modeList[Number(!modeIndex)] + " Mode";
    modeElement.addEventListener("click", (e) => {
        container.classList.toggle("Dark");
        modeElement.innerText = modeList[modeIndex] + " Mode";
        modeIndex = Number(!modeIndex);
        localStorage.setItem("modeObj", JSON.stringify({ modeList, modeIndex }));
    });
}
