// longest streak
// Write a function, longestStreak, that takes in the head of a linked list as an argument.The function should return the length of the longest consecutive streak of the same value within the list.

//ATTEMPT 1
// const longestStreak = (head) => {
//   // todo
//   if (head === null) return 0;
//   let count = 0;
//   let longest = 0;
//   let val = head.val;
  
//   let current = head;
//   while(current !== null) { 
//     if (val !== current.val) {
//       count = 0;
//       val = current.val
//     }
//     count++;
//     if(count > longest) longest = count;
//     current = current.next;
//   }
  
//   return longest;
// };
