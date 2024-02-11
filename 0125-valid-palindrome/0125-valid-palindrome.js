/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length===0)return true
    
     const filterS= s.toLowerCase().replace(/[^0-9a-z]/g, "")
let left=0;
    let right=filterS.length-1
    while(left<right){
        if(filterS[left]!==filterS[right])return false
        left++
        right--
        
    }
    return true

     
};