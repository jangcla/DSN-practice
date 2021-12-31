// ATTEMPT 1
// const zipperLists = (head1, head2) => {
//   // todo
//   let tail = head1;
//   let currA = head1.next;
//   let currB = head2;
//   let count = 0;

//   while (currA !== null && currB !== null) {
//     if (count % 2 === 0) {
//       tail.next = currB;
//       currB = currB.next
//     } else {
//       tail.next = currA;
//       currA = currA.next;
//     }

//     tail = tail.next; 
//     count++;
//   }
//   if (currA !== null) tail.next = currA;
//   if (currB !== null) tail.next = currB;

//   return head1;
// };

// this is time: O(n) as we itterate through the linked list only once;
// this is space: O(1) as we really just change out the next pointer on the linked list;

// ATTEMPT 2

// const zipperLists = (head1, head2) => {
//     if (head1 === null && head2 === null) return null;
//     if (head1 === null) return head2;
//     if (head2 === null) return head1;

//   let next1 = head1.next;
//   let next2 = head2.next;
//   head1.next = head2;
//   head2.next = zipperLists(next1, next2);

//   return head1;
// }

// this is time: O(n) as we recurssion through the linked list;
// this is space: O(n) as we store the values in every recursive stack;


