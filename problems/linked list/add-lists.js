// add lists
// Write a function, addLists, that takes in the head of two linked lists, each representing a number.The nodes of the linked lists contain digits as values.The nodes in the input lists are reversed; this means that the least significant digit of the number is the head.The function should return the head of a new linked listed representing the sum of the input lists.The output list should have its digits reversed as well.

// Say we wanted to compute 621 + 354 normally.The sum is 975:

// 621
//     + 354
// -----
//     975

// Then, the reversed linked list format of this problem would appear as:

// 1 -> 2 -> 6
//     + 4 -> 5 -> 3
// --------------
//     5 -> 7 -> 9

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addLists = (head1, head2) => {
    // todo
    let newList = new Node(null);

    let current = newList;
    let curr1 = head1;
    let curr2 = head2;

    while (curr1 !== null) {
        let nextVal = curr1.val + curr2.val;

        if (nextVal >= 10) {
            nextVal -= 10;
            curr1.next.val++;
        }

        if (curr2 === null) {
            let nextVal = curr1.val + 0
        }

        current.next = new Node(nextVal);

        if (curr1.next !== null) curr1 = curr1.next;
        if (curr2.next !== null) curr2 = curr2.next;

        current = current.next;

    }

    return newList.next;
};

