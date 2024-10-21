// function forEach( arr,func ){

//     for (let r =0 ; r<arr.legnth; r++){
//    func(arr[r] ,r , arr)
// }

// }

function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i], i, array);
    }
}