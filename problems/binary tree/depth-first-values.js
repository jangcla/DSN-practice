// depth first values
// Write a function, depthFirstValues, that takes in the root of a binary tree.The function should return an array containing all values of the tree in depth - first order.

//     Hey.This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough.Be productive, not stubborn. - AZ

const depthFirstValues = (root) => {
    if (root === null)
        return [];

    const values = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        values.push(node.val);

        if (node.right !== null)
            stack.push(node.right);

        if (node.left !== null)
            stack.push(node.left);
    }

    return values;
};