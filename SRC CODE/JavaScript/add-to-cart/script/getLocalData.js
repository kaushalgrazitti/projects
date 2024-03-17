export default function (param){
    let items = JSON.parse(localStorage.getItem(param));
    if (!items)
        items = [];
    return items;
}