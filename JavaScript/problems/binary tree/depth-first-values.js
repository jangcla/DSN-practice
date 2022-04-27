// depth first values
// Write a function, depthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in depth - first order.

// APROACH
// 1. if its depth firsdt i would approach with a stack
// 2. as we itterate through the stack we just want to store the values
// 3. after the itteratin we return the values from out stack approach

const depthFirstValues = (root) => {
  if (root === null) return [];

  const depthValues = [];
  const stack = [root];

  while (stack.length > 0) {
    let currentNode = stack.pop();

    depthValues.push(currentNode.val);

    if (currentNode.right !== null) stack.push(currentNode.right);
    if (currentNode.left !== null) stack.push(currentNode.left);
  }

  return depthValues;
}

// Itterative Approach:
// Space Complexity: O(n) as the stack and depth values increases n amount of times as we itterate through the tree
// Time Complexity: O(n) we itterate through the tree and that's an n amount of times

const depthFirstValues = (root) => {
    if (root === null) return [];

    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);

    return [root.val, ...leftValues, ...rightValues]
}
// Recursive Approach:
// Space Complexity: we instantiate O(n) of left values + O(m) of right values so in all it is O(n);
// Time Complexity:  we recursively call O(n) times to the left + O(m) times to the right in each recursive step so it 
// is really 2 calls of n (left and right) at every step so it is O(2^n);
