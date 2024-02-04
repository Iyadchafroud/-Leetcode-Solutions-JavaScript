/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const array= [...new Set(nums)]
   if( array.length=== nums.length)return false
    return true
};