// function flow(arrFuncs){
// for (let k = 0 ; k< arrFuncs.length ; k++){



// }
// }

function flow(arr) {
    return function (...args) {
        if (args.length > 1) {
            args = [arr[0](...args)];
        }
        return arr.reduce((acc, fn) => fn(acc), args[0]);
    };
}

/*

Explanation
Outer Function (flow):

The flow function takes an array of functions (arr) as its parameter.
It returns a new function that can accept any number of arguments (...args).
Inner Function (Returned Function):

The returned function is what will be used to execute the sequence of functions in arr.
Handling Multiple Arguments:

if (args.length > 1):
This check determines if more than one argument is passed to the returned function.
If true, it applies the first function in the arr to all the arguments using arr[0](...args).
The result is then wrapped in an array and assigned back to args.
This ensures that only a single value is passed to the remaining functions in the array.
Reducing the Functions:

return arr.reduce((acc, fn) => fn(acc), args[0]);:
The reduce method iterates over the arr array, applying each function to the accumulated result (acc).
It starts with args[0], which is either the original argument (if there was only one) or the result of applying the first function in arr.
For each function fn in arr, it passes the current accumulated value (acc) to fn and updates acc with the result.
The final result after applying all functions is returned.
*/