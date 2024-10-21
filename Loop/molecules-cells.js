function DNA(str){
let res = ''
for (let x of str){
    if (x==='C'){
        res +='G'
    }else if (x=== 'G'){
        res+= 'C'
    }else if ( x==='A'){
        res += 'T'
    }else if(x=== 'U'){
        res += 'A'
    }
}
return res
}
function RNA(str){
    let res = ''
    for (let x of str){
        if (x==='G'){
            res +='C'
        }else if (x=== 'C'){
            res+= 'G'
        }else if ( x==='T'){
            res += 'A'
        }else if(x=== 'A'){
            res += 'U'
        }
    }
    return res
}