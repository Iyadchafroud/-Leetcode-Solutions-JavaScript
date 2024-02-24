/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
      if (n === 1) return 1;
    const arr = new Array(n + 1).fill(0);
    for (let [people, judge] of trust) {
        arr[people] --;
        arr[judge] ++;
    }
    
    return arr.findIndex(m => m + 1 === n);
};