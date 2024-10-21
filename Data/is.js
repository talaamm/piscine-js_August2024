// is.num= function(b){
//        return 'number' == typeof b

// }
//     is.nan= function(l){
//         if (l!=l){
//             return true}else{return false}
//     }
    
// is.str= function(p){
//     if ('string' == typeof p){
//         return true
//     }; return false
// }
// is.bool= function(l){
//     if ('boolean' == typeof l){return true}else{return false}
// }
// is.undef= function(o){
//     if ('undefined' == typeof o){return true} ; return false
// } 
// is.def= function(k){
//     if ('undefined' != typeof k){ return true} ; return false
// } 
// is.arr= function(g){
//     return Array.isArray(g)
// }
// is.obj= function(t){
//     return t!== null && typeof t == 'object' && !Array.isArray(t) && 
// }
// is.fun= function(h){
//     if (typeof h == 'function'){return true} ; return false
// }
// is.truthy= function(i){
//     if (i == true){
//         return true
//     }
//     return false
// }
// is.falsy = function(l){
//     if (l== false) {
//         return true
//     }
//     return false
// }
const is = {};

is.num = function(a) {
    return typeof a === 'number';
};

is.nan = function(a) {
    return Number.isNaN(a);
};

is.str = function(a) {
    return typeof a === 'string';
};

is.bool = function(a) {
    return typeof a === 'boolean';
};

is.undef = function(a) {
    return typeof a === 'undefined';
};

is.def = function(a) {
    return typeof a !== 'undefined';
};

is.arr = function(a) {
    return Array.isArray(a);
};

is.fun = function(a) {
    return typeof a === 'function';
};

is.truthy = function(a) {
    return !!a;
};

is.falsy = function(a) {
    return !a;
};

is.obj = function(a) {
    return a !== null && typeof a === 'object' && !Array.isArray(a) && !(a instanceof Date);
};