function nasa(n){
    let res = ''
    for (let p = 1 ; p<= n ; p++){
        if (p%3 == 0 && p%5==0){
            res+= 'NASA '
        }else   if (p%3==0){
            res+= 'NA '
        }else if (p%5==0){
            res += 'SA '
        }else{
            res += p + ' '
        }
    }
return res.slice(0, res.length-1)
}