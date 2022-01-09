// pair sum
// Write a function, pairSum, that takes in an array and a target sum as arguments.The function should return an array containing a pair of indices whose elements sum to the given target.The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

//ATTEMPT 1 
// const pairSum = (numbers, targetSum) => {
//   // todo
//   let hash = {};
  
//   for (let i = 0; i < numbers.length; i++) {
//     let num = targetSum - numbers[i];
//     if (hash[num] === undefined) {
//       hash[num] = [i];
//     } else {
//       hash[num].push(i);
//     }
//   }
//   // console.log(hash);
  
//   for (let i = 0; i < numbers.length; i++) {
//     let number = parseInt(numbers[i]);
//     if (hash[number] !== undefined){
//       if ((hash[number].length !== 2) && (hash[number][0] !== i)) {
//         hash[number].push(i);
//         return hash[number]
//       } else if (hash[number].length === 2) {
//         return hash[number];
//       }      
//     }
//   }
// };

// this is time: O(n + n) => O(n) because the first loop itterates to store the values while the second loops through to the array;
// this is space: O(n) as we have to store values into the hash which is factored by n amount in the array;
