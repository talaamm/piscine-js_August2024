function findExpression(number){
    let x = 1
    let res = '1'
        if ((number/2) % 2=== 0){
    while (x<(number/2)){
    x = x*2
    res += ' ' + mul2
    }
    x = x/2
    res = res.slice(0,res.length-3)
    while (x< (number/2)){
        x+= 4
        res += ' ' + add4
    }
    x-=4
    res = res.slice(0,res.length-3)
    
    if (x<= (number/2) ){
        x= x *2
    res += ' ' + mul2
    }
    
    while (x!== number){
        x+= 4
        res+=' ' + add4
    if (x > number){
        return 'undefined'
    }
    if (x<number){  x+= 4
        res+=' ' + add4 }
        if (x > number){
        return 'undefined'
    }
    
    return res
    } 
}else if ((number/2)%2===1){
while((number/2)>=x){
    x+= 4
    res+= ' ' + add4
}

if (x> (number/2)){
    x-=4
res = res.slice(0,res.length-3)
}


x= x*2
res += ' ' + mul2


if (x===number){
     
    return  res
}else if (x<number){
    while (x< number){
        x+= 4
        res += ' ' + add4
   
    }    
    
    return res

}else{return undefined}
}

}

const add4 = '+4'
const mul2 = '*2'