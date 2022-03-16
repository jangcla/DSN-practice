// pair product
// Write a function, pairProduct, that takes in an array and a target product as arguments.The function should return an array containing a pair of indices whose elements multiply to the given target.The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
    // todo
    let hash = {};
    console.log(numbers)
    for (let i = 0; i < numbers.length; i++) {
        let number = (targetProduct / numbers[i]);

        if (number in hash) return [hash[number], i];

        hash[numbers[i]] = i;
    }
    //  if (hash[number] === undefined) {
    //    hash[numbers[i]] = i;
    //  } else {
    //    return [hash[number], i]
    //  }
    // }
};

// this is time: O(n) as we have to itterate once through the numbers array
// this is space: O(n) as we have to store the values from the array
