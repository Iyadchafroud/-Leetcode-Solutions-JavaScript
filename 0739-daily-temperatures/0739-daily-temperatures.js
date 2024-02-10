/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;

    
    const result = new Array(n).fill(0);

    const stack = [];

    for (let i = 0; i < n; i++) {
       
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            
            const index = stack.pop();
           
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
};