function adder(arr , val){
  
    return arr.reduce(plus , val === undefined ? 0 : val)
}
function plus(num1 , num2) {
    let res = num1 + num2
    return res
}
function sumOrMul(arr , val){
return arr.reduce(opreation , val === undefined ? 0 : val)
}
function opreation(num1, num2){
    
    if (num2 % 2 == 0) {
return num1 * num2
    }else {
        return num1 + num2
    }
}
function funcExec(arr , val){
    let r = arr.reduce(fval , val === undefined ? 0 : val)
    // if (typeof val == 'undefined'){
    //     return 0
    // }else {
    //     return val
    // }
    return r 
    }
    function fval(func , value){
     if ( typeof value == 'function')   {
        return value(func)
     }else{ return value}
    }