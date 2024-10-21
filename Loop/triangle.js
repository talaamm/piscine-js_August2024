function triangle(s , i) {
    let arr = ''
    for (let x = i; x>= 0; x-- ){
        for (let o = i-x; o>= 1; o--){
            arr += s
        }
        arr+= '\n'
    }
    return arr.slice(1,arr.length-1)
}