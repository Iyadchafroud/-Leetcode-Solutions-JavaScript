/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
  let sum =0
  for (const [index, num] of nums.entries()) {
    if(nums.length%(index+1)===0){
      console.log(nums.length,index+1,num);
      sum+=num*num
    } 
  
  
}
 return sum
}
