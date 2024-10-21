function slice(input, start, end = input.length) {
    let res = ''
    if (start < 0){ start = input.length + start }
    if (end < 0) { end = input.length + end }

    for (let i = start; i< end; i++){
       res+= input[i]
    }
    if (typeof input === 'string'){ return res
    }else{
       let i
       let ar = []
       for (i of res) {
           ar.push(Number(i))
       }
        return ar
    }
     }