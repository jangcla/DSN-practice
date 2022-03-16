// intersection
// Write a function, intersection, that takes in two arrays, a, b, as arguments.The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

//ATTEMPT 1
// const intersection = (a, b) => {
//   // todo
//   let hashCounter = {};
//   let ans = [];
  
//   for (let i = 0; i < a.length; i++) {
//     let num = a[i];
//     hashCounter[num] = 1;
//   }
  
//   for (let i = 0; i < b.length; i++) {
//     let num = b[i];
    
//     if (hashCounter[num] !== undefined) ans.push(num)
//     // if (hashCounter[num] === undefined) {
//     //   hashCounter[num] = 1;
//     // } else {
//     //   ans.push(num);
//     // }
//   }
  
//   return ans;
// };

const intersection = (a, b) => {
    // todo
    let set = new Set(a);
    let ans = [];

    for (let i = 0; i < b.length; i++) {
        let num = b[i];
        if (set.has(num)) ans.push(num);
    }

    return ans;
};

// this is time: O(n + m) => O(n) as we have to itterate through the array of b;
// this is space: O(n) as we use set to check if it has the number from the second array;
// key here is that look up time in a set and making a set is O(1);
