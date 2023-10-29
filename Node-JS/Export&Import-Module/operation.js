// ==========some function export from here===========

const add = (a, b) =>{
    return a + b;
}
const sub = (a, b) =>{
    return a - b;
}
const mul = (a, b) =>{
    return a * b;
}
const div = (a, b) =>{
    return a / b;
}
const checkNumber = (num) =>{
    if(num >= 0){
        console.log(`positive and number is ${num}`);
    }else{
        console.log(`negative and number is ${num}`);
    }
}



module.exports = {add, sub, mul, div, checkNumber}