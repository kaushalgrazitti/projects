fetch("https://jsonplaceholder.typicode.com/photos")
.then(res=>res.json())
.then(data=>{
    perform(data);
})
.catch(err=>console.log(err));

function perform(){
    let data=arguments[0];
    let container=document.getElementsByClassName("container")[0];
    data.slice(0,500).forEach(ele=>{
        let div=document.createElement('div');
        div.style.background=`url("${ele.url}") no-repeat center/100%`;
        container.append(div);
    });
}