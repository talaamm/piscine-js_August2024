function filterShortStateName(arrstr){
    return arrstr.filter(str7)
    }
    function str7(s){
    if (s.length < 7){
        return true
    }else {
        return false
    }
    }
    function filterStartVowel(arrstr){
    return arrstr.filter(filvol)
    }
    function filvol(s){
        if (s[0] == 'a' || s[0] == 'e' || s[0] == 'u' || s[0] == 'i' ||s[0] == 'o' ||s[0] == 'A' ||s[0] == 'E' ||s[0] == 'I' ||s[0] == 'O' ||s[0] == 'U' ){
            return true
        }else {
            return false
        }
    }
    function filter5Vowels(arrstr){
    return arrstr.filter(fil5vol)
    }
    function fil5vol(str){
        let con = 0
        for (let i of str) {
            if ('aeiouAEIOU'.includes(i) == true){
                con++
            }
        }
        if (con >= 5) {
            return true
        }else{
    return false
        } 
    }
    function filter1DistinctVowel(arrstr){
    return arrstr.filter(vole1)
    }
    function vole1(s){
     let i = new Set()
    let res = s.toLowerCase()
     for (let i1 of res) {
    if ('aeiou'.includes(i1)){
        i.add(i1)
    } 
     }
     return i.size === 1
    } 
    // function multiFilter(arrobj){
    // return arrobj.filter(bigfil)
    // }
    // function bigfil(obj){
    //    if (( obj['capital'].length >= 8)||(filvol(obj['name']) == false )||('aeiouAEIOU'.includes(obj['tag']) == true )|| (obj['region'] !== 'South')){
    //     return true
    //    } 
    //  return false 
    // }
    function multiFilter(arr) {
        arr = arr.filter((item) => {
            let capital = item.capital.length >= 8;
            let name = !/^[aeiou]/i.test(item.name);
            let tag = /[aeiou]/i.test(item.tag);
            let region = item.region !== "South";
            return capital && name && tag && region;
        });
        return arr;
    }