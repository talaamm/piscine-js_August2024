//Create the following functions:
function citiesOnly(arrObj){
    /* array of objects
    [
  {
    city: 'Los Angeles',
    temperature: '  101 °F   ',
  },
  {
    city: 'San Francisco',
    temperature: ' 84 ° F   ',
  },
] 
  */
//returns an array of strings from the city key.
let res = []
res = arrObj.map(nameOfCity)
return res
}
function nameOfCity (obj){
    return obj['city']
}
/****************************************************************************************************************************** */
function upperCasingStates(arrStr){
//returns array the same as the argument, 
//except the first letter of every word must be capitalized.
let x = arrStr.map(capitalize)
return x
}
function capitalize(str){
  // let letter1  = str[0]
  // let RestOfstr = str.slice(1) //skip first letter
  // letter1 = letter1.toUpperCase()
  
  // return letter1 + RestOfstr
  let rr =[]
  let words = str.split(' ')  // [ 'new' , 'jersey']
  for (let i of words){ // i = new //i = jersey
    let letter1  = i[0]
    let RestOfstr = i.slice(1) //skip first letter
    letter1 = letter1.toUpperCase()
  rr.push( letter1 + RestOfstr )
  }
return rr.join(' ')
}
/****************************************************************************************************************************** */
function fahrenheitToCelsius(Arr_Str_Fah){
// returns an array of strings converted to celsius. Round down the result.
let res = Arr_Str_Fah.map(convert)
return res
}
function convert (Fah_Str){
  // Formula	(33.8°F − 32) × 5/9 = 1°C
//  if ( !Fah_Str.endsWith('°F')){Fah_Str += '°F' }
let fahNum = (Fah_Str.slice( 0, - 2  ))  // '10°F'
console.log(fahNum)
  let celsius = (Number(fahNum) -32) * (5/9)
  return (Math.floor(celsius)) + '°C'
}
/****************************************************************************************************************************** */
function tempForecasts(ArrObj){
  return ArrObj.map(formatStr)
  }
  function formatStr(obj){
    let pp = trim(obj)
    let temp = convert(pp['temperature'])
    let city = pp['city']
    let state = capitalize( pp['state'])
    let s = temp + 'elsius in ' + city + ', ' + state
    return s
    }
  /****************************************************************************************************************************** */

  function trimTemp(arrObj){

    let x = arrObj.map(trim)
    return x

  }

  function trim(obj){
let str = obj['temperature']
let r     
let x = r.split(' ');
let o = x.join('')
obj['temperature'] = o
return obj
  }