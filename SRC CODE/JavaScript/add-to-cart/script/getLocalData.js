export default function (){
    let items = JSON.parse(localStorage.getItem("adminItems"));
    if (!items)
        items = [];
    return items;
}