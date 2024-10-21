function chunk(slice1,size) {
    if (slice1.length == 0) {
return slice1
    }
    if (size == 0) {
        return slice1
    }
    let arr = []
    while ( slice1.length > size) {
        arr.push(slice1.slice(0,size))
        slice1 = slice1.slice(size)
    }
    arr.push(slice1)
    return arr
}