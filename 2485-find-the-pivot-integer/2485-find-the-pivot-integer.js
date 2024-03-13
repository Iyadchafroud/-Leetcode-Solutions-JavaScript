/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    for (let i = 1; i <= n; i++) {
        let leftSum = (i * (i + 1)) / 2; 
        let rightSum = (n * (n + 1)) / 2 - (i * (i - 1)) / 2;
        
   
        if (leftSum === rightSum)
            return i;
    }
    
    return -1
};