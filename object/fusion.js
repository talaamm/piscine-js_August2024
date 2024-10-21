function fusion(obj1, obj2) {
    let obj = {};
    for (let i in obj1) {
        if (obj2.hasOwnProperty(i)) {
            if (typeof obj1[i] !== typeof obj2[i]) {
                obj[i] = obj2[i];
            } else if (Array.isArray(obj1[i])) {
                obj[i] = obj1[i].concat(obj2[i]);
            } else if (typeof obj1[i] === 'string') {
                obj[i] = obj1[i] + ' ' + obj2[i];
            } else if (typeof obj1[i] === 'number') {
                obj[i] = obj1[i] + obj2[i];
            } else if (obj1[i] instanceof Object) {
                obj[i] = fusion(obj1[i], obj2[i]);
            }
        } else {
            obj[i] = obj1[i];
        }
    }
    for (let key in obj2) {
        if (!obj.hasOwnProperty(key)) {
            obj[key] = obj2[key];
        }
    }
    return obj;
}
