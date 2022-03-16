// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const reverseList = (head) => {
//   // todo
//   let prev = null;

//   let current = head;

//   while(current !== null) {
//     let next = current.next;

//     current.next = prev;
//     prev = current;

//     current = next;
//   }
//   return prev;
// };

// this is time: O(n) as we itterate through the linked list
// this is space: O(1) as we initialize the value and just override it as we itterate

const reverseList = (head, prev = null) => {
    if (head === null) return prev;

    let next = head.next;

    head.next = prev;
    return reverseList(next, head)
}

// this is time: O(n) as we recursion through the whole list
// this is space: O(n) as every stack stores the relevant data until we stop recursioning through


