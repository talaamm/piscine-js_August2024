function floor(num) {
    if (num >= 0) {
        let result = 0;
        while (result <= num) {
            result += 1;
        }
        return result - 1;
    } else {
        let result = -1;
        while (result > num) {
            result -= 1;
        }
        return result;
    }
}

function ceil(num) {
    if (num >= 0) {
        let result = 0;
        while (result < num) {
            result += 1;
        }
        return result;
    } else {
        let result = 0;
        while (result > num) {
            result -= 1;
        }
        return result +1;
    }
}

function trunc(num) {
   // return num >= 0 ? floor(num) : ceil(num)
   let fff = 68719475700
   let f= false
   if (num >fff){
num -= fff
f = true
   }
   if (num >= 0){ 
   if (!f) {
   return  floor(num) 
}else{ 
    let x = floor(num) 
   return  x + fff }
   }else{
    if (!f) {
        return  ceil(num) 
     }else{ 
         let x = ceil(num) 
        return  x + fff }
     //return ceil(num) 

   }
}

function round(num) {
    return num >= 0 ? floor(num + 0.5) : ceil(num - 0.5);
}