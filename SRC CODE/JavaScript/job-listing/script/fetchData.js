export default async function fetchData(){
    return await (await fetch("../assets/data.json")).json();
}