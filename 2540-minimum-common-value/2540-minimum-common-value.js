/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
       let common = Infinity;
    let i = 0, j = 0;
        while (i < nums1.length && j < nums2.length) {

   if (nums1[i] === nums2[j]) {
            common = nums1[i];
            break;
        } else if(nums1[i] <nums2[j]){
            i++
        }
            else
                j++
        }
       return common !== Infinity ? common : -1;

};