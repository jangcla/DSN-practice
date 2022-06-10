/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const path1 = helper(root, p);
    const path2 = helper(root, q);
    const set1 = new Set(path1);
    
    for (let val of path2) {
        if (set1.has(val)) return val;
    }
};

const helper = (root, target) => {
  if (root === null) return null;
  if (root === target) return [root];
  
  let left = helper(root.left, target);
  if (left) {
    left.push(root);
    return left;
  }
  
  let right = helper(root.right, target);
  if (right) {
    right.push(root);
    return right;
  }
  
  return null;
}