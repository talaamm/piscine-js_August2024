function addWeek(date) {
    let arr = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const input = new Date(date);
    const new1 = new Date('0001-01-01');
    const changetime = input.getTime() - new1.getTime();
    const changeday = Math.floor(changetime / (1000 * 60 * 60 * 24));
    let finalAnswer = changeday % 14;
    if (finalAnswer > 6){
        finalAnswer -= 7
        return  "second" + arr[finalAnswer]
    }
    return arr[finalAnswer];
  }
  function timeTravel({ date, hour, minute, second }){
    let newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    return newDate;
  }