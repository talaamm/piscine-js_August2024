function countLeapYears(date){
    let year = date.getFullYear()
    const leapYears = Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)
    return leapYears -1 <0 ? 0 : leapYears-1
}