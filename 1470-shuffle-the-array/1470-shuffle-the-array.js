/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const firstshink = nums.slice(0, n);
  const secondshink = nums.slice(n, nums.length);
  const reservedArray = [];
  let ind = 0;
  let j = 0;
  for (let index = 0; index < 2 * n; index++) {
    if (index % 2 === 0) {
      reservedArray[index] = firstshink[ind];
      ind = ind + 1;
    } else {
      reservedArray[index] = secondshink[j];
      j = j + 1;
    }
  }

  return reservedArray;
};