function isValid(date) {
    if (new Date(date).toString() === "Invalid Date") {
        return false;
    }
    if (!(date instanceof Date) && typeof date !== "number") {
        return false;
    }
    return true;
}
  function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 > date2;
  }
  
  function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 < date2;
  }
  
  function isFuture(date) {
    const now = new Date();
    return isValid(date) && date > now;
  }
  
  function isPast(date) {
    const now = new Date();
    return isValid(date) && date < now;
  }