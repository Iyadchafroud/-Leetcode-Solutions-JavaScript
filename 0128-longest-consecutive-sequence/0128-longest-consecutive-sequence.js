/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
      if(nums.length<=1) return nums.length;
    nums.sort(function(a,b) {return a-b});
    const set=new Set(nums);
    if(set.size==1)return 1;
    let count=1, max=1;
    set.forEach(num=>{
        
        if(set.has(num+1)){
            count ++
        max=Math.max(count,max)

        }
        else{
            count=1;
        }
    })
    return max
};