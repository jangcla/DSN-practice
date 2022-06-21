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
// RECURSIVE ATTEMPT
const maxDepth = (root) => {
    if (!root) return 0;    
    if (!root.left && !root.right) return 1;

    return Math.max(1 + maxDepth(root.right), 1 + maxDepth(root.left));
};



// ITERATIVE ATTEMPT
// var maxDepth = function(root) {
//     if (!root) return 0;
    
//     const stack = [[root, 1]];
//     let depth = 0;
//     while (stack.length > 0) {
//         const [node, level] = stack.pop();
//         depth = Math.max(level, depth);
        
//         if (node.left) stack.push([node.left, level + 1]);
//         if (node.right) stack.push([node.right, level + 1]);
//     }
    
//     return depth;
// };