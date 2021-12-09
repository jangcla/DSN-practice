// Write a function, linkedListValues, that takes in the head of a linked list as an argument.The function should return an array containing all values of the nodes in the linked list.

// Hey.This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough.Be productive, not stubborn. - AZ

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


//ATTEMPT 1
// const linkedListValues = (head) => { 
//   let current = head;
//   if (current === null) return [];

//  return [current.val].concat(linkedListValues(current.next));

//   const ans = [];
//   let current = head;

//   while(current !== null) {
//     ans.push(current.val);
//     current = current.next;
//   }

//   return ans;
// }


//ATTEMP 2
// const linkedListValues = (head) => { 
//   let current = head;
//   if (current === null) return [];

//  return [current.val].concat(linkedListValues(current.next));
// }

