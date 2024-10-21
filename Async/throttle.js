function throttle(fn, wait) {
    let lastExecuted = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastExecuted >= wait) {
        lastExecuted = now;
        fn.apply(this, args)}}}
  function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let last = 0;
    let timer = null;
    return function () {
        const now = +new Date();
        if (!last && leading === false) {
            last = now;
        }
        if (now - last > delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            fn.apply(this, arguments);
            last = now;
        } else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                last = +new Date();
                timer = null;
            }, delay)}}}