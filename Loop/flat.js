function flat(arr,num) {
    if (num == undefined) num = 1
    if  (num > 20) num = 20
    if (num == "infinity") num = 20
    let res = []
    for (let deep = 0;deep < num; deep++){
        if (res.length > 0) {
            arr = res
            res = []
        }
    for (let ar in arr) {
        if (Array.isArray(arr[ar])) {
            for (let i = 0; i < arr[ar].length; i++)
                    res.push(getnum(arr[ar],i))
        } else {
            res.push(arr[ar])
        }
    }
}
    return res
}

function getnum(ara, numb) {
    return ara[numb]
}