/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let profit = 0;
    let lowest = prices[0];
    
    for (let price of prices) {
        if (price < lowest) lowest = price;
        
        if (price > lowest) {
            let value = price - lowest;     
            profit = Math.max(profit, value);
        }
    }
    
    return profit;
}



// var maxProfit = function(prices) {
//     let profit = 0;                         //initiate lowest price to 0;
//     let lowPrice = prices[0];               // use the first value of the array as the current lowestPrice
    
//     for (let i = 0; i < prices.length; i++) {
//         let currentPrice = prices[i];
//         let currentProfit = currentPrice - lowPrice;
        
//         if (currentPrice < lowPrice) lowPrice = currentPrice;   // if a lower price value is found, we change the lowest value
        
//         if (currentProfit > profit) profit = currentProfit;     // if the current profit from selling is greater than before then we want to overwrite the profit of return
//     }
    
//     return profit;
// }
