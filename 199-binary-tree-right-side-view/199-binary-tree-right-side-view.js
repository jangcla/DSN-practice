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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const rightValues = [];
    
    const stack = [ {node: root, level: 0} ];
    
    while (stack.length > 0) {
        const {node, level} = stack.pop();
        
        if (rightValues.length === level) {
            rightValues.push(node.val);
        } else {
            rightValues[level] = node.val;
        }
        
        if (node.right) stack.push({node: node.right, level: level + 1});
        if (node.left) stack.push({node: node.left, level: level + 1});
    }
    
    return rightValues;
};