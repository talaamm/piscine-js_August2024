function split(str , sep){
    if (str.length == 0){
        return [str]
    }
    let words = []
    if (sep.length == 0){
        for (let oo of str) {
            words.push(oo)
        }
        return words
    }
    if (!str.includes(sep)){ 
        return [str]}
    while (str.includes(sep)){
        let ind = str.indexOf(sep)
    words.push(str.slice(0,ind))
    str = str.slice(ind+ sep.length)
    }
    words.push(str)
    return words
    }
    function join(str, sep){
        let res =""
        for  (let i of str){
    res += i + sep 
        }
        res = res.slice(0,res.length-sep.length)
    return res
    }