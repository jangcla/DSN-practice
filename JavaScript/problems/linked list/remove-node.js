// remove node
// Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

// Do this in-place.

// You may assume that the input list is non-empty.

// You may assume that the input list contains the target.

//ATTEMPT 1
// const removeNode = (head, targetVal) => {
//   // todo
//   let current  = head;
//   let prev = null;
  
//   while (current.val !== targetVal) {
//     prev = current;
    
//     current = current.next;
//   }
  
//   let next = current.next;
//   current = prev;
  
//   if(current === null) {
//     return next;
//   } else {
//     current.next = next;
//   }

//   return head;
// };

//ATTEMP 2
const removeNode = (head, targetVal) => {
    let current = head;
    let prev = null;

    while (current.val !== targetVal) {
        prev = current;

        current = current.next;
    }
    if (prev === null) return current.next;
    prev.next = current.next;

    return head;
};

