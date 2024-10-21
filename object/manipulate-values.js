function filterValues(obj, f) {
    let objnew = {};
    for (let i in obj) {
      if (f(obj[i]) === true) {
        objnew[i] = obj[i];
      }
    }
    return objnew;
  }
  function mapValues(obj, f) {
    let objnew = {};
    for (let i in obj) {
      objnew[i] = f(obj[i]);
    }
    return objnew;
  }
  function reduceValues(obj, f, n = 0) {
    let objnew = n;
  
    for (let i in obj) {
      if (i === 0 || i === 1) {
        continue;
      }
      objnew = f(objnew, obj[i]);
    }
    return objnew;
  }