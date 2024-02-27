/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  const diameter = (node, res) => {
        // Base case: if the current node is null, return 0
        if (!node) return 0;
        
        // Recursively calculate the diameter of left and right subtrees
        const left = diameter(node.left, res);
        const right = diameter(node.right, res);

        // Update the maximum diameter encountered so far
        res[0] = Math.max(res[0], left + right);
        
        // Return the depth of the current node
        return Math.max(left, right) + 1;
    }
    
    // Initialize a list to hold the maximum diameter encountered
    const res = [0];
    // Call the diameter function starting from the root
    diameter(root, res);
    // Return the maximum diameter encountered
    return res[0];  
};