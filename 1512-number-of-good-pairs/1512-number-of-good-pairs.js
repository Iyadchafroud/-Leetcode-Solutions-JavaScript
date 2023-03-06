/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
      let k = 0;

  let Output = 0;
  let curr = nums[0];
  while (k < nums.length - 1) {
    //  console.log(k);

    for (let index = k + 1; index < nums.length; index++) {
      if (curr === nums[index]) {

        Output += 1;
      }
    }

    k = k + 1;

    curr = nums[k];
  }
  return Output
};