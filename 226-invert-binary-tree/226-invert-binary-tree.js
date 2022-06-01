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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;
    const stack = [root];
    
    while (stack.length > 0) {
        let current = stack.pop();
        
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);

        const temp = current.right;
        current.right = current.left;
        current.left = temp;
    }
    
    return root;
};