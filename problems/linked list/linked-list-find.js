// linked list find
// Write a function, linkedListFind, that takes in the head of a linked list and a target value.The function should return a boolean indicating whether or not the linked list contains the target.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// ATTEMP 1
// const linkedListFind = (head, target) => {
//   let current = head;

//   while (current !== null) {
//     if (current.val === target) return true;

//     current = current.next;
//   }

//   return false;
// };