// sum list
// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.The function should return the total sum of all values in the linked list.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//ATTEMP 1
// const sumList = (head) => {

//   let current = head;
//   let total = 0;

//   while (current !== null) {
//     total += current.val;
//     current = current.next;
//   }

//   return total;
// };