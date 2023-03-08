/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  
 let Output = [];


 nums.reduce( (accumulator, currentValue) => {
  
   Output.push( accumulator + currentValue)
   
  return accumulator + currentValue

},
0)

return Output  
};