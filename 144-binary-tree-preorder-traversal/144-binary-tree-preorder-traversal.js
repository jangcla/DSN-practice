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
// var preorderTraversal = function(root) {
//     if (!root) return [];
//     const vals = [];
    
//     const stack = [root];
//     while (stack.length) {
//         const current = stack.pop();
//         vals.push(current.val);
        
//         if (current.right) stack.push(current.right);
//         if (current.left) stack.push(current.left);
//     };
    
//     return vals;
// };

const preorderTraversal = (root) => {
    const vals = [];
    helper(root, vals);  
    return vals;
}

const helper = (root, vals) => {
    if (!root) return;
    vals.push(root.val);
    
    helper(root.left, vals);
    helper(root.right, vals);
}