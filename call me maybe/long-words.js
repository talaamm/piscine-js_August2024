function longWords(elememts){
    return elememts.every(check)
}
function check(element) {
    if (element.length >= 5){
        return true
    }else {
        false
    }
}
function oneLongWord(elememts){
return elememts.some(chcek1)
}
function chcek1(element) {
    if (typeof element == 'string' && element.length >= 10) {
return true
    }else {
        return false
    }
}
function noLongWords(elememts){
return elememts.every(chcek2)
}
function chcek2(element){
    if  (!(typeof element == 'string'&& element.length >= 7) ){
        return true
    }else {
        return false
    }
}