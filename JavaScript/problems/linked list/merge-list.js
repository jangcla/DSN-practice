// merge lists
// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments.The function should merge the two lists together into single sorted linked list.The function should return the head of the merged linked list.

// Do this in -place, by mutating the original Nodes.

// You may assume that both input lists are non - empty and contain increasing sorted numbers.

const mergeLists = (head1, head2) => {
    // todo
    let current = head1;
    let curr1 = head1.next;
    let curr2 = head2;
    if (head2.val < head1.val) {
        current = head2;
        curr1 = head1;
        curr2 = head2.next
    }

    let temp = null;

    while (curr1 !== null && curr2 !== null) {
        if (curr1.val < curr2.val) {
            current.next = curr1;
            curr1 = curr1.next;

        } else {
            current.next = curr2;
            curr2 = curr2.next;

        }
        current = current.next;
    }
    if (curr1 !== null) current.next = curr1;
    if (curr2 !== null) current.next = curr2;

    if (head2.val < head1.val) return head2;

    return head1;
};

// this is time: O(n) as it only itterates once through the linked list;
// this is space: O(1) as I'm just keying into the original head node pointer as I itterate through;

