function sign(n){
    if ( Number(n)>0){
        return 1
    }
    if (n==0){
        return 0
    }
    return -1
    }

    function sameSign(a,b){
        if (a*b > 0 ){
            return true
        }else if (a == 0 && b==0){return true}else {return false}
    }