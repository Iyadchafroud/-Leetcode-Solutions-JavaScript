/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
  let cnt1 = 0, cnt0 = 0;
    for (let a of s) {
        if (a === '1') cnt1++;
        else if (a === '0') cnt0++;
    }
    let ans = '1'.repeat(cnt1 - 1) + '0'.repeat(cnt0) + '1';
    return ans;  
};