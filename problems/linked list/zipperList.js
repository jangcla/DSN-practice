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

