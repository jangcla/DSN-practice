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


// FINAL ATTEMPT W/NOTES
const zipperLists = (head1, head2) => {
    let curr = head1; //assigns a pointer to where we are currently
    let curr1 = head1.next; //so we can store the value of head1.next before it is over written
    let curr2 = head2; //used to store value of head2.next before over written

    let count = 0; //used to differentiate whether to use the first or second head 
    //even counts are for head1 while odd counts are for head2

    while (curr1 !== null && curr2 !== null) {
        if (count % 2 === 0) {
            curr.next = curr2;
            curr2 = curr2.next;
        } else {
            curr.next = curr1;
            curr1 = curr1.next;
        }

        curr = curr.next;
        count++;
    }
    if (curr1 !== null) curr.next = curr1;
    if (curr2 !== null) curr.next = curr2;

    return head1;
};
