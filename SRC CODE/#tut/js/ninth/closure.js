function parent(){
    let data="Hello";
    return function child(){
        return data+" world!";
    }
}
console.log(parent()());