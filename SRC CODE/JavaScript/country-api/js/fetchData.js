async function fetchData(filterPart="all"){
    let URL="https://restcountries.com/v3.1/"+filterPart;
    let data = (await(await fetch(URL)).json());
    return Array.isArray(data)?data.sort((a,b)=>a.name.common>b.name.common?1:-1):[data];
}
export default fetchData;