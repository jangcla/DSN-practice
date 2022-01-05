// create linked list
// Write a function, createLinkedList, that takes in an array of values as an argument.The function should create a linked list containing each element of the array as the values of the nodes.The function should return the head of the linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//ATTEMPT 1
// const createLinkedList = (values) => {
//   if (!values.length) return null;
  
//   let index = 0;
//   let head = new Node(values[index]);
//   let current = head;
  
//   while(index < values.length-1) {
//     index++;
//     newNode = new Node(values[index]);
    
//     current.next = newNode;
//     current = current.next;  
//   }
  
//   return head;
// };