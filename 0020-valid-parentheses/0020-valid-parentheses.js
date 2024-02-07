/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   s = s.split("");
    var stack = [];
    for (var z of s) {
        if (z === "(" || z === "{" || z === "[") {
            stack.push(z);
        } else {
            var top = stack[stack.length - 1];
            if (z === ")" && top === "(" || z === "]" && top === "[" || z === "}" && top === "{")
                stack.pop();
            else
                return false;
        }
    }
    return stack.length === 0;
    
};