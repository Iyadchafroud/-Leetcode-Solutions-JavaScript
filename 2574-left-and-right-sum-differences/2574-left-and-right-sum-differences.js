/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
      const n = nums.length;
  
  // Compute the prefix sum of the input array
  const leftSum = nums.reduce((acc, val) => {
    const sum = (acc.length > 0 ? acc[acc.length - 1] : 0) + val;
    acc.push(sum);
    return acc;
  }, []);

  // Compute the suffix sum of the input array
  const rightSum = nums.reduceRight((acc, val) => {
    const sum = (acc.length > 0 ? acc[0] : 0) + val;
    acc.unshift(sum);
    return acc;
  }, []);

  // Compute the absolute differences
  const answer = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    answer[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return answer;
};