function dayOfTheYear(date) {
    if (date.getTime() == new Date('0001-01-01' ).getTime()){return 1}
    const date1 = new Date(date);
    const startOfYear = new Date(date1.getFullYear(), 0, 1);  
//     if( startOfYear> date.getFullYear()){
// return 1
//     }  
    const diffInMilliseconds = date1 - startOfYear;
    const dayOfYear = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)) +1 
    return dayOfYear;
  }