function invert(obj){
    let obj1 = {}
    for (let i in obj) {
        let value = obj[i]
       if (!obj.hasOwnProperty(i)) {
        continue
       }else{
        if (typeof value == 'number'){
            value = Number(value)
        }
        obj1[value] = i
       }
    }
return obj1
}