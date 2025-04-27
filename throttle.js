function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if(!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastRan = setTimeout(() => {
                if(Date.now() - lastRan >= limit) {
                    func(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}