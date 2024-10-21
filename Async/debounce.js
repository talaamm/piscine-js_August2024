function debounce(func , wait){
let timer 
return function(...args){ 
    clearTimeout(timer) 
timer = setTimeout( ()=>{func.apply(this , args)} , wait)
}}

function opDebounce(func, wait, options = {}) {
    let leading = options.leading || false;
    let timeout;
    let lastArgs; //Stores the last arguments passed.
    let result; //store result of func execution
    let lastThis;  // Stores the context (this) of the last call.
    let lastCallTime = 0;  //Tracks the timestamp of the last call.
  
    return function(...args) {
      const now = Date.now();
      const isInvoking = leading && (now - lastCallTime) > wait;
      lastArgs = args;
      lastThis = this;
      lastCallTime = now;
  
      if (timeout) {  //Any existing timeout is cleared to reset the debounce wait period.
        clearTimeout(timeout);
      }
  
      if (isInvoking) {
        result = func.apply(lastThis, lastArgs);
      } else {  //sets a timeout to call func after wait milliseconds.
        timeout = setTimeout(() => { if (!leading) { result = func.apply(lastThis, lastArgs) }
          timeout = null }, wait);
      }
  
      return result    }  }