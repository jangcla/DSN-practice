// insert node
// Write a function, insertNode, that takes in the head of a linked list, a value, and an index.The function should insert a new node with the value into the list at the specified index.Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in -place.

// You may assume that the input list is non - empty and the index is not greater than the length of the input list.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
//ATTEMPT 1
const insertNode = (head, value, index) => {
    let newNode = new Node(value);
    let currIndex = 0;

    let current = head;


    while (current !== null) {
        if (currIndex + 1 === index) {
            newNode.next = current.next;
            current.next = newNode;
            return head;
        };

        if (index === 0) {
            newNode.next = current;
            return newNode;
        };

        currIndex++;
        current = current.next;
    };
};

//this is time: O(n) as I itterate through the linked list until the index is found;
//this is space: O(1) as I am simply initializing the data at first and simply keying into the linked list;


//ATTMEPT 2
//   const insertNode = (head, value, index) => {
//     let newNode = new Node(value);
    
//     if(index === 0) {
//       newNode.next = head;
//       return newNode;
//     }
   
//     if (index === 1) {  
//       newNode.next = head.next;
//       head.next = newNode;
//       return;
//     }
    
//     insertNode(head.next, value, index-1);
    
//     return head;
//   };
//this is time: O(n) as I recursion through the whole linked list until the index is found;
//this is space: O(n) as every stack stores a different value;

