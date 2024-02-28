// Hoisting is supported in function declaration which is done below so we can call the funtion before it's declaration.
// console.log(add(200,304,5,5,383,22,443,2323));
// function add(){
//     let arr=[...arguments];
//     return arr.reduce((a,b)=>a+b);
// }

// Hoisting is not supported in function expression which is done below so we can't call the function before it's declaration.
// console.log(fun(200,304,5,5,383,22,443,2323));
// let fun=function add(){
//     let arr=[...arguments];
//     return arr.reduce((a,b)=>a+b);
// }

let fun=function add(){
    let arr=[...arguments];
    return arr.reduce((a,b)=>a+b);
}
console.log(fun(200,304,5,5,383,22,443,2323));

// add(200,304,5,5,383,22,443,2323);    Will give error as now add function is replaced by fun function.