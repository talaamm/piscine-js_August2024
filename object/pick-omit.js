function pick(obj , arr) {
    let objn = {}
    if (typeof arr == "string") {
        if (!(arr in obj)){
    return {}
        }
        objn[arr] = obj[arr]
        return objn 
    }else if (Array.isArray(arr)){
    for (let i of arr) {
        if (!obj.hasOwnProperty(i)) {
            continue
        } 
        objn[i] = obj[i] 
    }
    }
    return objn
    }
    function omit(obj,arr){
    let obj1 = pick(obj,arr)
    const result = Object.fromEntries(
        Object.entries(obj).filter(([key]) => !(key in obj1))
      );
      return result
    }

    /**
     To check if a key exists in an object in JavaScript, you can use one of the following methods:

1. Using the in Operator
The in operator checks if a property exists in an object (including properties in the prototype chain).

const obj = {
  a: 1,
  b: 2,
  c: 3
};
console.log('a' in obj); // true
console.log('d' in obj); // false


2. Using hasOwnProperty()
The hasOwnProperty() method checks if a property exists directly on the object (not in the prototype chain).
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('d')); // false


3. Using Object.hasOwn()
In modern JavaScript, Object.hasOwn() is similar to hasOwnProperty() but works on objects directly rather than needing to call the method on the object.

console.log(Object.hasOwn(obj, 'a')); // true
console.log(Object.hasOwn(obj, 'd')); // false


4. Using undefined Check (less recommended)
You can also check if a key is undefined, but this method can be unreliable if the key exists but its value is actually undefined.
console.log(obj.a !== undefined); // true
console.log(obj.d !== undefined); // false

Recommended Method
The in operator or Object.hasOwn() are generally preferred for checking if a key exists in an object, as they provide clarity and accuracy.

if ('key' in obj) {
  // key exists in the object
}

if (Object.hasOwn(obj, 'key')) {
  // key exists directly on the object (not in the prototype chain)
}
These methods ensure that you accurately detect whether a key is present in the object.
     */