/*
tree sum
Write a function, treeSum, that takes in the root of a binary tree that contains number values.
The function should return the total sum of all values in the tree.
*/

const treeSumItters = (root) => {
  if (!root) return 0;
  
  let sumValues = 0;
  const stack = [ root ];
  
  while (stack.length > 0) {
    const current = stack.pop();
    
    sumValues += current.val;
    
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  
  return sumValues;
};
// Itterative Approach
// this is time: O(n) as it itterates through the loop n amount of times
// this is space: O(n) as we are continuosly adding to the stack n amount of times