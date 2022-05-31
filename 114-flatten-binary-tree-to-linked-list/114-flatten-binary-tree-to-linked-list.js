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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return [];
    let node = new TreeNode(null);
    
    const stack = [root];
    
    while (stack.length > 0) {
        const current = stack.pop();
        
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
        
        node.right = current;
        node.left = null;
        
        node = node.right;
    };
};