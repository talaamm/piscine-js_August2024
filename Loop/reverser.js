// function reverse(str){
//     let res=''
//     for (let x of str){
//         res = x+ res
//     }
// if ('string' == typeof str){
// return res
// }else {
//   let  ar =[]
//     for (let x of res){
//        ar.push(Number(x))
//     }
//     return ar
// }
// }
function reverse(str){
    if (Array.isArray(str)){
        let a = []
        for (let ind = str.length-1 ; ind>=0 ; ind--){
a.push(str[ind])
        }
        return a
    }else{
        let res=''
   for (let x of str){
       res = x+ res
   }
   return res
    }
}