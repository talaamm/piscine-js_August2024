function isFriday(date) {
    const day = date.getDay()
    return day===5 ? true : false
}
function isWeekend(date) {
    // let i =date.getTime()
    // const changeday = Math.floor(i / (1000 * 60 * 60 * 24));
    // let finalAnswer = changeday % 7;
    // if (finalAnswer == 5) {
    //     return true
    // }else {
    //     return false 
    // }
    const day = date.getDay()
    return day===6 || day===7 ? true : false
}
function isLeapYear(date){
   let i = date.getFullYear()
   if (i % 4 == 0 || (i % 400 == 0 && i % 100 == 0)) {
    return true
   }
   return false
}
function isLastDayOfMonth(date){
let year = date.getFullYear();
let month = date.getMonth();
let lastDay = new Date(year, month + 1, 0).getDate(); // The 0th day of the next month is the last day of the current month
return date.getDate() === lastDay;
}