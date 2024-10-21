function filter(obj , func){
    let objn = {}
    for (let i in obj){
        if (func(obj[i]) == 'true'){
            objn[i] = obj[i]
        }
    }
return objn
}

function noniTheBest( el) {
    if (el < 25){
return true
    }
    return false
}

const ages = {
    'ibr' :26,
    'noor' : 20,
    'tala' : 19,
    'subhi' : 55,
    'fifi' : 23,
    'mosa' : 854200000000000,
}

console.log( filter (ages , noniTheBest))
