/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let per=[]
nums.forEach((num,index) => {
    if(num <nums.length){
        per.push(nums[num])
        
    }
       
});
        return per

    
};