/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let mx = Math.max(...nums);
    let ans = 0;
    let l = 0;
    let r = 0;
    const n = nums.length;

    while (r < n) {
        k -= nums[r] === mx ? 1 : 0;
        r++;
        while (k === 0) {
            k += nums[l] === mx ? 1 : 0;
            l++;
        }
        ans += l;
    }

    return ans;
};