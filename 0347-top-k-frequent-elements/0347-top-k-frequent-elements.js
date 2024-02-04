/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const obj ={}
    
    for(num of nums){
        
        let key=num
        obj[key]?obj[key]=obj[key]+1:obj[key]=1
    }
   return Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, k).map((x) => x[0])
    
};