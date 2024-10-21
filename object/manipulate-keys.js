function filterKeys(obj, f) {
    let objnew = {};
    for (let i in obj) {
      if (f(i) === true) {
        objnew[i] = obj[i];
      }
    }
    return objnew;
  }
  function mapKeys(obj, f) {
    let objnew = {};
    for (let i in obj) {
      objnew[f(i)] = obj[i];
    }
    return objnew;
  }
  function reduceKeys(obj, f, n =Object.keys(obj)[0]) {
    let objnew = n;
  
    for (let i in obj) {
        if (objnew == i){
            continue
        }
      objnew = f(objnew,i);
    }
    return objnew;
  }