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

//ATTEMPT 2
// const createLinkedList = (values) => {
//   let tempHead = new Node(null);
  
//   let current = tempHead;
  
//   for (let val of values) {
//     current.next = new Node(val);
//     current = current.next;
//   }
  
//   return tempHead.next;
// };

//this is both time: O(n) as we itterate until the end of the values array;
//this is both space: O(n) as at every itteration we make a new Node;

//ATTEMPT 3
const createLinkedList = (values, i = 0) => {
    if (i === values.length) return null;

    let head = new Node(values[i]);

    head.next = createLinkedList(values, i + 1);
    return head;
};

//this is time: O(n) as we recursion until the end of the values array;
//this is space: O(n) as we store different values on every call stack;
