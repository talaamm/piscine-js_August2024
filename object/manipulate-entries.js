function filterEntries(obj , f){
let objnew = {}
for (let i in obj) {
    if (f([i,obj[i]])) {
        objnew[i] = obj[i] 
    }
}
return  objnew
}
function mapEntries(obj,f){
let objnew = {}
for (let i in obj) {
    let arr = f([i,obj[i]])
 objnew[arr[0]] = arr[1]    
}
return objnew
}
function reduceEntries(obj,f,n = ''){
let objnew = n
for (let i in obj) {
if (objnew == i) {
    continue
}
objnew = f(objnew,[i,obj[i]]) 
}
return objnew 
}
function totalCalories(obj) {
    let objnew = 0;
    for (let [i, v] of Object.entries(obj)) {
      let total = (v / 100) * nutritionDB[i]['calories'];
      objnew += total;
    }
    return Number(objnew.toFixed(1))
  }
  function lowCarbs(obj){
    let objnew =  {}
    for (let [i,v] of Object.entries(obj)) {
        if (Math.round( (v / 100) *nutritionDB[i]['carbs']*1000)/1000 < 50 ) {
            objnew[i] = v
        } 
    }
    return objnew

  }
  function cartTotal(obj) {
    let objnew = {}
    for (let [i , v] of Object.entries(obj)){
        let objnew1 = {}
        let cal = Math.round( (v / 100) * nutritionDB[i]['calories']*1000)/1000
        let bro = Math.round( (v / 100) * nutritionDB[i]['protein']*1000)/1000
        let carp =Math.round( (v / 100) *nutritionDB[i]['carbs']*1000)/1000
        let sug = Math.round((v / 100) *nutritionDB[i]['sugar']*1000)/1000
        let fib = Math.round((v / 100) *nutritionDB[i]['fiber']*1000)/1000
        let fatt =Math.round( (v / 100) *nutritionDB[i]['fat']*1000)/1000
        objnew1 = {
          calories : cal,
          protein : bro,
          carbs : carp,
          sugar : sug,
          fiber : fib,
          fat : fatt,
        }
        objnew[i] = objnew1
    }
    return objnew 
  }
 