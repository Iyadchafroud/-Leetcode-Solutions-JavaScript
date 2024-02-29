/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);

    // Step 2: Initialize the result array to store subarrays meeting the criteria.
    let result = [];

    // Step 3: Iterate through the sorted array with a step of 3.
    for (let i = 2; i < nums.length; i += 3) {
        // Step 4: Check if the difference between the maximum and minimum elements in the current subarray is within the allowed limit (k).
        if (nums[i] - nums[i - 2] > k) {
            // If not, return an empty array as it's not possible to meet the criteria.
            return [];
        }

        // Step 5: Push the current subarray into the result array.
        result.push([nums[i - 2], nums[i - 1], nums[i]]);
    }

    // Step 6: Return the final result array containing subarrays meeting the criteria.
    return result;
};