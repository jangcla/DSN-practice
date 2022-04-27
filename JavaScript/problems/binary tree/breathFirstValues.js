// Write a function, breadthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in breadth - first order.

// APPROACH
// 1. need to itteratively grab all values of the tree and store in an array;
// 2. use a breadth first approach when traversing the tree (queue)
// 3. return all breadth first values

const breadthFirstValues = (root) => {
    if (root === null) return [];

    const breadthValues = [];
    const queue = [root];

    while (queue.length > 0) {
        let current = queue.shift();

        breadthValues.push(current.val);

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return breadthValues;
};

// Itterative Approach:
// Space Complexity: we add n amount of items into the queue and breadthValues so the total space is O(n)
// Time Complexity: we itterate through the whole tree and that's n while .shift runs in O(n) so n * n is O(n^2);
