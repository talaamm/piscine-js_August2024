function sums(n) {
    if (n === 0 || n===1) {
        // result.push(prefix);
        return [];
    }else if( n===2){
        return [[1,1]]
    }
        function findPartitions(number, prefix) {
            if (number === 0 && prefix.length > 1) {
                result.push(prefix);
                return;
            }
            
            for (let i = 1; i <= number; i++) {
                // Ensure the next number is not smaller than the last in prefix
                if (prefix.length === 0 || i >= prefix[prefix.length - 1]) {
                    findPartitions(number - i, prefix.concat(i));
                }
            }
        }
        
        let result = [];
        findPartitions(n, []);
        return result;
    }
    
   // console.log(sums(4)); // [ [1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2] ]
    
//console.log(sums(4)); // [ [1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2] ]
