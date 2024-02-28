function provideRegions(data){
    let newMap=new Map();
    data.forEach(ele=>{
        newMap.set(ele.region,1);
    });
    return [...newMap.keys()].sort((a,b)=>a>b?1:-1);
}
export default provideRegions;