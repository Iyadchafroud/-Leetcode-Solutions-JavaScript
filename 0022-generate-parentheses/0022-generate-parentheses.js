/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    
    const dfs = (str, open, close) => {
        // Backtracking case: number of ')' can't be more than number of '('
        if (open < close) return;
        
        // Base case: there are n number of open and close parenthesis
        if (open === n && close === n) {
            res.push(str);
            return;
        }
        
        // DFS traversal
        if (open < n) dfs(str + '(', open + 1, close);
        if (close < n) dfs(str + ')', open, close + 1);
    }
    
    dfs('', 0, 0);
    return res; 
};