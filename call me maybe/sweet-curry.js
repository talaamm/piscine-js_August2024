function mult2(n){
    return function (y) {
       return y*n
    }
}

function add3(p){
    return function(o){
        return function(i){
            return p+i+o
        }
    }

}

function sub4(a){
   return function (i){
    return function(z){
        return function (nb){
            return a-i-z-nb
        }
    }
   }
}