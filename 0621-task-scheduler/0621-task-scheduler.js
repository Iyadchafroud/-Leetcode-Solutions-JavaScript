/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  if (n === 0) return tasks.length;
    const frequency = Array(26).fill(0);
    let max = 0;
    let maxTaskIndex;
    for (let task of tasks) {
        let index = task.charCodeAt() - 'A'.charCodeAt();
        
        frequency[index]++;
        if (frequency[index] > max){
            max = frequency[index];
            maxTaskIndex = index;
        }
    }
    
    let maxVal = max - 1;
    let idelTime = maxVal*n;
    
    for (let i = 0; i < 26; i++) {
        if (i === maxTaskIndex) continue;
        idelTime -= Math.min(frequency[i], maxVal);
    }
    
    return idelTime > 0 ? idelTime + tasks.length : tasks.length;  
};