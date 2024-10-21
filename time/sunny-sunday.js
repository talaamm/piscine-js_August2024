function sunnySunday(date) {
    // Calculate the total number of days since '01/01/0001'
    const startDate = new Date('0001-01-01');
    const diffInMilliseconds = date - startDate;
    const daysElapsed = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const dayOfSixDayWeek = daysElapsed % 6;
    let arr = [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ];
    return arr[dayOfSixDayWeek];
}
console.log(sunnySunday(new Date('0001-01-01')))