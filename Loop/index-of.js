function indexOf(arr,value , start=0){
    for (let ind = start ; ind< arr.length ; ind++){
        if (arr[ind] === value){
return ind
        } }
    return -1
}

function lastIndexOf(arr, value , end = arr.length-1){
    for( let i= end ; i>=0 ; i--){
if( arr[i]===value){return i}
    }
    return -1
}

function includes(arr, v){
    for (let vv of arr){
        if (vv===v){return true}
    }
    return false
}