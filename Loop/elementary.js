function multiply(a,b){
    let res=0 ; let A =a ; let B = b

    if (a < 0){ a=-a}
    if (b < 0){b =-b}

    for (let i = 1 ; i<= b ; i++){
        res += a
    }
    if ((A< 0 && B > 0)|| (A> 0 && B< 0)){ return -res }
    return res
}

function divide(a,b){
    let res=0 ; let A =a ; let B = b
    if (a < 0){ a=-a}
    if (b < 0){b =-b}
    if (b===0){return 0}
    for (let i = a ; i>= b ; i-=b ){
        res++
    }
    if ((A< 0 && B > 0)|| (A> 0 && B< 0)){ return -res }
    return res
}

function modulo(a,b){
    if ((multiply(a,b) > 0 )&& (a > 0)){
        if (b > a) {
            return a
        }
    }
let res = divide(a,b)
return a - (multiply(res,b))
}