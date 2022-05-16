/**
 * @param {number[][]} costs
 * @return {number}
 */

// 1. itterate through all the cost values
// 2. between the two cost values add the less of two numbers
// 3. the function should return a value of all the cheaper flights total

var twoCitySchedCost = function(costs) {
    let flightCost = 0;
    let sortedValues = costs.sort((a,b)=>a[0]-a[1]-(b[0]-b[1]));  // this sort function                                                                        focuses on sorting                                                                        the values on the                                                                          cost difference of                                                                         flight a and b;
    let half = costs.length / 2;
    for (let i = 0; i < costs.length; i++) {
        let cost = costs[i];
        if (i < half) {
            flightCost += cost[0];
        } else {
            flightCost += cost[1];
        }
    }   
    
    return flightCost;
};

// Space Complexity: the space complexity of the problem is at 1 as we simply overwrite
// the flightCost at every itterative step

// Time Complexity: the time complexity of the problem is O(nlogn) as we make use of the sort
// function but realistically it is at o(n^2) while our main itterative portion of the function runs at n so we have O(nlogn) + n => O(nlogn);
