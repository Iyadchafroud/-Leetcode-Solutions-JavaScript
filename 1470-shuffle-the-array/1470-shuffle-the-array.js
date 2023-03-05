/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const firstshink = nums.slice(0, n);
  const secondshink = nums.slice(n, nums.length);
  const reservedArray = [];
 
  for (let index = 0; index <  n; index++) {
   reservedArray.push(firstshink[index])
         reservedArray.push(secondshink[index])

      
  }

  return reservedArray;
};