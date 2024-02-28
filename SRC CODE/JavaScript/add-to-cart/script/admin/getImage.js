export default function(obj){
    let imageElement = document.querySelector("#imageURL");
    var reader = new FileReader();
    imageElement.addEventListener("change", () => {
        if (imageElement.files[0]) {
            reader.onload = function (onLoadEvent) {
                obj['imageURL'] = onLoadEvent.target.result;
            };
            reader.readAsDataURL(imageElement.files[0]);
        }
    });
}