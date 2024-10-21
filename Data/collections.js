// function arrToSet(a){
// return new Set(a)
// }
// function arrToStr(a){
// return a.join('')
// }
// function setToArr(a){
// return [...a]
// }
// function setToStr(a){
// return [...a].join('')
// }
// function strToArr(a){
// return [a]
// }
// function strToSet(a){
// return new Set(a)
// }
// function mapToObj(a){
// return Object.fromEntries(a)
// }
// function objToArr(a){
// return Object.entries(a)
// }
// function objToMap(a){
// return new Map(Object.entries(a))
// }
// function arrToObj(array){
// return  Object.fromEntries(array)
// }
// function strToObj(a){
// return Object.fromEntries([a])
// }
// function superTypeOf(value) {
//     if (value === null) return 'null';
//     if (Array.isArray(value)) return 'Array';
//     if (value instanceof Set) return 'Set';
//     if (value instanceof Map) return 'Map';
//     if (typeof value === 'object') return 'Object';
//     if (typeof value === 'string') return 'String';
//     if (typeof value === 'number') return 'Number';
//     if (typeof value === 'function') return 'Function';
//     if (typeof value === 'undefined') return 'undefined';
//     return typeof value;
// }
function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    return Array.from(set).join('');
}

function strToArr(str) {
    return Array.from(str);
}

function strToSet(str) {
    return new Set(str);
}

function mapToObj(map) {
    const obj = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}


function objToArr(obj) {
    return Object.values(obj);
}


function objToMap(obj) {
    return new Map(Object.entries(obj));
}


function arrToObj(arr) {
    return arr.reduce((acc, cur, idx) => {
        acc[idx] = cur;
        return acc;
    }, {});
}


function strToObj(str) {
    return Array.from(str).reduce((acc, cur, idx) => {
        acc[idx] = cur;
        return acc;
    }, {});
}


function superTypeOf(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'Array';
    if (value instanceof Set) return 'Set';
    if (value instanceof Map) return 'Map';
    if (typeof value === 'object') return 'Object';
    if (typeof value === 'string') return 'String';
    if (typeof value === 'number') return 'Number';
    if (typeof value === 'function') return 'Function';
    if (typeof value === 'undefined') return 'undefined';
    return typeof value;
}