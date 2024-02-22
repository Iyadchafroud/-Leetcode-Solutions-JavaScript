/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
      let a=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]<nums[j]){
                a.push(nums[j]-nums[i]);
            }
        }
    }
    
    let b=Math.max(...a);

    if(b==-Infinity){
        return -1;
    }else{
         return b;
    }
};