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


//ATTEMPT 2
const longestStreak = (head) => {
    let count = 0;
    let longest = 0;

    let current = head;

    while (current !== null) {
        count++;
        if (count > longest) longest = count; //checks if the current set of values streak is greater, then it'll over write the old longest streak

        if (current.next !== null) { //if the next value is not null and the value is not the same as the current value
            if (current.next.val !== current.val) count = 0; //then we restart the count
        }

        current = current.next //itterates through the whole linked list;
    }

    return longest; //returns the overall longest streak of reoccuring values
};

//attempt 1 & 2 are time: O(n) as they itterate through a linked list;
//attempt 1 & 2 are space: O(1) as they only store the values initially and simply over write it as we itterate through the linked list;
